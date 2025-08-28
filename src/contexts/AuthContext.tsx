import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'user' | 'admin';

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string, role?: UserRole) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            // In a real app, this would come from your authentication API
            const isAdminUser = email === 'admin@example.com';
            setUser({
                id: '1',
                name: isAdminUser ? 'Admin User' : 'Fashion User',
                email: email,
                role: isAdminUser ? 'admin' : 'user'
            });
            setIsLoading(false);
        }, 1000);
    };

    const signup = async (name: string, email: string, password: string, role: UserRole = 'user') => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setUser({
                id: '1',
                name: name,
                email: email,
                role: role
            });
            setIsLoading(false);
        }, 1000);
    };

    const isAdmin = (): boolean => {
        return user?.role === 'admin';
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        signup,
        logout,
        isLoading,
        isAdmin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
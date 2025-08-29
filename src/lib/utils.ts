import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'currency',
        currency: 'GHS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}

type Gender = 'male' | 'female' | 'other';

export function getAvatarUrl(gender: Gender = 'other', name?: string): string {
    const baseUrl = 'https://api.dicebear.com/7.x/avataaars/svg';
    const seed = name?.replace(/\s+/g, '') || Math.random().toString(36).substring(2, 10);
    
    // Base options
    const options: Record<string, string> = {
        seed,
        backgroundColor: 'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'.split(',')[Math.floor(Math.random() * 5)],
        backgroundType: 'gradientLinear',
        radius: '50',
    };

    // Gender-specific options
    if (gender === 'male') {
        options.top = ['shortHair', 'hat', 'eyepatch', 'hijab', 'turban', 'winterHat1', 'winterHat2'][Math.floor(Math.random() * 7)];
        options.hairColor = ['0e0e0e', '3e1f19', '4a312c', 'a55728', 'b58143', 'd6b370', 'f59797'][Math.floor(Math.random() * 7)];
    } else if (gender === 'female') {
        options.top = ['longHair', 'bigHair', 'bob', 'bun', 'curly', 'curvy', 'frida'][Math.floor(Math.random() * 7)];
        options.hairColor = ['0e0e0e', '3e1f19', '4a312c', 'a55728', 'b58143', 'd6b370', 'f59797'][Math.floor(Math.random() * 7)];
    }

    // Build URL with parameters
    const params = new URLSearchParams();
    Object.entries(options).forEach(([key, value]) => {
        params.append(key, value);
    });
    
    return `${baseUrl}?${params.toString()}`;
}

export function getInitials(name: string = ''): string {
    return name
        .split(' ')
        .map(part => part[0])
        .filter(Boolean)
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

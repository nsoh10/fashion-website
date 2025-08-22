import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <div className="max-w-md w-full space-y-6 text-center">
                <h1 className="text-6xl font-serif font-bold text-foreground">404</h1>
                <h2 className="text-2xl font-medium text-muted-foreground">Page Not Found</h2>
                <p className="text-muted-foreground">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button 
                        variant="outline" 
                        onClick={handleBack}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                    <Button asChild variant="default">
                        <a href="/">Return to Home</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

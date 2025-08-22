// src/components/Hero.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

// Import your 4 hero images
import heroFashion from '@/assets/hero-fashion.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';

const Hero = () => {
    const heroImages = [heroFashion, hero2, hero3, hero4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    // Auto-rotate every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
            setNextIndex((prev) => (prev + 1) % heroImages.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* Current Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${heroImages[currentIndex]})`,
                    transform: 'translateX(0)',
                    opacity: 1,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Next Image (slides in from right) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${heroImages[nextIndex]})`,
                    transform: 'translateX(100%)',
                    opacity: 1,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
                <div className="max-w-3xl">
                    <div className="flex items-center space-x-2 mb-6">
                        <Sparkles className="w-6 h-6 text-secondary" />
                        <span className="text-secondary font-medium tracking-wide uppercase">
              Luxury Fashion Design
            </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                        <span className="text-white">Crafting</span>
                        <br />
                        <span className="text-gradient">Bespoke Elegance</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                        Transform your vision into reality with our expert fashion design services.
                        From custom garments to complete wardrobe curation, we create pieces that
                        define your unique style.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="gold" size="lg" className="group">
                            <Calendar className="w-5 h-5" />
                            Book Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button variant="hero" size="lg">
                            View Portfolio
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                        <div>
                            <div className="text-3xl font-bold text-secondary">500+</div>
                            <div className="text-white/80">Custom Designs</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-secondary">50+</div>
                            <div className="text-white/80">Premium Fabrics</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-secondary">3+</div>
                            <div className="text-white/80">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Palette, Crown, Zap, Clock, Heart } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Crown className="w-8 h-8" />,
            title: "Custom Couture",
            description: "Bespoke garments tailored to your exact measurements and style preferences.",
            features: ["Personal consultation", "Premium fabrics", "Perfect fit guarantee"],
            price: "From ₵2,500",
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Design Consultation",
            description: "Professional styling advice and wardrobe planning for any occasion.",
            features: ["Style analysis", "Color coordination", "Wardrobe audit"],
            price: "From ₵500",
        },
        {
            icon: <Scissors className="w-8 h-8" />,
            title: "Alterations & Repairs",
            description: "Expert alterations to ensure your garments fit perfectly and last longer.",
            features: ["Precision fitting", "Quality repairs", "Quick turnaround"],
            price: "From ₵150",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Express Service",
            description: "Rush orders for special events with our premium express service.",
            features: ["5-day delivery", "Priority booking", "Dedicated support"],
            price: "From ₵1,000",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Seasonal Collections",
            description: "Exclusive seasonal pieces designed with the latest fashion trends.",
            features: ["Limited editions", "Trend forecasting", "Premium materials"],
            price: "From ₵800",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Bridal Couture",
            description: "Dream wedding dresses and formal wear for your special day.",
            features: ["Multiple fittings", "Custom embellishments", "Heirloom quality"],
            price: "From ₵3,500",
        },
    ];

    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From concept to creation, we offer comprehensive fashion services
                        tailored to your unique needs and style vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-luxury transition-luxury border-0 luxury-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-fashion-gradient rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-luxury">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                                <CardDescription className="text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-accent">{service.price}</span>
                                    <Button variant="elegant" size="sm">
                                        Learn More
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="luxury" size="lg">
                        Schedule Your Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;
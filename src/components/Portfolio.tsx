import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import designPortfolio from '@/assets/design-portfolio.jpg';
import luxuryFabrics from '@/assets/luxury-fabrics.jpg';

const Portfolio = () => {
    const { addItem } = useCart();
    const { toast } = useToast();
    const portfolioItems = [
        {
            id: 1,
            title: "Evening Gown Collection",
            category: "Formal Wear",
            image: designPortfolio,
            description: "Elegant evening gowns featuring intricate beadwork and flowing silhouettes.",
            tags: ["Couture", "Evening", "Luxury"],
            price: 1299,
        },
        {
            id: 2,
            title: "Business Attire Series",
            category: "Professional",
            image: luxuryFabrics,
            description: "Modern professional wear that combines comfort with sophisticated styling.",
            tags: ["Business", "Modern", "Tailored"],
            price: 899,
        },
        {
            id: 3,
            title: "Bridal Couture",
            category: "Wedding",
            image: designPortfolio,
            description: "Bespoke wedding dresses with custom embellishments and perfect fits.",
            tags: ["Bridal", "Custom", "Elegant"],
            price: 2499,
        },
        {
            id: 4,
            title: "Casual Luxury",
            category: "Casual",
            image: luxuryFabrics,
            description: "Elevated everyday wear that brings luxury to casual moments.",
            tags: ["Casual", "Comfort", "Style"],
            price: 599,
        },
        {
            id: 5,
            title: "Red Carpet Ready",
            category: "Special Events",
            image: designPortfolio,
            description: "Show-stopping pieces designed for special occasions and events.",
            tags: ["Glamour", "Events", "Statement"],
            price: 1799,
        },
        {
            id: 6,
            title: "Seasonal Capsule",
            category: "Collections",
            image: luxuryFabrics,
            description: "Curated seasonal pieces that define contemporary fashion trends.",
            tags: ["Seasonal", "Trendy", "Versatile"],
            price: 799,
        },
    ];

    const handleAddToCart = (item: any) => {
        addItem({
            id: item.id.toString(),
            name: item.title,
            price: item.price,
            image: item.image,
        });
        toast({
            title: "Added to Cart",
            description: `${item.title} has been added to your cart.`,
        });
    };

    const categories = ["All", "Formal Wear", "Professional", "Wedding", "Casual", "Special Events", "Collections"];

    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Our <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Discover our latest creations and get inspired by our diverse range
                        of fashion designs and styling solutions.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === "All" ? "secondary" : "ghost"}
                                size="sm"
                                className="transition-luxury"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <Card key={item.id} className="group overflow-hidden border-0 luxury-shadow hover:shadow-elegant transition-luxury">
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center gap-2">
                                    <Button variant="hero" size="sm">
                                        View Details
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <Badge variant="secondary" className="text-xs">
                                        {item.category}
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold">${item.price}</span>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="elegant" size="lg">
                        View Complete Portfolio
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
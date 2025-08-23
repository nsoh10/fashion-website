import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Import the images from assets
import img1 from '@/assets/087d3fd9-dc65-4334-a6ae-a9fb1b9dc237.jpg';
import img2 from '@/assets/Asoebi , Owambe style.jpg';
import img3 from '@/assets/c9811def-bcab-.jpg';
import img4 from '@/assets/DescriptionTop Category.jpg';
import img5 from '@/assets/fa5ff4b4-580b.jpg';
import img6 from '@/assets/fa28db1-3050 (2).jpg';
import img7 from '@/assets/fa28db1-3050 (4).jpg';
import img8 from '@/assets/fa28db1-3050 (7).jpg';
import img9 from '@/assets/woman-.jpg';
import img10 from '@/assets/gene.jpg';

const Portfolio = () => {
    const { addItem } = useCart();
    const { toast } = useToast();
    const portfolioItems = [
        {
            id: 1,
            title: "Elegant Evening Gown",
            category: "Evening Wear",
            image: img1,
            description: "Stunning evening gown with intricate detailing and flowing silhouette.",
            tags: ["Luxury", "Evening", "Formal"],
            price: 1499.99,
        },
        {
            id: 2,
            title: "Asoebi Collection",
            category: "Traditional",
            image: img2,
            description: "Beautiful Asoebi styles perfect for weddings and special occasions.",
            tags: ["Traditional", "Owambe", "Vibrant"],
            price: 1299.99,
        },
        {
            id: 3,
            title: "Chic Office Attire",
            category: "Professional",
            image: img3,
            description: "Sophisticated office wear that combines comfort and style.",
            tags: ["Workwear", "Elegant", "Professional"],
            price: 899.99,
        },
        {
            id: 4,
            title: "Luxury Collection",
            category: "Luxury",
            image: img4,
            description: "High-end fashion pieces for the modern, sophisticated woman.",
            tags: ["Luxury", "Premium", "Elegant"],
            price: 2499.99,
        },
        {
            id: 5,
            title: "Casual Elegance",
            category: "Casual",
            image: img5,
            description: "Effortlessly stylish casual wear for everyday comfort.",
            tags: ["Casual", "Comfort", "Chic"],
            price: 599.99,
        },
        {
            id: 6,
            title: "Party Collection",
            category: "Party Wear",
            image: img6,
            description: "Show-stopping outfits for your special nights out.",
            tags: ["Party", "Glamorous", "Trendy"],
            price: 1399.99,
        },
        {
            id: 7,
            title: "Formal Attire",
            category: "Formal",
            image: img7,
            description: "Classic formal wear for important events and occasions.",
            tags: ["Formal", "Classic", "Elegant"],
            price: 1599.99,
        },
        {
            id: 8,
            title: "Evening Glam",
            category: "Evening Wear",
            image: img8,
            description: "Glamorous evening wear that makes a statement.",
            tags: ["Evening", "Glamour", "Luxury"],
            price: 1799.99,
        },
        {
            id: 9,
            title: "Modern Woman",
            category: "Contemporary",
            image: img9,
            description: "Contemporary styles for the modern, confident woman.",
            tags: ["Modern", "Trendy", "Chic"],
            price: 999.99,
        },
        {
            id: 10,
            title: "Gene",
            category: "Casual",
            image: img10,
            description: "Casual wear for everyday comfort.",
            tags: ["Casual", "Comfort", "Chic"],
            price: 599.99,
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

    const categories = ["All", "Evening Wear", "Traditional", "Professional", "Luxury", "Casual", "Party Wear", "Formal", "Contemporary"];

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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {portfolioItems.map((item) => (
                        <Card key={item.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative overflow-hidden aspect-[2/3] w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                                    <Button 
                                        variant="default" 
                                        size="xs"
                                        className="h-7 text-xs px-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToCart(item);
                                        }}
                                    >
                                        Quick Add
                                    </Button>
                                </div>
                                <Badge className="absolute top-2 left-2 text-[10px] h-5 px-1.5 bg-white text-foreground hover:bg-white/90">
                                    {item.category}
                                </Badge>
                            </div>
                            <CardContent className="p-3">
                                <h3 className="text-sm font-medium line-clamp-1 mb-1">{item.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">₵{item.price.toFixed(2)}</span>
                                    <div className="flex items-center gap-1">
                                        {item.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] px-1.5 py-0.5 bg-muted rounded-full text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
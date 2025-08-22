import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Music2 } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { 
            icon: <Instagram className="w-5 h-5" />, 
            href: "https://www.instagram.com/threadz_bigaskins", 
            label: "Instagram" 
        },
        { 
            icon: <Music2 className="w-5 h-5" />, 
            href: "https://www.tiktok.com/@threadz_bigaskins", 
            label: "TikTok" 
        },
        { 
            icon: <Facebook className="w-5 h-5" />, 
            href: "#", 
            label: "Facebook" 
        },
        { 
            icon: <Youtube className="w-5 h-5" />, 
            href: "#", 
            label: "YouTube" 
        },
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
    ];

    const services = [
        { name: "Custom Couture", href: "#" },
        { name: "Design Consultation", href: "#" },
        { name: "Alterations", href: "#" },
        { name: "Bridal Couture", href: "#" },
        { name: "Express Service", href: "#" },
        { name: "Seasonal Collections", href: "#" },
    ];

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                            <span className="text-2xl font-serif font-bold">
                Threadz BiGaskins
              </span>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed">
                            Creating bespoke fashion pieces that define luxury and elegance.
                            Where craftsmanship meets artistry.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-luxury"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/80 hover:text-secondary transition-luxury"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-primary-foreground/80 hover:text-secondary transition-luxury"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                                <div className="text-primary-foreground/80">
                                    <div>Adenta Housing Christ Apostolic Church</div>
                                    <div>Accra</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-primary-foreground/80">(+223) 0248167891/0544701851</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-primary-foreground/80">Threadzbigaskins@gmail.com</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button variant="secondary" size="sm" className="w-full">
                                Book Consultation
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="py-8 border-t border-primary-foreground/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-2">Stay Updated</h3>
                            <p className="text-primary-foreground/80">
                                Get the latest fashion insights and exclusive offers.
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                            <Button variant="secondary">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-primary-foreground/80 text-sm">
                        2024 Threadz BiGaskins. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
                        <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-luxury">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-luxury">
                            Terms of Service
                        </a>
                        <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-luxury">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
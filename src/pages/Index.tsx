import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <main className="min-h-screen">
            <Navigation />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </main>
    );
};

export default Index;

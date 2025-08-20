import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">ALEX MORGAN</h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">Luxury Fashion Designer</p>
                <div className="space-x-6">
                    <Link href="/collections" className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
                        Collections
                    </Link>
                    <Link href="/about" className="border border-transparent px-8 py-3 hover:underline">
                        About
                    </Link>
                </div>
            </section>

            {/* Image Gallery Preview */}
            <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 h-64 flex items-center justify-center">Lookbook 1</div>
                <div className="bg-gray-900 h-64 flex items-center justify-center">Runway 2024</div>
                <div className="bg-gray-800 h-64 flex items-center justify-center">Editorial</div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                © 2025 Alex Morgan Studio. All rights reserved.
            </footer>
        </div>
    );
}
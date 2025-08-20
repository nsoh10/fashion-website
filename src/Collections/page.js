export default function Collections() {
    return (
        <div className="min-h-screen bg-white px-8 py-16">
            <h1 className="text-4xl font-bold mb-8">Our Collections</h1>
            <p className="text-lg mb-10">Explore our latest fashion lines and runway shows.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border p-4">
                    <h2 className="text-2xl font-semibold">Spring 2025</h2>
                    <p className="mt-2">Pastel tones and flowing silhouettes.</p>
                </div>
                <div className="border p-4">
                    <h2 className="text-2xl font-semibold">Urban Noir</h2>
                    <p className="mt-2">Edgy streetwear meets haute couture.</p>
                </div>
                <div className="border p-4">
                    <h2 className="text-2xl font-semibold">Evening Glamour</h2>
                    <p className="mt-2">Luxurious gowns for red carpet moments.</p>
                </div>
            </div>

            <div className="mt-12">
                <a href="/" className="text-black underline">← Back to Home</a>
            </div>
        </div>
    );
}
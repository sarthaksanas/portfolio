import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                HELLO, I'M <span className="text-accent">SARTHAK</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10">
                Building digital experiences with bold minimalism and precision.
            </p>
            <Link
                href="#projects"
                className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg hover:bg-accent hover:text-black transition-colors duration-300 uppercase tracking-widest"
            >
                View Projects
            </Link>
        </section>
    );
}

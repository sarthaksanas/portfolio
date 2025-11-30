import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <BentoGrid />
      <footer className="py-10 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} MyStandoutPortfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}

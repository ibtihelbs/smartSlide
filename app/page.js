// app/page.tsx
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-var-bg text-var-text font-sans">
      <Hero />
      <Features />
      <HowItWorks />
      <Cta />
      <Footer />
    </main>
  );
}

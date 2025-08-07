import Navbar from "@/common/navbar";
import About from "@/components/about";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Story from "@/components/story";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

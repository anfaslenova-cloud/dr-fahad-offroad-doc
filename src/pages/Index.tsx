import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Medical from "@/components/Medical";
import Racing from "@/components/Racing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Medical />
      <Racing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
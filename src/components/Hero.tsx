import { Button } from "@/components/ui/button";
import { Trophy, Stethoscope, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-offroad.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Off-road racing" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Racing Stripe Effect */}
      <div className="absolute inset-0 bg-speed-gradient opacity-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-6 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Stethoscope className="w-10 h-10 text-primary" />
          <div className="w-12 h-0.5 bg-racing-gradient" />
          <Trophy className="w-10 h-10 text-primary animate-pulse-glow" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="block text-foreground">Dr. Mohammed</span>
          <span className="block bg-racing-gradient bg-clip-text text-transparent">
            Fahed VP
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Pediatrician • 2024 RFC India Champion
        </p>

        <Button 
          size="lg" 
          className="bg-racing-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 font-semibold mt-8"
          onClick={scrollToAbout}
        >
          Learn More
        </Button>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
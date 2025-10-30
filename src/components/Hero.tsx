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
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Stethoscope className="w-8 h-8 text-primary" />
          </div>
          <div className="w-12 h-0.5 bg-racing-gradient" />
          <div className="p-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm animate-pulse-glow">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="block text-foreground">Dr. Mohammed</span>
          <span className="block bg-racing-gradient bg-clip-text text-transparent">
            Fahed VP
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Pediatrician by day. Off-Road Champion by passion.
          <span className="block mt-2 text-primary font-semibold">
            2024 RFC India Champion
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-racing-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 font-semibold"
            onClick={scrollToAbout}
          >
            Discover the Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            onClick={() => document.getElementById('racing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Achievements
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Stethoscope, Trophy, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-hero-gradient">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-racing-gradient bg-clip-text text-transparent">Dual Excellence</span>
          </h2>
          <p className="text-muted-foreground">Healing and horsepower</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Pediatrician</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              Practicing at Soothee Sparsh Clinic, Kandamangalam, Kerala
            </p>
            <p className="text-sm text-muted-foreground">
              Dedicated to children's health and community care
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-primary animate-pulse-glow" />
              <h3 className="text-xl font-bold">Racing Champion</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              2024 RFC India Champion with co-driver Rajeev Lal
            </p>
            <p className="text-sm text-muted-foreground">
              2,165 points • 26 special stages • CJ500 "Colossus"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
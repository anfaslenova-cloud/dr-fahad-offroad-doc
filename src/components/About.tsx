import { Stethoscope, Heart, Users, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Life of <span className="bg-racing-gradient bg-clip-text text-transparent">Dual Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where healing meets horsepower, compassion meets competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Medical Career</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                As a dedicated pediatrician at <strong className="text-foreground">Soothee Sparsh Clinic</strong> in Kandamangalam, Kerala, 
                Dr. Fahed has devoted his career to the health and wellbeing of children in his community.
              </p>
              <div className="flex items-start gap-3 pt-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Soothee Sparsh Clinic</p>
                  <p className="text-sm">Kandamangalam, Malappuram District, Kerala</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p>Frontline healthcare provider during the COVID-19 pandemic, serving his community with dedication</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p>Trusted pediatrician providing comprehensive child healthcare services</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg animate-pulse-glow">
                <img src="/placeholder.svg" alt="Racing" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Racing Passion</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Born and raised in the hilly terrain of Malappuram, Dr. Fahed's passion for off-roading 
                started early with the family's Willys Jeep navigating rugged rural paths.
              </p>
              <p className="leading-relaxed">
                What began as childhood fascination evolved into serious motorsport excellence, 
                mastering vehicle dynamics, weight-power ratios, and competitive racing strategies.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p><strong className="text-foreground">Evolution:</strong> From modified Mahindra Thar to the legendary CJ500 <strong className="text-primary">"Colossus"</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p><strong className="text-foreground">Philosophy:</strong> Shifted from playing safe to going full throttle from Day 1</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p><strong className="text-foreground">Result:</strong> 2024 RFC India Champion with co-driver Rajeev Lal</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-center leading-relaxed text-muted-foreground">
            Dr. Mohammed Fahed VP's story is a testament to pursuing excellence beyond conventional boundaries. 
            His ability to balance the demanding responsibilities of pediatric care with the intense dedication 
            required for championship-level motorsport demonstrates <span className="text-primary font-semibold">
            exceptional discipline, time management, and an unwavering commitment to excellence in every arena.
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
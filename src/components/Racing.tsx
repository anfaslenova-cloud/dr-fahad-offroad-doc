import { Trophy, Target, TrendingUp, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import championshipImage from "@/assets/championship.jpg";

const Racing = () => {
  const stats = [
    { label: "Stages", value: "26", icon: Target },
    { label: "Points", value: "2,165", icon: TrendingUp },
    { label: "Days", value: "5", icon: Calendar },
    { label: "Co-Driver", value: "R. Lal", icon: Users }
  ];

  return (
    <section id="racing" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-racing-gradient bg-clip-text text-transparent">Racing Achievements</span>
          </h2>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden border-primary/30">
            <img 
              src={championshipImage} 
              alt="Championship Victory" 
              className="w-full h-72 object-cover"
            />
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-4 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 text-center">
          <h3 className="text-xl font-bold mb-2">2024 RFC India Champion</h3>
          <p className="text-muted-foreground">
            With co-driver Rajeev Lal in CJ500 "Colossus"
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Racing;
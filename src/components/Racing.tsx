import { Trophy, Target, TrendingUp, Award, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import championshipImage from "@/assets/championship.jpg";

const Racing = () => {
  const achievements = [
    {
      year: "2024",
      title: "RFC India Champion",
      description: "Overall winner of the 10th edition of Rainforest Challenge India",
      points: "2,165 / 2,600 points",
      icon: Trophy,
      highlight: true
    },
    {
      year: "2024",
      title: "Day 5 Leader",
      description: "Led the field after 20 of 26 special stages",
      points: "1,688 / 2,000 points",
      icon: Target,
      highlight: false
    },
    {
      year: "2022",
      title: "Top Performer",
      description: "Maintained top 3 position throughout the competition",
      points: "942 / 1200 points (Day 3)",
      icon: Award,
      highlight: false
    }
  ];

  const stats = [
    { label: "Special Stages Completed", value: "26", icon: Target },
    { label: "Championship Points", value: "2,165", icon: TrendingUp },
    { label: "Competition Days", value: "5", icon: Calendar },
    { label: "Co-Driver", value: "Rajeev Lal", icon: Users }
  ];

  return (
    <section id="racing" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(28 100% 55%) 35px, hsl(28 100% 55%) 36px)',
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Racing <span className="bg-racing-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conquering India's toughest off-road motorsport challenges
          </p>
        </div>

        {/* Championship Image */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="overflow-hidden border-primary/30">
            <img 
              src={championshipImage} 
              alt="Championship Victory" 
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                2024 Rainforest Challenge India Champion
              </h3>
              <p className="text-muted-foreground">
                The culmination of years of dedication: Dr. Fahed and Rajeev Lal claimed the overall championship, 
                earning qualification for the RFC Global Series finale in Malaysia.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2 bg-racing-gradient bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-in ${
                achievement.highlight ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
              }`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-full ${achievement.highlight ? 'bg-primary/20 animate-pulse-glow' : 'bg-primary/10'}`}>
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{achievement.year}</span>
                    <span className="hidden md:block text-muted-foreground">•</span>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                    {achievement.points}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vehicle Info */}
        <Card className="mt-16 p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            The Machine: "Colossus"
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Dr. Fahed's championship-winning vehicle is a meticulously modified <strong className="text-foreground">CJ500 Jeep</strong>, 
            nicknamed <strong className="text-primary">"Colossus"</strong>. Upgraded from a heavier Mahindra Thar, 
            the CJ500 offers an optimized weight-power ratio essential for conquering the extreme terrain of RFC India. 
            This strategic vehicle choice, combined with years of technical refinement and intimate knowledge of 
            vehicle dynamics, proved instrumental in securing the 2024 championship victory.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Racing;
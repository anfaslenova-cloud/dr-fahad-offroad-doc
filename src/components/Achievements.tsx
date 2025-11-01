import { Trophy, Award, Medal, Star, Target, Zap } from "lucide-react";

const Achievements = () => {
  const tokens = [
    {
      icon: Trophy,
      title: "RFC Champion",
      description: "2024 India Winner",
      color: "text-yellow-400"
    },
    {
      icon: Medal,
      title: "26 Stages",
      description: "Completed",
      color: "text-blue-400"
    },
    {
      icon: Star,
      title: "2,165 Points",
      description: "Total Score",
      color: "text-purple-400"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Perfect Navigation",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "Pediatrician",
      description: "Medical Expert",
      color: "text-red-400"
    },
    {
      icon: Zap,
      title: "CJ500",
      description: "Colossus Driver",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:100ms]">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Achievement Tokens</h2>
          <p className="text-muted-foreground font-light text-lg">
            Milestones of excellence across medicine and motorsport
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token, index) => {
            const Icon = token.icon;
            return (
              <div
                key={token.title}
                className={`opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:${300 + index * 200}ms] p-8 bg-background/50 rounded-3xl hover:bg-background/70 hover:translate-x-4 hover:scale-105 transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-card/50 group-hover:bg-card transition-colors duration-300`}>
                    <Icon className={`w-8 h-8 ${token.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{token.title}</h3>
                    <p className="text-muted-foreground font-light">{token.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:1700ms] mt-16 p-8 bg-background/50 rounded-3xl text-center">
          <p className="text-2xl font-light text-muted-foreground">
            "Excellence is not a destination, it's a continuous journey"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

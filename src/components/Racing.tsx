import { Trophy, Award, Target } from "lucide-react";
import championshipImage from "@/assets/championship.jpg";

const Racing = () => {
  return (
    <section id="racing" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:100ms]">
          <h2 className="text-5xl md:text-6xl font-bold">Racing Career</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:300ms]">
            <img 
              src={championshipImage} 
              alt="RFC India 2024 Championship" 
              className="w-full h-[500px] object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:500ms] flex items-start gap-4 p-6 bg-card/30 rounded-2xl hover:translate-x-4 hover:bg-card/50 transition-all duration-300">
              <Trophy className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2024 RFC India Champion</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Conquered the Rainforest Challenge India 2024, the world's toughest off-road motorsport event.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:700ms] flex items-start gap-4 p-6 bg-card/30 rounded-2xl hover:translate-x-4 hover:bg-card/50 transition-all duration-300">
              <Award className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2,165 Points</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Accumulated across 26 special stages, showcasing consistent excellence and determination.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:900ms] flex items-start gap-4 p-6 bg-card/30 rounded-2xl hover:translate-x-4 hover:bg-card/50 transition-all duration-300">
              <Target className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">CJ500 "Colossus"</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Partnered with co-driver Rajeev Lal, navigating extreme terrains with precision and courage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:1100ms] text-center space-y-2 p-6 bg-card/30 rounded-2xl hover:translate-y-[-8px] hover:bg-card/50 transition-all duration-300">
            <p className="text-5xl font-bold">26</p>
            <p className="text-muted-foreground font-light">Special Stages</p>
          </div>
          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:1300ms] text-center space-y-2 p-6 bg-card/30 rounded-2xl hover:translate-y-[-8px] hover:bg-card/50 transition-all duration-300">
            <p className="text-5xl font-bold">2,165</p>
            <p className="text-muted-foreground font-light">Total Points</p>
          </div>
          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:1500ms] text-center space-y-2 p-6 bg-card/30 rounded-2xl hover:translate-y-[-8px] hover:bg-card/50 transition-all duration-300">
            <p className="text-5xl font-bold">#1</p>
            <p className="text-muted-foreground font-light">Champion Position</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Racing;
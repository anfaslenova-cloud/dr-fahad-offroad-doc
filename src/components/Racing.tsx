import { Trophy } from "lucide-react";
import championshipImage from "@/assets/championship.jpg";

const Racing = () => {
  return (
    <section id="racing" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold">Racing Achievements</h2>
        
        <div className="aspect-video rounded-2xl overflow-hidden">
          <img 
            src={championshipImage} 
            alt="Championship Victory" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Trophy className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">2024 RFC India Champion</h3>
              <p className="text-muted-foreground font-light">
                Overall championship winner with co-driver Rajeev Lal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">2,165</div>
              <div className="text-sm text-muted-foreground font-light">Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold">26</div>
              <div className="text-sm text-muted-foreground font-light">Stages</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-muted-foreground font-light">Days</div>
            </div>
            <div>
              <div className="text-3xl font-bold">CJ500</div>
              <div className="text-sm text-muted-foreground font-light">Colossus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Racing;
import { Stethoscope, Heart, Users } from "lucide-react";
import practiceImage from "@/assets/medical-practice.jpg";

const Medical = () => {
  return (
    <section id="medical" className="py-32 px-6 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:100ms]">
          <h2 className="text-5xl md:text-6xl font-bold">Medical Practice</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:300ms] flex items-start gap-4 p-6 bg-background/50 rounded-2xl hover:translate-x-4 hover:bg-background/70 transition-all duration-300">
              <Stethoscope className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Pediatric Care</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Specialized in providing comprehensive healthcare for children, from newborns to adolescents.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:500ms] flex items-start gap-4 p-6 bg-background/50 rounded-2xl hover:translate-x-4 hover:bg-background/70 transition-all duration-300">
              <Heart className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Committed to serving the Malappuram community with compassionate and accessible healthcare.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:700ms] flex items-start gap-4 p-6 bg-background/50 rounded-2xl hover:translate-x-4 hover:bg-background/70 transition-all duration-300">
              <Users className="w-6 h-6 text-foreground flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Family Partnerships</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Building lasting relationships with families, ensuring holistic care for every child.
                </p>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:900ms]">
            <img 
              src={practiceImage} 
              alt="Soothee Sparsh Clinic" 
              className="w-full h-[500px] object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medical;
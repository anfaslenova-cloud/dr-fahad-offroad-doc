import { Stethoscope, MapPin, Heart } from "lucide-react";

const Medical = () => {
  return (
    <section id="medical" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold">Medical Practice</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Pediatrician</h3>
              <p className="text-muted-foreground font-light">
                Specialized care for children's health and development
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Soothee Sparsh Clinic</h3>
              <p className="text-muted-foreground font-light">
                Kandamangalam, Malappuram, Kerala
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Community Care</h3>
              <p className="text-muted-foreground font-light">
                Committed to serving the local community with dedication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medical;
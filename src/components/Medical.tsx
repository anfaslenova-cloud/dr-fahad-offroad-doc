import { Stethoscope, Heart, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medicalImage from "@/assets/medical-practice.jpg";

const Medical = () => {
  return (
    <section id="medical" className="py-20 px-4 bg-hero-gradient">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-racing-gradient bg-clip-text text-transparent">Medical Practice</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
          <Card className="overflow-hidden">
            <img 
              src={medicalImage} 
              alt="Medical Practice" 
              className="w-full h-64 object-cover"
            />
          </Card>

          <div className="space-y-4">
            <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Soothee Sparsh Clinic<br />
                Kandamangalam, Malappuram, Kerala
              </p>
            </Card>

            <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Specialty</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Pediatric Care & Child Health
              </p>
            </Card>

            <Button className="w-full bg-racing-gradient hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              Contact Clinic
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medical;
import { Stethoscope, Heart, Clock, MapPin, Phone, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medicalImage from "@/assets/medical-practice.jpg";

const Medical = () => {
  return (
    <section id="medical" className="py-20 px-4 bg-hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Stethoscope className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Medical <span className="bg-racing-gradient bg-clip-text text-transparent">Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to children's health and community wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <Card className="overflow-hidden animate-slide-in">
            <img 
              src={medicalImage} 
              alt="Medical Practice" 
              className="w-full h-full object-cover"
            />
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Soothee Sparsh Clinic</h3>
                  <p className="text-muted-foreground">
                    Kandamangalam, Malappuram District<br />
                    Kerala, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Specialization</h3>
                  <p className="text-muted-foreground">
                    Pediatric Care & Child Health<br />
                    Comprehensive healthcare for children
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Service</h3>
                  <p className="text-muted-foreground">
                    Frontline healthcare provider during COVID-19 pandemic<br />
                    Dedicated to serving the local community
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Trusted Healthcare Provider</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Fahed is recognized within his community as a trusted physician dedicated to 
                children's health and wellbeing. His medical practice reflects the same commitment 
                to excellence that defines his racing career—meticulous attention to detail, 
                unwavering dedication, and a genuine passion for making a positive impact.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-racing-gradient hover:opacity-90 transition-opacity px-8 py-6 flex-shrink-0"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Clinic
            </Button>
          </div>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Patient-Centered Care", desc: "Compassionate approach to child healthcare" },
            { icon: Clock, title: "Accessible Services", desc: "Committed to serving the community" },
            { icon: Stethoscope, title: "Expert Diagnosis", desc: "Years of pediatric experience" }
          ].map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medical;
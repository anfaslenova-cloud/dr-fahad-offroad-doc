import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-racing-gradient bg-clip-text text-transparent">Contact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <h3 className="text-xl font-bold mb-4">Medical Practice</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Soothee Sparsh Clinic</p>
                  <p className="text-sm text-muted-foreground">
                    Kandamangalam, Malappuram, Kerala
                  </p>
                </div>
              </div>

              <Button className="w-full bg-racing-gradient hover:opacity-90">
                Book Appointment
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                <Facebook className="w-5 h-5 mr-3" />
                Facebook
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                <Instagram className="w-5 h-5 mr-3" />
                Instagram
              </Button>
              <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                <Mail className="w-5 h-5 mr-3" />
                Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
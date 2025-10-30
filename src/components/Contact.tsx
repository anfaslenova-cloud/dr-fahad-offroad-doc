import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-racing-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you need medical care or want to discuss motorsports
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              Medical Practice
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Soothee Sparsh Clinic</p>
                  <p className="text-sm text-muted-foreground">
                    Kandamangalam<br />
                    Malappuram District<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Clinic Contact</p>
                  <p className="text-sm text-muted-foreground">Available during clinic hours</p>
                </div>
              </div>

              <Button className="w-full bg-racing-gradient hover:opacity-90 transition-opacity">
                Book Appointment
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              Connect Online
            </h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Follow Dr. Fahed's racing journey and stay updated on his achievements in motorsports.
              </p>

              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                  <Facebook className="w-5 h-5 mr-3" />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                  <Instagram className="w-5 h-5 mr-3" />
                  Instagram
                </Button>
                <Button variant="outline" className="w-full justify-start border-border hover:border-primary/50">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  For professional inquiries and collaborations
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-12 p-8 bg-card/50 backdrop-blur-sm border-primary/30 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-4">About This Website</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This website celebrates the remarkable dual career of Dr. Mohammed Fahed VP—
            a dedicated pediatrician serving his community and a champion off-road racer 
            who has conquered India's toughest motorsport challenges. His journey exemplifies 
            what it means to pursue excellence across multiple disciplines with passion and dedication.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
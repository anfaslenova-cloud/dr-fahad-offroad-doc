import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold">Get in Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-muted-foreground font-light">
              Soothee Sparsh Clinic, Kandamangalam, Malappuram, Kerala
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-muted-foreground font-light">
              Contact clinic for appointments
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-muted-foreground font-light">
              Professional inquiries welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
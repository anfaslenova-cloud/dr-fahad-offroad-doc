import { Heart, Trophy, Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-5 h-5 text-primary" />
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Dr. Mohammed Fahed VP</h3>
            <p className="text-sm text-muted-foreground">
              Pediatrician & Off-Road Racing Champion
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Medical Practice</h4>
            <p className="text-sm text-muted-foreground">
              Soothee Sparsh Clinic<br />
              Kandamangalam, Malappuram<br />
              Kerala, India
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Racing Achievements</h4>
            <p className="text-sm text-muted-foreground">
              2024 RFC India Champion<br />
              Co-Driver: Rajeev Lal<br />
              Vehicle: CJ500 "Colossus"
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Dr. Mohammed Fahed VP. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> to celebrate excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
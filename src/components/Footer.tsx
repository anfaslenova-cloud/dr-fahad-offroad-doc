import { Heart, Trophy, Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground font-light">
          © 2024 Dr. Mohammed Fahed VP. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-light">
          Pediatrician • Racing Champion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
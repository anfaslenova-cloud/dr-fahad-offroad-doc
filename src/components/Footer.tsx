import { Heart, Trophy, Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-primary" />
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-bold">Dr. Mohammed Fahed VP</span>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> to celebrate excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
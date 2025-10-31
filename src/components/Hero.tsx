import portraitImage from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Portrait */}
      <div className="absolute inset-0 right-0 lg:left-1/2">
        <img 
          src={portraitImage} 
          alt="Dr. Mohammed Fahed VP" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 lg:via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            <span className="block text-muted-foreground/40 font-light">DR.</span>
            <span className="block">MOHAMMED</span>
          </h1>
          <div className="text-right -mt-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground/40">
              FAHED VP
            </span>
          </div>
          
          <div className="space-y-4 text-right pt-8">
            <p className="text-xl md:text-2xl font-light text-foreground">
              Pediatrician & Racing Champion
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-light">
              2024 RFC India Champion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

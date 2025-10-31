import portraitImage from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Portrait */}
      <div className="absolute inset-0 right-0 lg:left-1/2 animate-[scale-in_1s_ease-out]">
        <img 
          src={portraitImage} 
          alt="Dr. Mohammed Fahed VP" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 lg:via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none animate-fade-in">
            <span className="block text-muted-foreground/40 font-light opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">DR.</span>
            <span className="block opacity-0 animate-[fade-in_0.6s_ease-out_0.4s_forwards]">MOHAMMED</span>
          </h1>
          <div className="text-right -mt-4 opacity-0 animate-[fade-in_0.6s_ease-out_0.6s_forwards]">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground/40">
              FAHED VP
            </span>
          </div>
          
          <div className="space-y-4 text-right pt-8 opacity-0 animate-[fade-in_0.6s_ease-out_0.8s_forwards]">
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

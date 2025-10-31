import portraitImage from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Large Typography */}
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            <span className="block text-muted-foreground/40 font-light">DR.</span>
            <span className="block">MOHAMMED</span>
          </h1>
          <div className="text-right -mt-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground/40">
              FAHED VP
            </span>
          </div>
        </div>

        {/* Right: Portrait + Description */}
        <div className="space-y-8">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src={portraitImage} 
              alt="Dr. Mohammed Fahed VP" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4 text-right">
            <p className="text-xl md:text-2xl font-light text-foreground">
              Pediatrician & Racing Champion
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-light max-w-md ml-auto">
              2024 RFC India Champion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

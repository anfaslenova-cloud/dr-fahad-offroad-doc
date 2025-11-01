const About = () => {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:100ms]">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Dual Excellence</h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl">
            Where medical dedication meets motorsport passion
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:300ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">Medical Practice</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Pediatrician at Soothee Sparsh Clinic, Kandamangalam, Kerala. 
              Dedicated to children's health and community care with years of expertise in pediatric medicine.
            </p>
          </div>

          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:500ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">Racing Champion</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              2024 RFC India Champion with co-driver Rajeev Lal. 
              2,165 points across 26 special stages in CJ500 "Colossus".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
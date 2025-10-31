const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold opacity-0 animate-[fade-in_0.8s_ease-out_forwards] [animation-delay:100ms]">Dual Excellence</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_forwards] [animation-delay:300ms] hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold">Medical Practice</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Pediatrician at Soothee Sparsh Clinic, Kandamangalam, Kerala. 
              Dedicated to children's health and community care.
            </p>
          </div>

          <div className="space-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_forwards] [animation-delay:500ms] hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold">Racing Champion</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
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
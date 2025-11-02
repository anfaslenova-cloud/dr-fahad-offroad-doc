const About = () => {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:100ms]">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Dual Excellence</h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl">
            Where medical dedication meets motorsport passion, Dr. Mohammed Fahed VP embodies the pursuit of excellence in two dramatically different worlds. By day, he nurtures the health and wellbeing of children across Malappuram. By weekend, he conquers some of the most challenging terrains on Earth behind the wheel.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:300ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">The Journey</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              From the halls of medical school to the mud-splattered tracks of the Rainforest Challenge, Dr. Fahed's journey has been one of relentless determination. What started as a passion for adventure evolved into championship-level motorsport achievement, all while maintaining an unwavering commitment to pediatric care. His story proves that dedication knows no boundaries.
            </p>
          </div>

          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:500ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">Medical Practice</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              As a pediatrician at Soothee Sparsh Clinic in Kandamangalam, Kerala, Dr. Fahed brings compassion and expertise to every consultation. His approach combines evidence-based medicine with genuine care, building lasting relationships with families across the Malappuram community. Years of dedicated practice have established him as a trusted healthcare provider who truly understands the unique needs of children.
            </p>
          </div>

          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:700ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">Racing Champion</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              The 2024 RFC India Championship victory stands as testament to years of preparation, skill, and mental fortitude. Alongside co-driver Rajeev Lal, Dr. Fahed navigated the CJ500 "Colossus" through 26 grueling special stages, accumulating 2,165 points and ultimately claiming the top spot. Each stage demanded precision, courage, and split-second decision-making—qualities that translate seamlessly from the operating theater to the off-road arena.
            </p>
          </div>

          <div className="opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards] [animation-delay:900ms] p-8 bg-card/30 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:translate-x-4">
            <h3 className="text-3xl font-semibold mb-4">Philosophy</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              "Excellence is not a destination, it's a continuous journey." This philosophy drives every aspect of Dr. Fahed's life. Whether diagnosing a pediatric condition or navigating treacherous terrain, the commitment remains the same: preparation, precision, and perseverance. Both medicine and motorsport demand respect, discipline, and an unwavering focus on continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
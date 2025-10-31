const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('about')}
            className="px-5 py-2 rounded-full border border-border/50 hover:border-foreground/30 transition-colors text-sm font-light"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('medical')}
            className="px-5 py-2 rounded-full border border-border/50 hover:border-foreground/30 transition-colors text-sm font-light"
          >
            Medical
          </button>
          <button
            onClick={() => scrollToSection('racing')}
            className="px-5 py-2 rounded-full border border-border/50 hover:border-foreground/30 transition-colors text-sm font-light"
          >
            Racing
          </button>
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="px-5 py-2 rounded-full border border-border/50 hover:border-foreground/30 transition-colors text-sm font-light"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

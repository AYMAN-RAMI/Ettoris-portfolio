const WorkHero = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-12 md:mb-16 animate-fade-in">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4">
        {title}
      </h1>
      <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default WorkHero;

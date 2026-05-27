const WorkTextBlock = ({ children, className = "" }) => {
  return (
    <div className={`text-white/60 text-base md:text-lg leading-relaxed space-y-4 animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default WorkTextBlock;

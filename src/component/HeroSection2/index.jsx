const HeroSection2 = () => {
  return (
    <section
      className="relative -mt-[56px] min-h-screen overflow-hidden bg-[#020205] text-white"
      aria-label="premium cinematic hero section"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="images/Hero Section Animation2.webm"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1480px] grid-cols-1 px-6 pb-24 pt-[22vh] translate-y-[43px] md:px-10 md:pt-[24vh] lg:grid-cols-[52%_48%] lg:px-[70px] lg:pt-[25vh]">
        <div className="relative z-20 flex max-w-[680px] flex-col items-start">

          <h1 className="hero2-premium-title text-[3.35rem] font-black leading-[0.9] tracking-[-0.055em] text-white drop-shadow-[0_22px_46px_rgba(0,0,0,0.62)] sm:text-[4.4rem] md:text-[5.45rem] xl:text-[6.35rem]">
            <span className="block">Illustrator &amp;</span>
            <span className="block whitespace-nowrap text-white">
              <span className="font-light italic tracking-[-0.075em] text-white">Motion</span>{" "}
              Designer
            </span>
          </h1>

          <p className="hero2-premium-in mt-6 max-w-[520px] text-lg font-normal leading-[1.35] text-white/86 [animation-delay:140ms] md:text-xl">
            &ldquo;I help brands and Web3 projects stand out with custom art and dynamic animations.&rdquo;
          </p>

          <a
            href="mailto:Othmaneettori@gmail.com"
            className="hero2-premium-in group mt-8 inline-flex min-w-[216px] items-center justify-center gap-5 overflow-visible whitespace-nowrap rounded-2xl border border-orange/80 px-6 py-3 text-base font-medium leading-none text-orange transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange/10 hover:shadow-[0_0_30px_rgba(255,90,0,0.22)] [animation-delay:260ms]"
          >
            <span>Start a Project</span>
            <span className="inline-flex shrink-0 items-center text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;

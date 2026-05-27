const HeroSection = () => {
    return ( 
        <section className="sticky top-[56px] h-[calc(100vh-80px)] overflow-hidden md:h-screen" aria-label="hero section">
            <video
                className="w-full h-full object-cover animate-hero-drift will-change-transform"
                src="images/Hero section.webm"
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div
                aria-hidden="true"
                className="premium-grain pointer-events-none absolute -inset-6 opacity-[0.055] mix-blend-screen"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h3 className="animate-cinematic-in text-4xl font-black leading-[0.95] text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
                Illustrator & <br className="block md:hidden" /> <span className="italic font-light">Motion</span> Designer
                </h3>
                <p className="animate-cinematic-in mx-auto max-w-2xl p-1 pt-6 text-lg font-light leading-relaxed text-white/82 [animation-delay:120ms] md:text-2xl">"I help brands and <br className="block md:hidden" />Web3 work stand<br className="block md:hidden" /> out  with
                    <br className=" hidden md:block"></br>custom art and <br className="block md:hidden" />dynamic animations."</p>
                <div className="animate-cinematic-in mt-8 flex items-center justify-center [animation-delay:220ms]">
                    <a
                        href="mailto:Othmaneettori@gmail.com"
                        className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(228,58,25,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-bleu hover:shadow-[0_0_44px_rgba(255,255,255,0.22)] active:translate-y-0"
                    >
                        Start a Project
                    </a>
                </div>
            </div>

        </section>

     );
}
 
export default HeroSection;

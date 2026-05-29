import { mediaUrl } from "../../config/media";

const About = () => {
    return ( 
    <section id="about" className="relative w-full bg-bleu py-5 md:py-14 ">
        <div className="px-4 md:px-10 pt-0 pb-4 md:pb-6 max-w-7xl mx-auto">
            <p className="text-orange text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Who am I?
            </p>
            <h2 className="text-[2.55rem] md:text-6xl lg:text-[4.4rem] font-black text-white leading-none tracking-tight">
                About
            </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:max-w-7xl p-4 mx-auto ">

            <div className="relative lg:w-2/5">
                <img src={mediaUrl("images/ABOUT-image.webp")} alt="myimage" className=" w-full h-auto object-cover" />
                <video className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" src={mediaUrl("images/Animation Logo.webm")} autoPlay loop muted></video>
            </div>
            <div className="lg:w-1/2 lg:p-2 text-lg lg:text-xl leading-relaxed">
                <span className="font-bold">Hello!</span><br/>
                <span className="font-semibold">I'm <span className="text-orange">Othmane ETTORI</span>.</span>

                <div>&nbsp;</div>
                <p className=" ">
                    I’m a freelance illustrator and motion designer based in Morocco, working with clients worldwide.

                </p>
                <div>&nbsp;</div>
                <p className="">A digital artist who believes in the creative process and the power of storytelling. I specialize in illustrations and motion design that help bring ideas, brands, and communities to life.</p>
                <div>&nbsp;</div>
                <p className="">Whether you're building something new or leveling up your visuals, I’m here to help you bring your vision to lifes</p>
                <div>&nbsp;</div>
                <hr className=""></hr>
                <div>&nbsp;</div>
                <div className="flex flex-col  pb-8 ">
                    <p className=" text-center leading-normal pb-2">
                    Get in touch via email on <a href="mailto:Othmaneettori@gmail.com" className="underline text-orange hover:text-bleu">Othmaneettori@gmail.com</a>
                    <a href="mailto:Othmaneettori@gmail.com" className="ml-2 inline-flex h-5 w-5 items-center justify-center align-middle text-orange hover:text-white" aria-label="Email Othmane Ettori">
                        <svg className="h-full w-full scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>    
                    <br/>or find me on social media as <a href="https://www.instagram.com/othmaneettori/" className="underline text-orange hover:text-bleu" target="_blank" rel='noreferrer'>@Othmaneettori</a>
                    <a href="https://www.instagram.com/othmaneettori/" className="ml-2 inline-flex h-5 w-5 items-center justify-center align-middle" target="_blank" rel='noreferrer' aria-label="Instagram Othmane Ettori">
                        <img src={mediaUrl("images/icons/Insta.png")} alt="" className="h-full w-full object-contain" />
                    </a>
                    </p>
                </div>
            </div>
        </div>
    </section> );
}
 
export default About;

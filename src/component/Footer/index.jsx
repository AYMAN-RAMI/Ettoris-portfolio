

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
    return ( <footer id="contact" className="relative  bg-bleu pt-5 md:pt-10 flex flex-col items-center leading-8   p-2 ">


      
      
      <span className="text-center">© {currentYear} Othmane ETTORI. All rights reserved.</span>
      <span className="text-center">Created by <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/mouad-ghouichat-9b480a197/" className="underline text-orange hover:text-white" >Ghouichat Mouad</a></span>


    </footer> );
}
 
export default Footer;
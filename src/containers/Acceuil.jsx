import { Suspense, lazy } from "react";
import GraphicDesignPage from "../component/Graphic_design";
import HeroSection from "../component/HeroSection";
import HeroSection2 from "../component/HeroSection2";
import MotionDesignPage from "../component/Motion_design";
import FeaturedWork from "../component/work/FeaturedWork";
import graphicDesignItems from "../data/graphicDesign";
import motionDesignItems from "../data/motionDesign";

const Footer = lazy(() => import("../component/Footer"));
const About = lazy(() => import("../component/About"));
const USE_HERO_SECTION_2 = true;

const Accueil = () => {
  return (
    <>
      {USE_HERO_SECTION_2 ? <HeroSection2 /> : <HeroSection />}

      <div className="relative min-h-screen bg-bleu">
        <Suspense fallback={null}>
          <FeaturedWork />
          <div aria-hidden="true" className="h-4 bg-bleu md:h-6" />
          <GraphicDesignPage imagesArr={graphicDesignItems} />
          <MotionDesignPage imagesArr={motionDesignItems} />
          <div aria-hidden="true" className="h-4 bg-bleu md:h-6" />
          <About />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Accueil;

import { Suspense, lazy } from "react";
import GraphicDesignPage from "../component/Graphic_design";
import HeroSection from "../component/HeroSection";
import HeroSection2 from "../component/HeroSection2";
import LazyWhenVisible from "../component/LazyWhenVisible";
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
          <LazyWhenVisible minHeight="min-h-[520px]">
            <FeaturedWork />
          </LazyWhenVisible>
          <div aria-hidden="true" className="h-4 bg-bleu md:h-6" />
          <LazyWhenVisible minHeight="min-h-[640px]">
            <GraphicDesignPage imagesArr={graphicDesignItems} />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight="min-h-[640px]">
            <MotionDesignPage imagesArr={motionDesignItems} />
          </LazyWhenVisible>
          <div aria-hidden="true" className="h-4 bg-bleu md:h-6" />
          <LazyWhenVisible minHeight="min-h-[420px]">
            <About />
          </LazyWhenVisible>
          <LazyWhenVisible minHeight="min-h-[220px]">
            <Footer />
          </LazyWhenVisible>
        </Suspense>
      </div>
    </>
  );
};

export default Accueil;

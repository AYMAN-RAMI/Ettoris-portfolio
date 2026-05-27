import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const sectionId = location.hash.slice(1);
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const navOffset = 70;
      const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timeout = window.setTimeout(scrollToSection, 80);
    return () => window.clearTimeout(timeout);
  }, [location.hash, location.search, location.pathname]);

  return null;
};

export default ScrollToHash;

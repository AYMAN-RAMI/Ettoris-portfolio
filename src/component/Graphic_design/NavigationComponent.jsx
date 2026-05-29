import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "../ImageGallery";
import { mediaUrl } from "../../config/media";
import { graphicCategories } from "../../data/categories";

const NavigationComponent = ({
  imagesArr = [],
  onSelect,
  categories = graphicCategories,
  categoryParam,
}) => {
  const location = useLocation();
  const switchTimeoutRef = useRef(null);
  const loadingTimeoutRef = useRef(null);

  const getInitialCategory = useCallback(() => {
    if (!categoryParam) return categories[0] || "";

    const selectedCategory = new URLSearchParams(location.search).get(categoryParam);
    return selectedCategory && categories.includes(selectedCategory)
      ? selectedCategory
      : categories[0] || "";
  }, [categories, categoryParam, location.search]);

  const [activeCategory, setActive] = useState(getInitialCategory);
  const activeCategoryRef = useRef(activeCategory);
  const [fading, setFading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  const changeCategory = useCallback((category) => {
    if (category === activeCategoryRef.current) return;

    window.clearTimeout(switchTimeoutRef.current);
    window.clearTimeout(loadingTimeoutRef.current);
    setLoading(true);
    setFading(true);

    switchTimeoutRef.current = window.setTimeout(() => {
      activeCategoryRef.current = category;
      setActive(category);
      onSelect && onSelect(category);
      setFading(false);

      loadingTimeoutRef.current = window.setTimeout(() => {
        setLoading(false);
      }, 160);
    }, 160);
  }, [onSelect]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      changeCategory(getInitialCategory());
    }, 0);

    return () => {
      window.clearTimeout(timeout);
      window.clearTimeout(switchTimeoutRef.current);
      window.clearTimeout(loadingTimeoutRef.current);
    };
  }, [changeCategory, getInitialCategory]);

  const filteredImages = imagesArr.filter(
    (img) => img.category === activeCategory
  );

  return (
    <div className="px-4 pb-3 pt-0 md:px-10 md:pb-6 md:pt-0 max-w-7xl mx-auto" aria-label="navigation component">
      <div className="flex flex-wrap gap-2 mb-4 px-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => changeCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize text-white transition-all duration-300 ease-out active:scale-95
              ${activeCategory === category
                ? "bg-orange shadow-[0_0_24px_rgba(228,58,25,0.24)]"
                : "border border-white/15 bg-white/[0.025] text-white/72 backdrop-blur-xl hover:-translate-y-0.5 hover:border-orange/45 hover:bg-orange/20 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          className="transition-all duration-300 ease-out"
          style={{
            opacity: fading ? 0.35 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
          }}
        >
          <ImageGallery images={filteredImages} />
        </div>

        <div
          className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-bleu/35 backdrop-blur-[2px] transition-opacity duration-150 ${
            loading ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!loading}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-orange border-r-orange animate-spin [animation-duration:0.55s]" />
              <div className="absolute inset-4 rounded-full bg-orange/15 blur-sm" />
              <img
                src={mediaUrl("/images/OE.png")}
                alt=""
                className="absolute inset-0 m-auto h-5 w-5 object-contain"
              />
            </div>

            <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-orange loading-bar [animation-duration:0.55s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;

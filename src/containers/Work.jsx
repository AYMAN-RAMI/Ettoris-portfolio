import { useEffect, useRef } from "react";
import work from "../data/work";
import WorkCard from "../component/work/WorkCard";

const Work = () => {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    heading.style.opacity = "0";
    heading.style.transform = "translateY(30px)";
    grid.style.opacity = "0";

    requestAnimationFrame(() => {
      heading.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";

      setTimeout(() => {
        grid.style.transition = "opacity 0.6s ease";
        grid.style.opacity = "1";
      }, 200);
    });
  }, []);

  return (
    <section id="work" className="relative bg-bleu min-h-screen w-full">
      <div className="px-4 md:px-10 pt-6 pb-8 md:pt-8 md:pb-10 max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-5 md:mb-7">
          <p className="text-orange text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Selected Work
          </p>
          <h2 className="text-[2.55rem] md:text-6xl lg:text-[4.4rem] font-black text-white leading-none tracking-tight">
            Web3/Crypto Work
          </h2>
          <p className="mt-3 text-white/40 text-base md:text-lg max-w-xl leading-relaxed">
            A selection of Web3 and crypto client work, where I worked as a graphic and motion designer.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-4"
        >
          {work.map((workItem, i) => (
            <WorkCard key={workItem.slug} workItem={workItem} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;

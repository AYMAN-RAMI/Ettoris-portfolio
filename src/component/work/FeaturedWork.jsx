import { Link } from "react-router-dom";
import work from "../../data/work";
import WorkCard from "./WorkCard";

const FeaturedWork = () => {
  const featuredWork = work
    .filter((workItem) => !workItem.comingSoon)
    .slice(0, 4);

  return (
    <section id="featured_work" className="relative z-10 w-full overflow-hidden bg-bleu/95 shadow-[0_-34px_90px_rgba(0,0,0,0.62)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-noir to-bleu md:h-80"
      />
      <div className="relative px-4 md:px-10 pt-8 pb-8 md:pt-12 md:pb-9 max-w-7xl mx-auto">
        <div className="mb-4">
          <div>
            <p className="text-orange text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Case Studies
            </p>
            <h2 className="text-[2.55rem] md:text-6xl lg:text-[4.4rem] font-black text-white leading-none tracking-tight">
              Featured Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {featuredWork.map((workItem, index) => (
            <WorkCard key={workItem.slug} workItem={workItem} index={index} />
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex justify-center">
          <Link
            to="/work"
            className="inline-flex w-fit items-center gap-3 border border-orange/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange transition-colors duration-200 hover:bg-orange hover:text-noir"
          >
            View All
            <span aria-hidden="true" className="text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

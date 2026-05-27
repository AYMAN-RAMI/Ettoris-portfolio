import { useNavigate } from "react-router-dom";

const WorkCard = ({ workItem, index }) => {
  const navigate = useNavigate();

  if (workItem.comingSoon) {
    return (
      <div
        className="group relative flex aspect-[16/9] cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3 p-8 text-center">
          <span className="text-4xl opacity-20">+</span>
          <p className="text-white/20 text-sm uppercase tracking-widest font-medium">
            Coming Soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <article
      onClick={() => navigate(`/work/${workItem.slug}`)}
      className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-xl bg-work-card shadow-[0_18px_50px_rgba(0,0,0,0.24)] ring-1 ring-white/5 animate-fade-in transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.38)] hover:ring-orange/30"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Cover image */}
      {workItem.cover && (
        <img
          src={workItem.cover}
          alt={workItem.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      )}

      {/* Gradient overlay — always present, intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/28 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

      {/* Orange accent line at bottom — slides in on hover */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange transition-all duration-500 ease-out group-hover:w-full" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5 translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {workItem.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/50 text-white font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black leading-tight tracking-tight text-white md:text-[1.7rem]">
          {workItem.title}
        </h3>

        {/* Tagline — slides up on hover */}
        <p className="mt-1 text-sm text-white/50 leading-relaxed line-clamp-2 translate-y-2 opacity-0 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
          {workItem.tagline}
        </p>

        {/* View arrow */}
        <div className="mt-3 flex items-center gap-2 text-orange text-sm font-semibold translate-y-3 opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          <span>View Work</span>
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;

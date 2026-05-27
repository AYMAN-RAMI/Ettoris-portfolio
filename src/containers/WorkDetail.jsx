import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import work from "../data/work";

/* ─── Section renderers ─────────────────────────────────────── */

const TextSection = ({ section }) => (
  <div className="max-w-2xl animate-fade-in">
    {section.label && (
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
        {section.label}
      </p>
    )}
    <p className="text-base leading-relaxed text-white/60 md:text-[1.05rem]">
      {section.body}
    </p>
  </div>
);

const aspectMap = {
  wide: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

const isVideoFile = (src) => /\.(mp4|webm|mov)$/i.test(src);

const ImageSection = ({ section, onOpen }) => (
  <div
    className={`w-full overflow-hidden rounded-xl animate-fade-in cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.2)] ring-1 ring-white/5 ${aspectMap[section.aspect] ?? "aspect-[16/9]"}`}
    onClick={() => onOpen(section.src)}
  >
    <img
      src={section.src}
      alt={section.alt ?? ""}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
    />
  </div>
);

const VideoSection = ({ section, onOpen }) => (
  <div
    className="w-full overflow-hidden rounded-xl aspect-video bg-black animate-fade-in cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.24)] ring-1 ring-white/5"
    onClick={() => onOpen(section.src)}
  >
    <video
      src={section.src}
      className="h-full w-full object-contain"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
);

const VideoGridSection = ({ section, onOpen }) => {
  const cols = section.columns ?? 2;
  return (
    <div
      className="grid gap-2.5 md:gap-3 animate-fade-in"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {section.videos.map((vid, i) => {
        const shouldContain = vid.fit === "contain";

        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl aspect-video bg-black group relative cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:ring-orange/30"
            onClick={() => onOpen(vid.src)}
          >
            <video
              src={vid.src}
              className={`h-full w-full object-contain transition-transform duration-500 ${
                shouldContain ? "" : "group-hover:scale-[1.01]"
              }`}
              autoPlay
              loop
              muted
              playsInline
            />
            {vid.label && (
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{vid.label}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const GridSection = ({ section, onOpen }) => {
  const cols = section.columns ?? 3;
  const itemAspect = aspectMap[section.aspect] ?? "aspect-square";
  return (
    <div
      className="grid gap-2.5 md:gap-3 animate-fade-in"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {section.images.map((img, i) => (
        <div
          key={i}
        className={`${itemAspect} overflow-hidden rounded-xl cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.2)] ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:ring-orange/30`}
          onClick={() => onOpen(img.src)}
        >
          <img
            src={img.src}
            alt={img.alt ?? ""}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
          />
        </div>
      ))}
    </div>
  );
};

const RowSection = ({ section, onOpen }) => (
  <div
    className="grid gap-2.5 md:gap-3 animate-fade-in"
    style={{ gridTemplateColumns: `repeat(${section.images.length}, 1fr)` }}
  >
    {section.images.map((img, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-xl aspect-square cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.2)] ring-1 ring-white/5"
        onClick={() => onOpen(img.src)}
      >
        <img
          src={img.src}
          alt={img.alt ?? ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    ))}
  </div>
);

const StatSection = ({ section }) => (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden animate-fade-in">
    {section.stats.map((stat, i) => (
      <div key={i} className="bg-bleu px-6 py-7 md:px-8 md:py-8 flex flex-col gap-1.5">
        <span className="text-3xl md:text-4xl font-black text-orange">{stat.value}</span>
        <span className="text-white/40 text-sm leading-snug">{stat.label}</span>
      </div>
    ))}
  </div>
);

const renderSection = (section, i, onOpen) => {
  const key = `section-${i}`;
  switch (section.type) {
    case "text":   return <TextSection  key={key} section={section} />;
    case "image":  return <ImageSection key={key} section={section} onOpen={onOpen} />;
    case "video":  return <VideoSection key={key} section={section} onOpen={onOpen} />;
    case "video_grid":  return <VideoGridSection key={key} section={section} onOpen={onOpen} />;
    case "grid":   return <GridSection  key={key} section={section} onOpen={onOpen} />;
    case "row":    return <RowSection   key={key} section={section} onOpen={onOpen} />;
    case "stat":   return <StatSection  key={key} section={section} />;
    default:       return null;
  }
};

/* ─── Main component ────────────────────────────────────────── */

const WorkDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState("");

  const workItem = work.find((item) => item.slug === slug);
  const closeLightbox = () => setLightboxSrc("");
  const heroImage = workItem?.hero || workItem?.cover;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!workItem) {
    return (
      <div className="min-h-screen bg-bleu flex flex-col items-center justify-center gap-6 text-white">
        <p className="text-white/40 text-lg">Work not found.</p>
        <button
          onClick={() => navigate("/work")}
          className="text-orange border border-orange/50 px-6 py-3 rounded-full text-sm hover:bg-orange hover:text-white transition-colors"
        >
          ← Back to Work
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bleu min-h-screen text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative aspect-[1920/660] min-h-[320px] w-full overflow-hidden md:min-h-0">
        {heroImage && (
          <div
            className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden bg-black"
            onClick={() => setLightboxSrc(heroImage)}
          >
            <img
              src={heroImage}
              alt={workItem.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bleu via-bleu/60 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate("/work")}
          className="absolute top-6 left-5 md:left-8 z-10 flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All Work
        </button>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-7 md:px-10 md:pb-10 max-w-7xl mx-auto animate-fade-in">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {workItem.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[2.85rem] md:text-6xl lg:text-[4.8rem] font-black tracking-tight leading-none">
            {workItem.title}
          </h1>
          <p className="mt-2 text-orange text-base md:text-lg max-w-xl leading-relaxed">
            {workItem.tagline}
          </p>
        </div>
      </div>

      {/* ── Meta bar ─────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-white/[0.04] px-5 md:px-10">
        <div className="max-w-7xl mx-auto py-4 md:py-5 flex flex-wrap gap-5 md:gap-10">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Role</p>
            <p className="text-white text-sm font-medium">{workItem.role}</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Year</p>
            <p className="text-white text-sm font-medium">{workItem.year}</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">About</p>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">{workItem.description}</p>
          </div>
        </div>
      </div>

      {/* ── Sections ─────────────────────────────────────────── */}
      <div className="px-5 md:px-10 py-9 md:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-11">
          {workItem.sections.map((section, i) => renderSection(section, i, setLightboxSrc))}
        </div>
      </div>

      {/* ── Footer CTA ───────────────────────────────────────── */}
      <div className="border-t border-white/5 px-5 md:px-10 py-10 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Next Step</p>
            <p className="text-white text-xl md:text-2xl font-bold">
              Interested in working together?
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:Othmaneettori@gmail.com"
              className="px-6 py-3 bg-orange text-white text-sm font-semibold rounded-full hover:bg-orange/80 transition-colors"
            >
              Get in Touch
            </a>
            <button
              onClick={() => navigate("/work")}
              className="px-6 py-3 border border-white/20 text-white/60 text-sm rounded-full hover:border-white/50 hover:text-white transition-colors"
            >
              ← All Work
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-[56px] bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-bleu/20 backdrop-blur-md transition-all duration-300 ${
          lightboxSrc ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={closeLightbox}
      >
        {isVideoFile(lightboxSrc) ? (
          <video
            src={lightboxSrc}
            className="h-auto max-h-full w-auto max-w-full object-contain p-6 md:p-10"
            autoPlay
            controls
            loop
            onClick={(event) => event.stopPropagation()}
          />
        ) : (
          <img
            src={lightboxSrc}
            alt=""
            className="h-auto max-h-full w-auto max-w-full object-contain p-6 md:p-10"
            onClick={(event) => event.stopPropagation()}
          />
        )}
        <button
          onClick={closeLightbox}
          className="absolute right-3 top-2 rounded-full p-1 transition-colors hover:bg-gray-800"
          aria-label="Close"
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
      </div>

    </div>
  );
};

export default WorkDetail;

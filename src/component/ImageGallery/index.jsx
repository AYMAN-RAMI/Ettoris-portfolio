import { useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageGallery = ({ images }) => {
  const [model, setModel]   = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);
  const isGif = (src) => /\.gif$/i.test(src);

  const openImg = (item) => {
    setImgSrc(item.src);
    setModel(true);
  };
  const closeImg = ()  => { setModel(false); setImgSrc('');   };
  const playWhenReady = (event) => {
    event.currentTarget.play().catch(() => {});
  };
  const isShortsGallery = images[0]?.category === "Shorts Videos";
  const isExplainerGallery = images[0]?.category === "Explainer Videos";
  const isTelegramStickersGallery = images[0]?.category === "Animated Telegram Stickers";
  const isGraphicStickersGallery = images[0]?.category === "Stickers";
  const mediaClass =
    "block h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]";
  const getMediaClass = (index) =>
    isTelegramStickersGallery
      ? "block h-full w-full bg-bleu/40 object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
      : isExplainerGallery && index === 0
      ? "block h-full w-full bg-bleu/40 object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
      : mediaClass;
  const gridClass = isShortsGallery
    ? "grid w-full grid-cols-2 gap-2 overflow-hidden bg-bleu p-0.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-4"
    : isExplainerGallery
      ? "grid w-full grid-cols-1 items-start gap-2 overflow-hidden bg-bleu p-0.5 md:grid-cols-[0.32fr_1fr] md:gap-3"
    : isTelegramStickersGallery || isGraphicStickersGallery
      ? "grid w-full grid-cols-2 gap-2 overflow-hidden bg-bleu p-0.5 md:grid-cols-3 md:gap-3"
    : "grid w-full grid-cols-2 gap-2 overflow-hidden bg-bleu p-0.5 auto-rows-[13.5rem] grid-flow-dense sm:grid-cols-3 md:auto-rows-[15rem] md:gap-3 lg:grid-cols-6";

  return (
    <>
      {/* Lightbox */}
      {createPortal((
      <div
        className={`fixed top-[56px] bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden bg-bleu/45 backdrop-blur-md z-[60] transition-all duration-300 ${
          model ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeImg}
      >
        {imgSrc && (
          isVideo(imgSrc) ? (
            <video
              src={imgSrc}
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : (
            <img
              src={imgSrc}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
              aria-hidden="true"
            />
          )
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-bleu via-bleu/70 to-noir/35" />

        {imgSrc && (
          isVideo(imgSrc) ? (
            <video
              src={imgSrc}
              className="relative z-10 h-auto max-h-full w-auto max-w-full object-contain p-6 md:p-10"
              autoPlay
              controls
              loop
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={imgSrc}
              alt="enlarged"
              className="relative z-10 h-auto max-h-full w-auto max-w-full object-contain p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            />
          )
        )}

        <button
          onClick={closeImg}
          className="absolute right-3 top-2 z-20 p-1 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Close"
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
      </div>
      ), document.body)}

      {/* Grid — no loading text, images lazy-load naturally with blur effect */}
      <div className={gridClass}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`${isShortsGallery ? "relative aspect-[9/16]" : isExplainerGallery ? `relative ${index === 0 ? "aspect-[9/16] w-full" : "aspect-video self-center"}` : isTelegramStickersGallery || isGraphicStickersGallery ? "relative aspect-video" : item.divClass} group overflow-hidden rounded-lg bg-bleu/40 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] hover:ring-orange/35`}
            onClick={() => openImg(item)}
          >
            {isVideo(item.src) ? (
              <video
                src={item.src}
                className={getMediaClass(index)}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={playWhenReady}
              />
            ) : isGif(item.src) ? (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className={getMediaClass(index)}
              />
            ) : (
              <LazyLoadImage
                src={item.src}
                alt={item.title}
                effect="blur"
                className={getMediaClass(index)}
                wrapperClassName="block h-full w-full"
              />
            )}
            <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-noir/88 via-noir/22 to-transparent px-5 pt-6 opacity-0 transition-all duration-300 group-hover:cursor-pointer group-hover:opacity-100">
              <h2 className="mb-1 translate-y-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange transition-transform duration-300 group-hover:translate-y-0">
                {item.style}
              </h2>
              <h1 className="translate-y-2 text-base font-semibold text-white transition-transform duration-300 group-hover:translate-y-0 md:text-lg">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;

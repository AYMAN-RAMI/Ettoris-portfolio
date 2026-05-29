import { mediaUrl } from "../../config/media";

const LoadingScreen = ({ isVisible }) => (
  <div
    className={`fixed inset-0 z-[100] flex items-center justify-center bg-bleu/18 backdrop-blur-md transition-all duration-300 ${
      isVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
    }`}
    aria-hidden={!isVisible}
  >
    <div className="flex flex-col items-center gap-5 rounded-full">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-orange border-r-orange animate-spin [animation-duration:0.75s]" />
        <div className="absolute inset-5 rounded-full bg-orange/20 blur-md" />
        <img
          src={mediaUrl("/images/OE.png")}
          alt=""
          className="absolute inset-0 m-auto h-9 w-9 object-contain"
        />
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 rounded-full bg-orange loading-bar [animation-duration:0.75s]" />
      </div>
    </div>
  </div>
);

export default LoadingScreen;

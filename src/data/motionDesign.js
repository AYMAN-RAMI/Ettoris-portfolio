import { mediaUrl } from "../config/media";
const classes = {
  h_stretch: "relative row-span-1 col-span-1 md:col-span-2",
  simple_stretch: "relative row-span-1 md:row-span-1 col-span-1",
  v_stretch: "relative row-span-2 col-span-1",
  big_stretch: "relative row-span-2 col-span-1 md:col-span-2",
};

const motionDesignItems = [
  { index:1, src:mediaUrl("images/motion_design/Animated GIFs/$BIN buy bot GIF.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"$BIN buy bot", style:"Animated GIF", category:"Animated GIFs" },
  { index:2, src:mediaUrl("images/motion_design/Animated GIFs/$BLOW.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"$BLOW", style:"Animated GIF", category:"Animated GIFs" },
  { index:3, src:mediaUrl("images/motion_design/Animated GIFs/$SENDOR.gif"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"$SENDOR", style:"Animated GIF", category:"Animated GIFs" },
  { index:4, src:mediaUrl("images/motion_design/Animated GIFs/Animated gif ad banner 01.mp4"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Animated ad banner 01", style:"Animated GIF", category:"Animated GIFs" },
  { index:5, src:mediaUrl("images/motion_design/Animated GIFs/Animated gif ad banner 02.mp4"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Animated ad banner 02", style:"Animated GIF", category:"Animated GIFs" },
  { index:6, src:mediaUrl("images/motion_design/Animated GIFs/Animated gif ad banner 03.mp4"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Animated ad banner 03", style:"Animated GIF", category:"Animated GIFs" },
  { index:7, src:mediaUrl("images/motion_design/Animated GIFs/DUCC BUY ANIMATED GIF.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"DUCC buy", style:"Animated GIF", category:"Animated GIFs" },
  { index:8, src:mediaUrl("images/motion_design/Animated GIFs/Finale pepe BUYBOT GIF.mp4"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Finale pepe buybot", style:"Animated GIF", category:"Animated GIFs" },
  { index:9, src:mediaUrl("images/motion_design/Animated GIFs/harold animated gif.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Harold", style:"Animated GIF", category:"Animated GIFs" },
  { index:10, src:mediaUrl("images/motion_design/Animated GIFs/mbapepe_1.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Mbapepe", style:"Animated GIF", category:"Animated GIFs" },
  { index:11, src:mediaUrl("images/motion_design/Animated GIFs/Model X New Buy video.mp4"), divClass:classes.h_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Model X buy video", style:"Animated GIF", category:"Animated GIFs" },
  { index:12, src:mediaUrl("images/motion_design/Animated GIFs/VOLT animated gif.gif"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"VOLT", style:"Animated GIF", category:"Animated GIFs" },
  { index:13, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 01.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 01", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:14, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 02.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 02", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:15, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 03.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 03", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:16, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 04.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 04", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:17, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 05.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 05", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:18, src:mediaUrl("images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 06.mp4"), divClass:classes.simple_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Telegram sticker 06", style:"Animated Sticker", category:"Animated Telegram Stickers" },
  { index:19, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 1.webm"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 01", style:"Short Video", category:"Shorts Videos" },
  { index:20, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 2.webm"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 02", style:"Short Video", category:"Shorts Videos" },
  { index:21, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 3.webm"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 03", style:"Short Video", category:"Shorts Videos" },
  { index:22, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 4.mp4"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 04", style:"Short Video", category:"Shorts Videos" },
  { index:23, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 5.webm"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 05", style:"Short Video", category:"Shorts Videos" },
  { index:24, src:mediaUrl("images/motion_design/Shorts Videos/reel-short-tiktok 6.mp4"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"Reel short 06", style:"Short Video", category:"Shorts Videos" },
  { index:25, src:mediaUrl("images/motion_design/Explainer Videos/MenuDyalk Explainer Video.mp4"), divClass:classes.v_stretch, imgClass:"block h-full w-full object-cover object-center", title:"MenuDyalk", style:"Explainer Video", category:"Explainer Videos" },
  { index:26, src:mediaUrl("images/motion_design/Explainer Videos/The SoCrazy Presale Trailer Video.mp4"), divClass:classes.big_stretch, imgClass:"block h-full w-full object-cover object-center", title:"The SoCrazy presale trailer", style:"Explainer Video", category:"Explainer Videos" },
];

export default motionDesignItems;

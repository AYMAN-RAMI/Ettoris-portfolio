import { Suspense, lazy } from "react";
import GraphicDesignPage from "../component/Graphic_design";
import HeroSection from "../component/HeroSection";
import HeroSection2 from "../component/HeroSection2";
import MotionDesignPage from "../component/Motion_design";
import FeaturedWork from "../component/work/FeaturedWork";
import graphicDesignItems from "../data/graphicDesign";
import motionDesignItems from "../data/motionDesign";

const Footer = lazy(() => import('../component/Footer'));
const About = lazy(() => import('../component/About'));
const USE_HERO_SECTION_2 = true;

const Accueil = () => {
    const classes = {
        h_stretch: "relative row-span-1 col-span-1 md:col-span-2 ",
        big_h_stretch: "relative row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:row-span-2 lg:col-span-3 ",
        v_stretch: "relative col-span-1 row-span-2",
        big_stretch: "relative row-span-1 col-span-1 md:row-span-2 md:col-span-2 ",
        simple_stretch: "relative row-span-1 md:row-span-1 col-span-1 ",
        banner_stretch: "relative row-span-1 col-span-2 md:row-span-1 md:col-span-3 ",
        v_h_stretch: "relative row-span-2 md:col-span-2 col-span-1 ",
    };

    const _digital_art = [
        { index:1, src:"images/Digital_art/chmcreations.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"chmcreations's contest", style:"Illustration", category:"Logos" },
        { index:2, src:"images/Digital_art/spleux.webp", divClass:'relative row-span-2 md:col-span-2 col-span-1', imgClass:'h-full w-full object-cover object-center', title:"spleux", style:"Illustration", category:"Logos" },
        { index:3, src:"images/Digital_art/small_x.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"small x", style:"Illustration", category:"Logos" },
        { index:4, src:"images/Digital_art/inko.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"inkonnu", style:"painting", category:"Logos" },
        { index:5, src:"images/Digital_art/asmae.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-[10%_40%]', title:"asmae", style:"Illustration" },
        { index:6, src:"images/Digital_art/box_1.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"box", style:"painting" },
        { index:7, src:"images/Digital_art/madd-x-hisoka.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"madd x hisoha", style:"Illustration" },
        { index:8, src:"images/Digital_art/laaura.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"laaura", style:"Illustration" },
        { index:9, src:"images/Digital_art/joker.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"joker", style:"Illustration" },
        { index:10, src:"images/Digital_art/anys-x-kurapika.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"anys x kurapika", style:"Illustration" },
        { index:11, src:"images/Digital_art/john-wick.webp", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"john wick", style:"Illustration" },
        { index:12, src:"images/Digital_art/final_sketch.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"amine", style:"painting" },
        { index:13, src:"images/Digital_art/dax.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"dax", style:"Illustration" },
        { index:14, src:"images/Digital_art/drake.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"drake", style:"Illustration" },
        { index:15, src:"images/Digital_art/elifvzo.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"elifzo", style:"Illustration" },
        { index:16, src:"images/Digital_art/oulid-x-deku.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"oualid x deku", style:"Illustration" },
        { index:17, src:"images/Digital_art/b_w-red.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"black & white", style:"Illustration" },
        { index:18, src:"images/Digital_art/EGT-x-cameleon.webp", divClass:'relative row-span-2 md:col-span-2 col-span-1', imgClass:'h-full w-full object-cover object-center', title:"EGT x cameleon", style:"Illustration" },
        { index:19, src:"images/Digital_art/sahara_1.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"sahara", style:"painting" },
        { index:20, src:"images/Digital_art/fitjikh-x-supersaiyen.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"fitjikh x supersaiyen", style:"Illustration" },
        { index:21, src:"images/Digital_art/bts-fan.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-[10%_40%]', title:"bts fan", style:"Illustration" },
        { index:22, src:"images/Digital_art/soulayman.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-[40%_40%]', title:"soulayman", style:"Illustration" },
        { index:23, src:"images/Digital_art/me.webp", divClass:classes.big_stretch, imgClass:'h-full w-full object-cover object-bottom', title:"portrait", style:"Illustration" },
        { index:24, src:"images/Digital_art/pixel.webp", divClass:classes.big_stretch, imgClass:'h-full w-full object-cover object-bottom', title:"pixels", style:"pixel art" },
    ];

    const _graphic_design = [
        { index:1, src:"images/GRAPHIC DESIGN/grandfather_clock_story.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"grandfather clock", style:"Illustration", category:"Illustrations" },
        { index:2, src:"images/GRAPHIC DESIGN/floki-logo.webp", divClass:'relative row-span-1 col-span-1', imgClass:'h-full w-full object-cover object-center', title:"floki", style:"Logo", category:"Illustrations" },
        { index:3, src:"images/GRAPHIC DESIGN/Disfigured.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Disfigured", style:"Cover", category:"Illustrations" },
        { index:4, src:"images/GRAPHIC DESIGN/ronnie_osullivan_poster.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"ronnie osullivan", style:"Poster", category:"Illustrations" },
        { index:11, src:"images/GRAPHIC DESIGN/poseidon_logo.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"poseiden life", style:"Logo", category:"Illustrations" },
        { index:5, src:"images/GRAPHIC DESIGN/artisanate.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Artisanat", style:"Logo", category:"Illustrations" },
        { index:9, src:"images/GRAPHIC DESIGN/M&N.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"m&n diamant", style:"Logo", category:"Illustrations" },
        { index:6, src:"images/GRAPHIC DESIGN/KALI-KALI-graffiti.webp", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Kali kali", style:"graffiti", category:"Illustrations" },
        { index:3, src:"images/GRAPHIC DESIGN/tocard_2.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"tocard", style:"cover", category:"Illustrations" },
        { index:16, src:"images/GRAPHIC DESIGN/K.C.F-cover.webp", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"K.C.F", style:"Cover", category:"Illustrations" },
        { index:12, src:"images/GRAPHIC DESIGN/PVES.webp", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"PVES", style:"Thumpnail", category:"Illustrations" },
        { index:16, src:"images/GRAPHIC DESIGN/santa-alien.webp", divClass:'relative ', imgClass:'h-full w-full object-cover object-center', title:"santa alien", style:"Logo", category:"Illustrations" },
        { index:17, src:"images/GRAPHIC DESIGN/clean-men.webp", divClass:'relative row-span-1 col-span-2 ', imgClass:'h-full w-full object-cover object-bottom', title:"clean man", style:"Packaging", category:"Illustrations" },
    ];
    // the new one
    const _graphic_design2 = [
        { index:1, src:"images/graphic_design/Banners/whitelist banner-03.webp", divClass:classes.banner_stretch, imgClass:'h-full w-full object-cover object-center', title:"whitelist", style:"Banner", category:"Banners" },
        { index:2, src:"images/graphic_design/Banners/$kew upcoming presale-02.webp", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"KEW", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/$Viagra Banner-2.webp", divClass:classes.big_h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Viagra", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/banner 5.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Banner5", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/GET READY banner-04.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"GET READY", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/launch day-05.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"lunch day", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/MacKenzie banner-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"MacKenzie", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/Mbapepe Twitter banner-04.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Mbapepe", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/projected 1000x returns.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"projected 1000x returns", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/qatar inu banner 2-05.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"qatar inu", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/Stay safe everyone banner.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Stay safe everyone", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/twitter flyer.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"twitter flyer", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/ethaverse post-04.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"ethaverse", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/fairlaunch on pinksale banner-02.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"pinksale", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/Free Flow Swap banner-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Free Flow Swap", style:"Banner", category:"Banners" },
        { index:3, src:"images/graphic_design/Banners/$BISON Banner Design.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"BISON", style:"Banner", category:"Banners" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Disfigured BERMUDA-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Disfigured", style:"Cover", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/DON'T-WASTE-YOUR-LIFE.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"DON'T-WASTE-YOUR-LIFE", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/El-secreto.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"El-secreto", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/FIGHT-DEPRESSION.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"FIGHT-DEPRESSION", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Jeffrey-dahmer-thumbnail.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Jeffrey-dahmer", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Liebeskummer-thumbnail.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Liebeskummer", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/novak-djokovic-motivation-video-thumbnail.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"novak-djokovic", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/self-doubt.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"self-doubt", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/TOCARD 2.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"TOCARD 2", style:"Cover", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/WawoW cover-Ps.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"WawoW cover-Ps", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/when-life-hurts-you.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"when-life-hurts-you", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Youtube Thumbnail design 01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Youtube Thumbnail 01", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Youtube Thumbnail design 02.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Youtube Thumbnail 02", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:4, src:"images/graphic_design/Covers & Thumbnails/Youtube-Thumbnail.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Youtube-Thumbnail", style:"Thumbnail", category:"Covers & Thumbnails" },
        { index:5, src:"images/graphic_design/illustrations/asmae.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"asmae", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/box 1.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"box 1", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/Brad_dAtay_b_Na3na3.webp", divClass:classes.v_h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Brad_d'Atay_b_Na3na3", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/brain & heart.webp", divClass:classes.v_stretch, imgClass:'h-full w-full object-cover object-center', title:"brain & heart", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/dax.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"dax", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/me.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"othman ettori", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/dizzy dros.webp", divClass:classes.v_h_stretch, imgClass:'h-full w-full object-cover object-center', title:"dizzy dros", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/sahara 1.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"sahara 1", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/small x.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"small x", style:"illustration", category:"illustrations" },
        { index:5, src:"images/graphic_design/illustrations/spleux.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"spleux", style:"illustration", category:"illustrations" },
        { index:6, src:"images/graphic_design/Memecoins Designs/$BB portal design.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"BB portal", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/$Cook meme 1.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$Cook meme 1", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/$Cook meme 2.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$Cook meme 2", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/$Cook meme 3.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$Cook meme 3", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/$Cook meme 4-08.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$Cook meme 4", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/1$ michi.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"1$ michi", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/100M is just the beginning Design-02.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"100M is just the beginning", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/Best meme in the world-06.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Best meme in the world", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/comic 2-09.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"comic 2", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/comic-09.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"comic", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/Dwagon DBZ shenron.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Dwagon DBZ shenron", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/Gary Gensler-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Gary Gensler", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/gold digger updated-05.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"gold digger", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/Kingdom of the planet of Michi.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Kingdom of Michi", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/PEPE X RETURN OF CHADS-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"PEPE X RETURN OF CHADS", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/push-up contest-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"push-up contest", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/the Matrix will never get me updated-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"the Matrix will never get me", style:"Memecoin", category:"Memecoins" },
        { index:6, src:"images/graphic_design/Memecoins Designs/The wolf of memecoin.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"The wolf of memecoin", style:"Memecoin", category:"Memecoins" },
        { index:7, src:"images/graphic_design/Posts & Carousels/1 Carousel-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"1 Carousel-01", style:"Carousel", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/1 Carousel-02.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"1 Carousel-02", style:"Carousel", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/1 Carousel-03.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"1 Carousel-03", style:"Carousel", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/GIVEAWAY ARTCAF POST-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"GIVEAWAY ARTCAF POST-01", style:"Post", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/GIVEAWAY TIME POST-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"GIVEAWAY TIME POST-01", style:"Post", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/unictee carousel 1-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"unictee carousel 1-01", style:"Carousel", category:"Posts & Carousels" },
        { index:7, src:"images/graphic_design/Posts & Carousels/UnicTee carousel 2-01.webp", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"UnicTee carousel 2-01", style:"Carousel", category:"Posts & Carousels" },
    ];

    const _motion_design = [
        { index:1, src:"images/motion_design/Animated GIFs/$BIN buy bot GIF.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$BIN buy bot", style:"Animated GIF", category:"Animated GIFs" },
        { index:2, src:"images/motion_design/Animated GIFs/$BLOW.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$BLOW", style:"Animated GIF", category:"Animated GIFs" },
        { index:3, src:"images/motion_design/Animated GIFs/$SENDOR.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"$SENDOR", style:"Animated GIF", category:"Animated GIFs" },
        { index:4, src:"images/motion_design/Animated GIFs/Animated gif ad banner 01.mp4", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Animated ad banner 01", style:"Animated GIF", category:"Animated GIFs" },
        { index:5, src:"images/motion_design/Animated GIFs/Animated gif ad banner 02.mp4", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Animated ad banner 02", style:"Animated GIF", category:"Animated GIFs" },
        { index:6, src:"images/motion_design/Animated GIFs/Animated gif ad banner 03.mp4", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Animated ad banner 03", style:"Animated GIF", category:"Animated GIFs" },
        { index:7, src:"images/motion_design/Animated GIFs/DUCC BUY ANIMATED GIF.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"DUCC buy", style:"Animated GIF", category:"Animated GIFs" },
        { index:8, src:"images/motion_design/Animated GIFs/Finale pepe BUYBOT GIF.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Finale pepe buybot", style:"Animated GIF", category:"Animated GIFs" },
        { index:9, src:"images/motion_design/Animated GIFs/harold animated gif.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Harold", style:"Animated GIF", category:"Animated GIFs" },
        { index:10, src:"images/motion_design/Animated GIFs/mbapepe_1.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Mbapepe", style:"Animated GIF", category:"Animated GIFs" },
        { index:11, src:"images/motion_design/Animated GIFs/Model X New Buy video.mp4", divClass:classes.h_stretch, imgClass:'h-full w-full object-cover object-center', title:"Model X buy video", style:"Animated GIF", category:"Animated GIFs" },
        { index:12, src:"images/motion_design/Animated GIFs/VOLT animated gif.gif", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"VOLT", style:"Animated GIF", category:"Animated GIFs" },
        { index:13, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 01.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 01", style:"Animated Sticker", category:"Animated Telegram Stickers" },
        { index:14, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 02.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 02", style:"Animated Sticker", category:"Animated Telegram Stickers" },
        { index:15, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 03.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 03", style:"Animated Sticker", category:"Animated Telegram Stickers" },
        { index:16, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 04.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 04", style:"Animated Sticker", category:"Animated Telegram Stickers" },
        { index:17, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 05.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 05", style:"Animated Sticker", category:"Animated Telegram Stickers" },
        { index:18, src:"images/motion_design/Animated Telegram Stickers/Animated Telegram Stickers 06.mp4", divClass:classes.simple_stretch, imgClass:'h-full w-full object-cover object-center', title:"Telegram sticker 06", style:"Animated Sticker", category:"Animated Telegram Stickers" },
    ];

    return (
        <>
            {USE_HERO_SECTION_2 ? <HeroSection2 /> : <HeroSection />}
            <div className="relative bg-bleu min-h-screen">
                <Suspense fallback={<div>LOADING...</div>}>
                    <FeaturedWork />
                    <div
                        aria-hidden="true"
                        className="h-4 md:h-6 bg-bleu"
                    />
                    <GraphicDesignPage imagesArr={graphicDesignItems} />
                    <MotionDesignPage imagesArr={motionDesignItems} />
                    <div
                        aria-hidden="true"
                        className="h-4 md:h-6 bg-bleu"
                    />
                    <About />
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}

export default Accueil;

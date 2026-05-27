// import { XIcon } from "@heroicons/react/solid";
import {  XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";


const AnimationGallery = () => {

    const animations = [

        {
            index: 1,
            src: "images/ANIMATION/snor 1.mp4",
            divClass: 'relative ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "snor 1",
            style: "Animation"
        },
        {
            index: 2,
            src: "images/ANIMATION/snor 2.mp4",
            divClass: 'relative ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "snor 2",
            style: "Animation"
        },
        {
            index: 3,
            src: "images/ANIMATION/snor 3.mp4",
            divClass: 'relative ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "snor 3",
            style: "Animation"
        },
        {
            index: 4,
            src: "images/ANIMATION/animation scene 1.mp4",
            divClass: 'relative  col-span-1 row-span-1 md:row-span-2 ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "animation scene",
            style: "Animation"
        },
        {
            index: 5,
            src: "images/ANIMATION/vintage room.mp4",
            divClass: 'relative col-span-2 ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "vintage room",
            style: "Animation"
        },
        {
            index: 6,
            src: "images/ANIMATION/boat.mp4",
            divClass: 'relative col-span-2 ',
            imgClass: 'h-full w-full object-cover object-center',
            title: "boat's animation",
            style: "Animation"
        },

    ];

    const [model, setModel] = useState(false);
    const [videoSrc, setvideoSrc] = useState('')

    //
    const getvideo = (src) => {
        setvideoSrc(src);
        setModel(true);
    }

    return (
        <section id="animation" className="relative my-[10px]">
            <div className="overflow-hidden mb-[10px]">
                <div className="h-0 relative  pb-6 w-0 pr-[2500px]   ">
                    <img alt="Animation bar" src="images/ANIMATION/ANIMATION-BAR.png" width="2500" height="28" className="absolute left-0 top-0 animate-move h-full max-h-full max-w-full w-full  " />

                </div>
            </div>

            <div className={`fixed top-[56px] popHeight w-full inset-0 flex items-center justify-center bg-noir z-50 transition[opacity] transition[visibility]  ease-in-out delay-[5s] ${model ? "block opacity-100 scale-100" : "hidden opacity-0 scale-0"}`}>
                <video src={videoSrc} className=' w-auto max-w-full h-auto max-h-full p-10 mx-0 my-auto object-center' autoPlay></video>
                <XMarkIcon className="h-11 w-8 inline-block absolute right-1 md:right-3 top-0 hover:cursor-pointer" onClick={() => { setModel(false) }} />

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-[10px] auto-rows-[500px]">

                {
                    animations.map((item, index) => {
                        return (
                            <div key={index} className={item.divClass} onClick={() => getvideo(item.src)} >

                                <video className="w-full h-full object-cover object-center" src={item.src} autoPlay loop></video>

                                <div className="px-10 pt-7 m-auto absolute inset-0 z-10 w-full h-full border-4 border-gray-800 bg-noir opacity-0 hover:opacity-80 hover:cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-orange mb-1">
                                        {item.style}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {item.title}
                                    </h1>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

        </section>);
}

export default AnimationGallery;

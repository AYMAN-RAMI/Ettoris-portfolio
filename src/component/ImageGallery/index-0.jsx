import { useEffect, useState } from "react";
// import { XIcon } from "@heroicons/react/solid";
import {  XMarkIcon } from '@heroicons/react/24/solid'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageGallery = ({images}) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
    }, [images]);


    const [model, setModel] = useState(false);
    const [imgSrc, setImgSrc] = useState('')

    //
    const getImg = (src) =>{
        setImgSrc(src);
        setModel(true);
    }


    return ( 
    <>  
        {!loaded && <div>Loading images...</div>}
        <div className={`fixed top-[70px] popHeight w-full inset-0 flex items-center justify-center bg-noir z-50 transition-opacity transition[visibility]  ease-in-out delay-[5s] ${model ? "block opacity-100 scale-100" : "hidden opacity-0 scale-0" }`}>
            <img src={imgSrc} alt='img clicked' className=' w-auto max-w-full h-auto max-h-full p-10 mx-0 my-auto object-center'  />
            <XMarkIcon className="h-11 w-8 inline-block absolute right-1 md:right-3 top-0 hover:cursor-pointer rounded-full hover:bg-gray-900 " onClick={()=>{setModel(false)}} />

        </div>
        <div className=" bg-noir p-0.5 mx-0 my-auto grid gap-1 md:gap-[10px] grid-cols-(--grid-cols-fitsm) md:grid-cols-(--grid-cols-fit) auto-rows-[250px] grid-flow-dense overflow-hidden">
            
            {
                images.map((item,index)=>{
                    return (
                        <div key={index} className={item.divClass} onClick={()=>getImg(item.src)}>
                            <LazyLoadImage src={item.src}  alt={item.title} onLoad={() => setLoaded(true)} className={item.imgClass}/>
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
    </>  );
}
 
export default ImageGallery;
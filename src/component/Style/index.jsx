

const Style = () => {

    
    
    //overflow-hidden
    return ( 
    <div  className="relative h-auto mb-10 ">

        
        
        <div  className="overflow-hidden">
            <div className="h-0 relative  pb-6 w-0 pr-[2500px]   ">
                <img   alt=""  src="images/Digital_art/DIGITAL_ART_BAR.webp" width="2500" height="28" className="absolute left-0 top-0 animate-move fill_mode h-full max-h-full max-w-full w-full  " />
            </div>
        </div>

        <div className={`md:flex md:justify-center m-1  md:m-10 `} >
            
            <div className="relative md:sticky md:top-[100px] m-9 md:m-0 md:w-1/3 h-full">
                <div className={``}>  
                    <img  src="images/dizzy_dros.webp"  alt="dizzy" className={` sm:m-auto `}  />
                    {//absolute inset-0 h-full w-auto object-fill
                    }
                </div>
            </div>
            
        
            <div className="flex flex-col items-center mt-10 md:mt-0 w-full  md:w-2/3 md:ml-10">
                <img  src="images/parallax_scroll_1.webp" width="800" height="500" alt="tuto" className="sticky top-[100px] h-auto  " />
                <img src="images/parallax_scroll_2.webp" width="800" height="500" alt="tuto" className="sticky top-[100px] h-auto " />
                <img src="images/parallax_scroll_3.webp" width="800" height="500" alt="tuto" className="sticky  h-auto " />
            </div>
        </div>
        
    </div> );
}
 
export default Style;


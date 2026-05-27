import { useEffect, useState } from "react";

const ProgressBar = () => {

    const [scroll, setScroll] = useState(0);
    const progressMainStyle = {
        
        width: scroll
      };
    
    useEffect(() => {
        
      const setProgressBar =()=>{
        const scrollTotal = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const value = `${scrollTotal / heightWin * 100}%`;
            setScroll(value)
        
      }
      window.addEventListener('scroll',setProgressBar);
      return () => {
        window.removeEventListener('scroll',setProgressBar)
      }
    }, [scroll])

    return ( <div className="pointer-events-none fixed left-0 top-[54px] z-[31] h-[2px] w-full overflow-hidden bg-transparent">
            <div className="h-full bg-orange/90" style={progressMainStyle}></div>
        </div> );
}
 
export default ProgressBar;

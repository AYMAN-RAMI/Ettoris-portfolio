import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { graphicCategories, motionCategories } from "../../data/categories";
import work from "../../data/work";

const Side = ({menuOpen,toggleClick}) => {

    const [subMenu, setsubMenu] = useState(false);

    const isWorkRoute = location.pathname.startsWith("/work");
    const isHome = location.pathname === "/";

    // close modal on escape key press
    useEffect(() => {
        if (!isHome) return;
        const closeOnEscapeKey = (e) => (e.key === "Escape" ? setsubMenu(false) : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
        document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [isHome]);
    
    const activeClass = "selected";
    const featuredWork = work.filter((workItem) => !workItem.comingSoon).slice(0, 4);
    const sectionLinkClass = "flex items-center justify-between rounded transition duration-200 -tracking-widest hover:bg-noir hover:text-orange";
    const subLinkClass = "transition-colors hover:text-orange";
//inset-y-0
    return ( 
        <>
            <div onClick={()=>setsubMenu(false)} className={`${subMenu && "!opacity-100 !visible"} fixed inset-0 w-screen h-screen opacity-0 invisible bg-black/70 transition-opacity duration-200 z-20  `}></div>
            <div className={`z-50 h-screen w-60 fixed inset-y-0 transform transition  left-0 duration-200 ease-in-out  ${menuOpen ? "translate-x-0" : "-translate-x-full" }`}>

                <aside className={`relative top-[56px] h-screen w-60 bg-gradient-to-b from-bleu to-noir text-white`}>
                    
                    <nav className="flex flex-col gap-5 pt-6 px-4 text-lg">
                        {/* subMenu */}
                        
                        <Link
                            to="/work" onClick={()=>toggleClick()}
                            className={`${sectionLinkClass} mt-2 ${isWorkRoute ? activeClass : ""}`}
                        >
                            <span>Work</span>
                            <ChevronDownIcon className="h-4 w-4 text-orange" />
                        </Link>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60">
                            {featuredWork.map((workItem) => (
                                <Link
                                    key={workItem.slug}
                                    to={`/work/${workItem.slug}`}
                                    onClick={()=>toggleClick()}
                                    className={subLinkClass}
                                >
                                    {workItem.title}
                                </Link>
                            ))}
                        </div>

                        <Link to="/#graphic_design" className={sectionLinkClass} onClick={()=>toggleClick()}>
                            <span>Graphic Design</span>
                            <ChevronDownIcon className="h-4 w-4 text-orange" />
                        </Link>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60">
                            {graphicCategories.map((category) => (
                                <Link
                                    key={category}
                                    to={`/?graphic=${encodeURIComponent(category)}#graphic_design`}
                                    onClick={()=>toggleClick()}
                                    className={subLinkClass}
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>

                        <Link to="/#motion_design" onClick={()=>toggleClick()} className={sectionLinkClass}>
                            <span>Motion Design</span>
                            <ChevronDownIcon className="h-4 w-4 text-orange" />
                        </Link>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60">
                            {motionCategories.map((category) => (
                                <Link
                                    key={category}
                                    to={`/?motion=${encodeURIComponent(category)}#motion_design`}
                                    onClick={()=>toggleClick()}
                                    className={subLinkClass}
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                        {/* <a href="#animation" className="block  px-4 py-2.5 mt-2 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>animation</a> */}
                        <a href="/#about" className="block hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>About</a>
                        <a href="/#contact" className="block hover:bg-orange rounded transition duration-200" onClick={()=>toggleClick()}>Contact</a>

                    </nav>
                
                </aside>
            </div>
        </>
     );
}
 
export default Side;

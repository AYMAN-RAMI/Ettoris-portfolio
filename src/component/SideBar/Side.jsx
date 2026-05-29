import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { graphicCategories, motionCategories } from "../../data/categories";
import work from "../../data/work";

const Side = ({menuOpen,toggleClick}) => {

    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation();

    const isWorkRoute = location.pathname.startsWith("/work");

    useEffect(() => {
        const closeOnEscapeKey = (e) => (e.key === "Escape" ? setOpenMenu(null) : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
        document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) return;

        const timeout = window.setTimeout(() => setOpenMenu(null), 0);
        return () => window.clearTimeout(timeout);
    }, [menuOpen]);

    const toggleSubMenu = (menu) => {
        setOpenMenu((currentMenu) => currentMenu === menu ? null : menu);
    };
    
    const activeClass = "selected";
    const featuredWork = work.filter((workItem) => !workItem.comingSoon).slice(0, 4);
    const sectionLinkClass = "flex w-full items-center justify-between rounded text-left transition duration-200 -tracking-widest hover:bg-noir hover:text-orange";
    const subLinkClass = "transition-colors hover:text-orange";
//inset-y-0
    return ( 
        <>
            <div onClick={()=>setOpenMenu(null)} className={`${openMenu && "!opacity-100 !visible"} fixed inset-0 w-screen h-screen opacity-0 invisible bg-black/70 transition-opacity duration-200 z-20  `}></div>
            <div className={`z-50 h-screen w-60 fixed inset-y-0 transform transition  left-0 duration-200 ease-in-out  ${menuOpen ? "translate-x-0" : "-translate-x-full" }`}>

                <aside className={`relative top-[56px] h-screen w-60 bg-gradient-to-b from-bleu to-noir text-white`}>
                    
                    <nav className="flex flex-col gap-5 pt-6 px-4 text-lg">
                        {/* subMenu */}
                        
                        <button
                            type="button"
                            onClick={() => toggleSubMenu("work")}
                            className={`${sectionLinkClass} mt-2 ${isWorkRoute ? activeClass : ""}`}
                        >
                            <span>Work</span>
                            <ChevronDownIcon className={`h-4 w-4 text-orange transition-transform duration-200 ${openMenu === "work" ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`${openMenu === "work" ? "flex" : "hidden"} flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60`}>
                            <Link
                                to="/work"
                                onClick={()=>toggleClick()}
                                className={subLinkClass}
                            >
                                All Work
                            </Link>
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

                        <button type="button" className={sectionLinkClass} onClick={() => toggleSubMenu("graphic")}>
                            <span>Graphic Design</span>
                            <ChevronDownIcon className={`h-4 w-4 text-orange transition-transform duration-200 ${openMenu === "graphic" ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`${openMenu === "graphic" ? "flex" : "hidden"} flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60`}>
                            <Link
                                to="/#graphic_design"
                                onClick={()=>toggleClick()}
                                className={subLinkClass}
                            >
                                All Graphic Design
                            </Link>
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

                        <button type="button" onClick={() => toggleSubMenu("motion")} className={sectionLinkClass}>
                            <span>Motion Design</span>
                            <ChevronDownIcon className={`h-4 w-4 text-orange transition-transform duration-200 ${openMenu === "motion" ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`${openMenu === "motion" ? "flex" : "hidden"} flex-col gap-2 border-l border-white/10 pl-3 text-sm text-white/60`}>
                            <Link
                                to="/#motion_design"
                                onClick={()=>toggleClick()}
                                className={subLinkClass}
                            >
                                All Motion Design
                            </Link>
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

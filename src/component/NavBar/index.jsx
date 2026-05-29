import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { graphicCategories, motionCategories } from "../../data/categories";
import work from "../../data/work";
import Side from '../SideBar/Side';

const sectionIds = ["featured_work", "graphic_design", "motion_design", "about"];
const sectionFromHash = {
  "#graphic_design": "graphic_design",
  "#motion_design": "motion_design",
  "#about": "about",
};

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isWorkRoute = location.pathname.startsWith("/work");
  const isHome = location.pathname === "/";

  const isWorkActive = isWorkRoute || (isHome && activeLink === "featured_work");
  const isGraphicActive = isHome && activeLink === "graphic_design";
  const isMotionActive = isHome && activeLink === "motion_design";
  const isAboutActive = isHome && activeLink === "about";

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
    if (!isHome) {
      setActiveLink(null);
      return;
    }

    setActiveLink(sectionFromHash[location.hash] ?? null);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [isHome, location.hash, location.search]);

  useEffect(() => {
    if (!isHome) return;

    const spy = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const scrollTotal = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight > 0 && scrollTotal >= scrollHeight - 2) {
        setActiveLink('about');
        return;
      }

      if (sections[0].getBoundingClientRect().top - 64 > 0) {
        setActiveLink(null);
        return;
      }

      let currentSection = activeLink;

      sections.forEach(section => {
        const top = section.getBoundingClientRect().top - 64;
        const bottom = section.getBoundingClientRect().bottom - 64;

        if (top <= 0 && bottom >= 0) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
    };

    spy();
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);

    return () => {
      window.removeEventListener('scroll', spy);
      window.removeEventListener('resize', spy);
    };
  }, [activeLink, isHome, location.pathname]);

  const linkBase =
    "nav-adaptive py-4 capitalize font-light tracking-[0.08em] text-white transition-all duration-300 ease-out hover:text-orange defaut";

  const activeClass = "selected";

  const dropdownBase =
    "invisible absolute left-0 top-full min-w-64 translate-y-2 overflow-hidden rounded-b-xl border border-white/10 bg-[#050914]/95 py-2 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

  const categoryLinkBase =
    "block whitespace-nowrap px-4 py-2.5 text-sm text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-orange";

  const navWithArrow = `${linkBase} inline-flex items-center gap-1.5`;

  const featuredWork = work
    .filter((workItem) => !workItem.comingSoon)
    .slice(0, 4);

  return (
    <>
      <header className="h-[56px] w-full top-0 left-0 fixed z-30 text-white flex items-center justify-between bg-[#020205]/55 px-4 text-sm backdrop-blur-md lg:px-6 lg:text-base">
        <a href="/" className="shrink-0">
          <img
            src="images/OE.png"
            alt="logo"
            className="nav-adaptive h-[40px] fill-white transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          <div className="group relative">
            <Link
              to="/work"
              className={`${navWithArrow} ${isWorkActive ? activeClass : ""}`}
            >
              Work
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className={dropdownBase}>
              {featuredWork.map((workItem) => (
                <Link
                  key={workItem.slug}
                  to={`/work/${workItem.slug}`}
                  className={categoryLinkBase}
                >
                  {workItem.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/#graphic_design"
              className={`${navWithArrow} ${isGraphicActive ? activeClass : ""}`}
            >
              Graphic Design
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className={dropdownBase}>
              {graphicCategories.map((category) => (
                <Link
                  key={category}
                  to={`/?graphic=${encodeURIComponent(category)}#graphic_design`}
                  className={categoryLinkBase}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/#motion_design"
              className={`${navWithArrow} ${isMotionActive ? activeClass : ""}`}
            >
              Motion Design
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className={dropdownBase}>
              {motionCategories.map((category) => (
                <Link
                  key={category}
                  to={`/?motion=${encodeURIComponent(category)}#motion_design`}
                  className={categoryLinkBase}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <a
          href="/#about"
          className={`hidden lg:block ${linkBase} ${isAboutActive ? activeClass : ""}`}
        >
          About / Contact
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          className="nav-adaptive lg:hidden p-2 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </header>

      <Side
        menuOpen={menuOpen}
        toggleClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default NavBar;

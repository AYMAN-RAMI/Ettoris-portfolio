import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Side from '../SideBar/Side';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: 777 });
  const location = useLocation();

  const isWorkRoute = location.pathname.startsWith("/work");
  const isHome = location.pathname === "/";

  useEffect(() => {
    const sizeHandler = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', sizeHandler);
    return () => window.removeEventListener('resize', sizeHandler);
  }, []);

  useEffect(() => {
    if (size.width > 1024 && menuOpen) 
      setMenuOpen(false);
  }, [size.width, menuOpen]);

  const toggleClick = () => setMenuOpen(!menuOpen);

  // Section scroll spy — only active on home route
  useEffect(() => {
    if (!isHome) return;

    const getActiveSection = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (parseInt(scrollTotal / heightWin) === 1) return setActiveLink('about');

      const sections = document.querySelectorAll('section');
      if (sections.length === 0) return;

      if (sections[0].getBoundingClientRect().top - 70 > 0) {
        setActiveLink(null);
        return;
      }

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - 70;
        const sectionBottom = section.getBoundingClientRect().bottom - 70;
        if (sectionTop <= 0 && sectionBottom >= 0) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', getActiveSection);
    return () => window.removeEventListener('scroll', getActiveSection);
  }, [activeLink, isHome]);

  return (
    <>
      <header className="h-[70px] w-full top-0 left-0 bg-bleu fixed z-30 text-white flex lg:justify-between lg:px-3 lg:mx-auto text-2xl lg:text-lg">
        <a href="/">
          <img src="images/OE.png" alt='logo' className="ml-5 lg:ml-0 h-[50px] my-[10px] fill-white" />
        </a>

        <div className="hidden lg:flex items-center justify-between">
          <a
            href="/#graphic_design"
            className={`hidden lg:block py-6 capitalize hover:text-orange rounded mx-6 defaut ${isHome && activeLink === "graphic_design" ? "selected" : ""}`}
          >
            Graphic Design
          </a>
          <a
            href="/#motion_design"
            className={`hidden lg:block py-6 capitalize hover:text-orange rounded defaut ${isHome && activeLink === "motion_design" ? "selected" : ""}`}
          >
            Motion Design
          </a>
          <Link
            to="/work"
            className={`hidden lg:block py-6 capitalize hover:text-orange rounded defaut ${isWorkRoute ? "selected" : ""}`}
          >
            Work
          </Link>
        </div>

        <a
          href="/#about"
          className={`hidden lg:block py-6 capitalize hover:text-orange defaut ${isHome && activeLink === "about" ? "selected" : ""}`}
        >
          About/Contact
        </a>
      </header>
      <Side menuOpen={menuOpen} toggleClick={toggleClick} />
    </>
  );
};

export default NavBar;

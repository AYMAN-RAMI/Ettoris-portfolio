import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./component/LoadingScreen";
import NavBar from "./component/NavBar";
import ProgressBar from "./component/ProgressBar";
import ScrollToHash from "./component/ScrollToHash";
import Accueil from "./containers/Acceuil";
import Work from "./containers/Work";
import WorkDetail from "./containers/WorkDetail";
import MotionDesignPage from "./component/Motion_design";

const LOADER_DURATION = 320;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const initialPath = useRef(
    `${location.pathname}${location.search}${location.hash}`
  );

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setIsLoading(false), LOADER_DURATION);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading, { once: true });
    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    const currentPath = `${location.pathname}${location.search}${location.hash}`;
    if (currentPath === initialPath.current) return;

    const shouldShowLoader =
      location.pathname.startsWith("/work");

    if (!shouldShowLoader) return;

    setIsLoading(true);
    const timeout = window.setTimeout(() => setIsLoading(false), LOADER_DURATION);

    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.search, location.hash]);

  return (
    <main className="relative bg-bleu w-full min-h-screen flex-row text-white font-azonix h-full scroll-smooth before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(228,58,25,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_36%)] before:content-['']">
      <LoadingScreen isVisible={isLoading} />
      <NavBar />
      <ProgressBar />
      <ScrollToHash />
      <div className="relative top-[56px] z-10">
        <Routes>
          <Route path="/"                    element={<Accueil />} />
          <Route path="/work"            element={<Work />} />
          <Route path="/motion-design"      element={<MotionDesignPage />} />
          <Route path="/work/:slug"      element={<WorkDetail />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";

const LazyWhenVisible = ({
  children,
  className = "",
  minHeight = "min-h-[320px]",
  rootMargin = "360px 0px",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    const node = containerRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className={`${isVisible ? "" : minHeight} ${className}`}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyWhenVisible;

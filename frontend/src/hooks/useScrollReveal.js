import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns a ref to attach to a section, and a boolean that becomes true
 * once the section scrolls into view. Use it to toggle a "visible" class
 * that triggers a CSS fade/slide-in animation.
 */
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver isn't supported, just show it immediately.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // animate in once, don't repeat on scroll back
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
        ...options,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

export default useScrollReveal;

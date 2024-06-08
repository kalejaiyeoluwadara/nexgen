"use client";
import { useEffect } from "react";
const useSmoothScroll = (scrollSpeed = 0.5) => {
  useEffect(() => {
    let scrollPosition = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      ticking = false;
    };

    const handleScroll = (event) => {
      event.preventDefault();

      scrollPosition += event.deltaY * scrollSpeed;
      scrollPosition = Math.max(
        0,
        Math.min(
          scrollPosition,
          document.body.scrollHeight - window.innerHeight
        )
      );

      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollSpeed]);
};

export default useSmoothScroll;

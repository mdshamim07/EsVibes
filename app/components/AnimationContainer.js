"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimationContainer({ children }) {
  const [isInView, setIsInView] = useState(false);
  const animRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Set to false when it goes out of view
        }
      },
      { threshold: 0.1 }
    );

    if (animRef.current) {
      observer.observe(animRef.current);
    }

    return () => {
      if (animRef.current) {
        observer.unobserve(animRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={animRef}
      style={{
        opacity: isInView ? 1 : 0.5,
        filter: isInView ? "blur(0px)" : "blur(2px)",
        transform: `translateY(${isInView ? -8 : 20}px)`,
        transition: "opacity 0.5s, filter 0.5s, transform 0.5s",
      }}
    >
      {children}
    </div>
  );
}

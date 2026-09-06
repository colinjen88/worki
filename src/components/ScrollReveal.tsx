"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use Intersection Observer API
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Merge classes: generic scroll-reveal, plus the specific is-revealed state, plus any custom classes
  const combinedClassName = `scroll-reveal ${
    isRevealed ? "is-revealed" : ""
  } ${className}`.trim();

  // If a delay is provided, we use inline style to set transition delay
  const style = delay > 0 ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <div ref={ref} className={combinedClassName} style={style}>
      {children}
    </div>
  );
}

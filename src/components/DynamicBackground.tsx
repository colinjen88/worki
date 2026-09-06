"use client";

import { useEffect, useRef } from "react";

export function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const precisePointer = window.matchMedia("(min-width: 861px) and (hover: hover) and (pointer: fine)");

    let rafId: number | undefined;
    let isTracking = false;
    let targetX = window.innerWidth * 0.7;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (rafId === undefined) rafId = requestAnimationFrame(animateGlow);
    };

    const animateGlow = () => {
      // Smooth interpolation (lerp) for silky mouse follow
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      container.style.setProperty("--mouse-x", `${currentX.toFixed(1)}px`);
      container.style.setProperty("--mouse-y", `${currentY.toFixed(1)}px`);

      const distance = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      rafId = distance > 0.5 ? requestAnimationFrame(animateGlow) : undefined;
    };

    const stopTracking = () => {
      if (!isTracking) return;
      window.removeEventListener("pointermove", handlePointerMove);
      isTracking = false;
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      rafId = undefined;
    };

    const syncTracking = () => {
      if (reducedMotion.matches || !precisePointer.matches) {
        stopTracking();
      } else if (!isTracking) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        isTracking = true;
      }
    };

    reducedMotion.addEventListener("change", syncTracking);
    precisePointer.addEventListener("change", syncTracking);
    syncTracking();

    return () => {
      stopTracking();
      reducedMotion.removeEventListener("change", syncTracking);
      precisePointer.removeEventListener("change", syncTracking);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="dynamic-bg"
      aria-hidden="true"
    >
      {/* Dynamic Animated Aurora Orbs */}
      <div className="aurora-orb aurora-orb--indigo" />
      <div className="aurora-orb aurora-orb--rose" />
      <div className="aurora-orb aurora-orb--cyan" />
      <div className="aurora-orb aurora-orb--violet" />

      {/* Interactive Cursor Spotlight Glow */}
      <div className="aurora-cursor-glow" />

      {/* Precision Craft Crosshairs & Geometric Floating Points */}
      <div className="bg-floating-accent bg-floating-accent--1">+</div>
      <div className="bg-floating-accent bg-floating-accent--2">+</div>
      <div className="bg-floating-accent bg-floating-accent--3">+</div>
      <div className="bg-floating-accent bg-floating-accent--4">+</div>
      <div className="bg-floating-accent bg-floating-accent--5">×</div>

      {/* Subtle Dot Matrix & Tech Scanlines Overlay */}
      <div className="dynamic-bg-grid" />
    </div>
  );
}

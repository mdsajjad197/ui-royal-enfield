import React, { useEffect } from 'react';

export default function SheryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeShery = () => {
      const Shery = (window as any).Shery;
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!Shery || !gsap || !ScrollTrigger) {
        return false;
      }

      try {
        // Register ScrollTrigger with GSAP if available
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        // Initialize Magnet Effect for elements with .magnet class
        Shery.makeMagnet(".magnet", {
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });
        
        return true;
      } catch (error) {
        console.warn("Shery.js initialization failed:", error);
        return false;
      }
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (initializeShery() || attempts > 20) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <>{children}</>;
}



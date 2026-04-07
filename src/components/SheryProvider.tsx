import React, { useEffect } from 'react';

export default function SheryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeShery = () => {
      const Shery = (window as any).Shery;
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      const THREE = (window as any).THREE;
      
      if (!Shery || !gsap || !ScrollTrigger || !THREE || typeof Shery.makeMagnet !== 'function') {
        return false;
      }

      try {
        console.log("SheryProvider: Initializing mouseFollower and makeMagnet");
        // Register ScrollTrigger with GSAP if available
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        // Initialize Mouse Follower
        if (typeof Shery.mouseFollower === 'function') {
          Shery.mouseFollower({
            skew: true,
            debug: false,
          });
        }

        // Initialize Magnet Effect for elements with .magnet class
        if (typeof Shery.makeMagnet === 'function') {
          Shery.makeMagnet(".magnet", {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });
        }
        
        console.log("SheryProvider: Initialization complete");
        return true;
      } catch (error) {
        console.warn("Shery.js initialization failed in SheryProvider:", error);
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



import { useEffect, useRef } from 'react';
// @ts-ignore
const Shery = (window as any).Shery;
import MagnetButton from './MagnetButton';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.querySelector(".images");
    const images = container?.querySelectorAll("img");
    
    const initializeShery = () => {
      const Shery = (window as any).Shery;
      const THREE = (window as any).THREE;
      if (!Shery || !THREE) return false;

      try {
        // Style 6 with gooey effect
        Shery.imageEffect(".images", {
          style: 6,
          debug: true,
          gooey: true,
          config: {
            "noiseDetail": { "value": 7.44, "range": [0, 100] },
            "distortionAmount": { "value": 2.98, "range": [0, 10] },
            "scale": { "value": 36.36, "range": [0, 100] },
            "speed": { "value": 0.79, "range": [0, 1] },
            "gooey": { "value": true },
            "infiniteGooey": { "value": true },
            "growSize": { "value": 4, "range": [1, 15] },
            "durationOut": { "value": 1, "range": [0.1, 5] },
            "durationIn": { "value": 1.5, "range": [0.1, 5] },
            "displaceAmount": { "value": 0.5 },
            "masker": { "value": true },
            "maskVal": { "value": 1.2, "range": [1, 5] },
            "scrollType": { "value": 0 },
            "geoVertex": { "range": [1, 64], "value": 1 },
            "noEffectGooey": { "value": true },
            "onMouse": { "value": 1 },
            "noise_speed": { "value": 0.2, "range": [0, 10] },
            "metaball": { "value": 0.2, "range": [0, 2] },
            "discard_threshold": { "value": 0.5, "range": [0, 1] },
            "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
            "shapes": { "value": ["circle", "ellipse"] }
          },
        });
        return true;
      } catch (error) {
        console.error("Shery.imageEffect error:", error);
        if (images) {
          images.forEach(img => (img as HTMLElement).style.opacity = "1");
        }
        return false;
      }
    };



    const checkImagesLoaded = () => {
      if (!images || images.length === 0) return false;
      return Array.from(images).every(img => img.complete);
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if ((checkImagesLoaded() && initializeShery()) || attempts > 20) {
        clearInterval(interval);
        if (attempts > 20 && images) {
          images.forEach(img => (img as HTMLElement).style.opacity = "1");
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Gooey Image Background */}
      <div className="images hero-image-container absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=2070&auto=format&fit=crop" 
          alt="Royal Enfield Classic Front" 
          className="w-full h-full object-cover opacity-100"
          referrerPolicy="no-referrer"
          style={{ opacity: 1 }}
        />
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
          alt="Royal Enfield Himalayan Gooey" 
          className="w-full h-full object-cover opacity-100"
          referrerPolicy="no-referrer"
          style={{ opacity: 1 }}
        />
      </div>



      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl md:text-9xl mb-6 leading-none uppercase">
            Pure <br />
            <span className="text-brand-red">Motorcycling</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light max-w-xl">
            Experience the legendary ride of Royal Enfield. Built for the long road, crafted for the soul.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <MagnetButton variant="primary" className="flex items-center gap-2">
              Book a Test Ride <ChevronRight size={20} />
            </MagnetButton>
            <MagnetButton variant="outline">
              Explore Now
            </MagnetButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest font-display">Scroll to explore</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-brand-red"
          />
        </div>
      </div>
    </section>
  );
}

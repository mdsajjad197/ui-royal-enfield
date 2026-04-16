import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import MagnetButton from './MagnetButton';

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Shery = (window as any).Shery;
    if (!Shery) return;

    try {
      Shery.imageEffect(".about-image", {
        style: 3, // Subtle movement
        debug: false,
        config: {
          "uFrequencyX": { "value": 12, "range": [0, 100] },
          "uFrequencyY": { "value": 12, "range": [0, 100] },
          "uFrequencyZ": { "value": 10, "range": [0, 100] },
          "uTime": { "value": 0 },
          "uAmplitude": { "value": 0.1, "range": [0, 5] },
          "uSpeed": { "value": 0.5, "range": [0, 10] },
        },
      });
    } catch (e) {
      console.error("Shery error in AboutSection:", e);
    }
  }, []);

  return (
    <section className="py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-red font-display uppercase tracking-[0.3em] text-sm mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl uppercase mb-12 leading-none"
          >
            Pure <br />
            <span className="text-white/20">Motorcycling</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Since 1901, Royal Enfield has been crafting motorcycles that are as much about the journey as they are about the destination. We believe in the power of the open road and the soul of the machine.
          </motion.p>
        </div>

        {/* Scrolling Reveal Image */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden group">
          <motion.div
            initial={{ y: "30%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="about-image w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070&auto=format&fit=crop" 
              alt="Royal Enfield Heritage Bike" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
          </motion.div>
          
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-3xl uppercase mb-2">The Legend Lives</h3>
              <p className="text-gray-400 text-sm max-w-xs">Built for the long road, crafted for the soul.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagnetButton variant="outline">
                Read Our Story
              </MagnetButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


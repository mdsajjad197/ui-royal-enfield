import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=800&auto=format&fit=crop",
    title: "Classic 350"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    title: "Himalayan"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop",
    title: "Interceptor"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop",
    title: "Continental GT"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1728415297666-1690d803c3ca?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Super Meteor"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    title: "Shotgun 650"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop",
    title: "Scram 411"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=800&auto=format&fit=crop",
    title: "Hunter 350"
  }
];

export default function CircularGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smoothRotate = useSpring(rotate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="h-[200vh] bg-brand-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <motion.h2 
            style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]) }}
            className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter text-white/10"
          >
            The Collection
          </motion.h2>
        </div>

        <motion.div 
          style={{ rotateY: smoothRotate }}
          className="relative w-72 h-96 preserve-3d"
        >
          {galleryImages.map((image, index) => {
            const angle = (index / galleryImages.length) * 360;
            return (
              <div
                key={image.id}
                className="absolute inset-0 preserve-3d"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(400px)`,
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 group cursor-pointer bg-zinc-900">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-display uppercase tracking-widest text-sm">{image.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1500px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}

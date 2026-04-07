import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagnetButton from './MagnetButton';

interface Bike {
  id: string;
  name: string;
  tagline: string;
  image: string;
  color: string;
}

const bikes: Bike[] = [
  {
    id: 'classic-350',
    name: 'Classic 350',
    tagline: 'Timeless Classic',
    image: 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-zinc-900',
  },
  {
    id: 'himalayan',
    name: 'Himalayan 450',
    tagline: 'Built for All Roads',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-stone-900',
  },
  {
    id: 'interceptor',
    name: 'Interceptor 650',
    tagline: 'The Modern Classic',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-neutral-900',
  }
];

interface BikeItemProps {
  bike: Bike;
  index: number;
}

const BikeItem: React.FC<BikeItemProps> = ({ bike, index }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div 
      ref={targetRef}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
    >
      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group"
      >
        <motion.img 
          src={bike.image} 
          alt={bike.name} 
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <span className="text-brand-red font-display uppercase tracking-widest text-sm mb-4 block">
          {bike.tagline}
        </span>
        <h2 className="text-5xl md:text-7xl mb-6 uppercase">
          {bike.name}
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
          The {bike.name} is more than just a motorcycle. It's a statement of freedom, 
          a companion for the long road, and a piece of history that lives on in every mile.
        </p>
        <div className="flex gap-4">
          <MagnetButton variant="outline">
            Configurator
          </MagnetButton>
          <button className="text-white font-display uppercase tracking-widest text-sm border-b border-brand-red pb-1 hover:text-brand-red transition-colors">
            View Specs
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function Bikes() {
  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-32">
          {bikes.map((bike, index) => (
            <BikeItem key={bike.id} bike={bike} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

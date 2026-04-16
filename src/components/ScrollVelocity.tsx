import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from "motion/react";

/**
 * Helper to wrap a value within a range.
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface VelocityTextProps {
  children: string;
  baseVelocity: number;
}

function VelocityText({ children, baseVelocity = 100 }: VelocityTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic number to keep the text moving smoothly.
   * It's adjusted based on the velocity of the scroll.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what causes the velocity boost.
     * If the user scrolls, the text moves faster.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be enough to fill the screen.
   */
  return (
    <div className="parallax flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div className="scroller flex whitespace-nowrap flex-nowrap uppercase text-7xl md:text-9xl font-display font-black tracking-tighter" style={{ x }}>
        <span className="mr-12 text-white/5 outline-text">{children} </span>
        <span className="mr-12 text-white/5 outline-text">{children} </span>
        <span className="mr-12 text-white/5 outline-text">{children} </span>
        <span className="mr-12 text-white/5 outline-text">{children} </span>
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity() {
  return (
    <section className="py-20 bg-brand-black overflow-hidden border-y border-white/5">
      <VelocityText baseVelocity={-5}>Royal Enfield • Pure Motorcycling • Since 1901 •</VelocityText>
      <VelocityText baseVelocity={5}>Made Like A Gun • Goes Like A Bullet •</VelocityText>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
          transition: -webkit-text-stroke 0.3s ease;
        }
        .parallax:hover .outline-text {
          -webkit-text-stroke: 1px rgba(218, 41, 28, 0.3);
        }
      `}</style>
    </section>
  );
}

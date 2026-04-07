import { motion } from 'motion/react';
import { Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex items-center justify-between mix-blend-difference"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-display font-black text-xl">RE</span>
        </div>
        <span className="font-display font-bold uppercase tracking-[0.3em] text-white hidden md:block">
          Royal Enfield
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-12">
        {['Motorcycles', 'Rides', 'Apparel', 'Accessories', 'Locate Us'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="magnet text-xs uppercase tracking-widest font-display font-medium text-white/80 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="magnet text-white hover:text-brand-red transition-colors">
          <Search size={20} />
        </button>
        <button className="magnet text-white hover:text-brand-red transition-colors">
          <User size={20} />
        </button>
        <button className="magnet text-white hover:text-brand-red transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
  );
}

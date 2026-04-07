import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-display font-black text-sm">RE</span>
              </div>
              <span className="font-display font-bold uppercase tracking-[0.3em] text-white">
                Royal Enfield
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The oldest motorcycle brand in continuous production. 
              Pure motorcycling since 1901.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-display font-bold mb-8 text-white">Motorcycles</h4>
            <ul className="flex flex-col gap-4">
              {['Classic 350', 'Himalayan', 'Interceptor 650', 'Continental GT', 'Super Meteor 650'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-display font-bold mb-8 text-white">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'News', 'Careers', 'Sustainability', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-display font-bold mb-8 text-white">Follow Us</h4>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="magnet text-gray-500 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © 2026 Royal Enfield. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

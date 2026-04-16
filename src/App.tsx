/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import SheryProvider from './components/SheryProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollVelocity from './components/ScrollVelocity';
import Bikes from './components/Bikes';
import CircularGallery from './components/CircularGallery';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <SheryProvider>
      <SmoothScroll>
        <div id="main" className="relative">
          <Navbar />
          <Hero />
          <ScrollVelocity />
          <Bikes />
          <CircularGallery />
          <AboutSection />
          <Footer />
        </div>
      </SmoothScroll>
    </SheryProvider>
  );
}


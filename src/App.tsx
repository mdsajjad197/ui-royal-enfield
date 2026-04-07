/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import SheryProvider from './components/SheryProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bikes from './components/Bikes';
import Footer from './components/Footer';

export default function App() {
  return (
    <SheryProvider>
      <SmoothScroll>
        <div id="main" className="relative">
          <Navbar />
          <Hero />
          <Bikes />
          <Footer />
        </div>
      </SmoothScroll>
    </SheryProvider>
  );
}


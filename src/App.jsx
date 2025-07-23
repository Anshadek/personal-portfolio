import React from 'react';
import useVendorScripts from './hooks/useVendorScripts';
import './App.css';

import About from './components/user/About';
import Hero from './components/user/Hero';
import Stats from './components/user/Stats';
import Skills from './components/user/Skills';
import Resume from './components/user/Resume';
import Portfolio from './components/user/Portfolio';
import Services from './components/user/Services';
import Testimonials from './components/user/Testimonials';
import Contact from './components/user/Contact';
import Footer from './components/user/Footer';
import Sidebar from './components/user/Sidebar';

function App() {
  useVendorScripts();
  return (
    <>
    <Sidebar />
    <main className="main">
      <Hero />
      <About />
      {/* <Stats /> */}
      <Skills />
      <Resume />
      <Portfolio />
      {/* <Services />
      <Testimonials /> */}
      <Contact />
    </main>
     <Footer />
    </>
  );
}

export default App;

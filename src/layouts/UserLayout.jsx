import React from 'react';
import useVendorScripts from '../hooks/useVendorScripts';

import Sidebar from '../components/user/Sidebar';
import Footer from '../components/user/Footer';

import Hero from '../components/user/Hero';
import About from '../components/user/About';
import Skills from '../components/user/Skills';
import Resume from '../components/user/Resume';
import Portfolio from '../components/user/Portfolio';
import Contact from '../components/user/Contact';

const UserLayout = () => {
  useVendorScripts();

  return (
    <>
      <Sidebar />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;

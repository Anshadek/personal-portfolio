import React, { useState, useEffect } from "react";
import useVendorScripts from "../hooks/useVendorScripts";

import Sidebar from "../components/user/Sidebar";
import Footer from "../components/user/Footer";

import Hero from "../components/user/Hero";
import About from "../components/user/About";
import Skills from "../components/user/Skills";
import Resume from "../components/user/Resume";
import Portfolio from "../components/user/Portfolio";
import Contact from "../components/user/Contact";
import UserExtras from "../components/user/UserExtras";

import { getAbout } from "../api/user/aboutApi"; 

const UserLayout = () => {
  useVendorScripts();

  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout().then((res) => {
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setAbout(data);
    });
  }, []);

  if (!about) return <p>Loading...</p>; // optional loader

  return (
    <>
      <Sidebar />
      <main className="main">
        <Hero about={about} />
        <About about={about} />
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

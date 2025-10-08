import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useVendorScripts from "../hooks/useVendorScripts";

import Sidebar from "../components/user/Sidebar";
import Footer from "../components/user/Footer";

import Hero from "../components/user/Hero";
import About from "../components/user/About";
import Skills from "../components/user/Skills";
import Resume from "../components/user/Resume";
import Portfolio from "../components/user/Portfolio";
import Contact from "../components/user/Contact";

import { getAbout } from "../api/user/aboutApi";
import { getPortfolio } from "../api/user/portfolioApi";

const UserLayout = () => {
  useVendorScripts();

  const [about, setAbout] = useState(null);
  const [portfolioData, setPortfolioData] = useState({
    categories: [],
    items: [],
  });
  const location = useLocation();

  useEffect(() => {
    // Fetch About data
    getAbout()
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setAbout(data);
      })
      .catch((err) => console.error("Error fetching about:", err));

    // Fetch Portfolio data
    getPortfolio()
      .then((res) => {
        setPortfolioData({
          categories: res.data.categories || [],
          items: res.data.items || [],
        });
      })
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  if (!about) return <p>Loading...</p>;

  const isPortfolioDetails = location.pathname.startsWith("/portfolio-details");

  return (
    <>
      <Sidebar />
      <main className="main">
        {isPortfolioDetails ? (
          <Outlet context={{ portfolioData }} />
        ) : (
          <>
            <Hero about={about} />
            <About about={about} />
            <Skills />
            <Resume />
            <Portfolio portfolioData={portfolioData} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;

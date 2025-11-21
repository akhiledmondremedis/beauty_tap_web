import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Features from './sections/Features';
import Benifits from './sections/Benifits';
import WorkProcess from './sections/WorkProcess';
import AppScreens from './sections/AppScreens ';
import CTASection from './sections/CTASection';
import PricingSection from './sections/PricingSection';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import Support from './sections/Support';
import Footer from './sections/Footer';
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  return (
    <>
      <main>
        <Header />
        <Hero />
        <Features />
        <Benifits />
        <WorkProcess />
        <AppScreens />
        <CTASection />
        <PricingSection/>
        <Testimonials />
        <Clients />
        <Support />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/support" element={<Support />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App

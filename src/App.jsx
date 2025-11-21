import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
import Support from './sections/Support';
import Footer from './sections/Footer';
import SignIn from './pages/Signin';
import { useEffect } from "react";
import SignUp from './pages/Signup';
import PrivacyPolicy from './pages/Privacypolcy.jsx';
import TermsAndConditions from './pages/Termsconditions.jsx';




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

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Benifits />
                <WorkProcess />
                <AppScreens />
                <CTASection />
                <PricingSection />
                <Testimonials />
                <Support />
              </>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          {/* <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/support" element={<Support />} /> */}
        </Routes>

        <Footer />

      </main>
    </>
  )
}

export default App

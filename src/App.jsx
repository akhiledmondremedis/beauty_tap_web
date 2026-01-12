import { useState, useEffect } from 'react';
import './App.css';
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
import SignUp from './pages/Signup';
import PrivacyPolicy from './pages/Privacypolcy.jsx';
import TermsAndConditions from './pages/Termsconditions.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import MainLayout from './components/MainLayout';
import PaymentStatus from './pages/PaymentStatus'; // Add this import
import AffiliateRegister from './pages/affiliate-partner/register.jsx';
import AffiliatePartnerLogin from './pages/affiliate-partner/login.jsx';
import AffiliateDashboard from './pages/affiliate-partner/dashboard.jsx';
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import useAffiliateAuthRehydrate from "./hooks/useAffiliateAuthRehydrate"
import EarningsPage from './pages/affiliate-partner/earnings.jsx';
import { initFacebookPixel, trackPageView } from "./utils/pixel";
import SupportPage from './pages/Support.jsx';

function App() {
  const [count, setCount] = useState(0)
  useAffiliateAuthRehydrate()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    initFacebookPixel();
    trackPageView();
  }, []);


  return (
    <>
      <main>
        <Routes>
          {/* <Route element={<MainLayout />}>
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

          </Route> */}
          <Route path="/payment/status" element={<PaymentStatus />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/affiliate-partner/register" element={<AffiliateRegister />} />
          <Route path="/affiliate-partner/login" element={<AffiliatePartnerLogin />} />
          <Route path="/support" element={< SupportPage />} />
          <Route
            path="/affiliate-partner/dashboard"
            element={
              <ProtectedRoute>
                <AffiliateDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/affiliate-partner/earnings" element={<EarningsPage />} />

          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
    </>
  )
}

export default App

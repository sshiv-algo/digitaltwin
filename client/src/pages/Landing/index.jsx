import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Technologies from './Technologies';
import Features from './Features';
import DashboardPreview from './DashboardPreview';
import Simulation from './Simulation';
import AIAssistantPreview from './AIAssistantPreview';
import AnalyticsPreview from './AnalyticsPreview';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Technologies />
      <Features />
      <DashboardPreview />
      <Simulation />
      <AIAssistantPreview />
      <AnalyticsPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;

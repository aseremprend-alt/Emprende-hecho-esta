
import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Story from './components/Story';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Steps from './components/Steps';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import AboutCreator from './components/AboutCreator';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased">
      <Hero />
      <Problem />
      <Story />
      <Solution />
      <Benefits />
      <Features />
      <Steps />
      <Transformation />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <Urgency />
      <AboutCreator />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;

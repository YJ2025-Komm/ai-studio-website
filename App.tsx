
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Agitation from './components/Agitation';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Value from './components/Value';
import WhoItIsFor from './components/WhoItIsFor';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Features from './components/Features';
import BlogFeed from './components/BlogFeed';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'features':
        return <Features />;
      case 'pricing':
        return <Pricing />;
      default:
        return (
          <>
            <Hero />
            <Statistics />
            <Agitation />
            <Solution />
            <HowItWorks />
            <Value />
            <WhoItIsFor />
            <CTA />
            <BlogFeed />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

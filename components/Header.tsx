
import React, { useState } from 'react';
import Button from './UI/Button';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourceItems = [
    { label: 'Blogs', path: 'https://blog.georankers.co/', external: true },
    { label: 'GEO Guide', path: 'geo-guide', external: false },
    { label: 'FAQ', path: 'faq', external: false },
    { label: 'Help Docs', path: 'docs', external: false },
  ];

  const handleItemClick = (item: { label: string; path: string; external: boolean }) => {
    if (item.external) {
      window.open(item.path, '_blank');
    } else {
      onNavigate(item.path);
    }
    setIsResourcesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            G
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">GeoRankers</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentPath === 'home' ? 'text-blue-600' : 'hover:text-slate-900'} transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className={`${currentPath === 'features' ? 'text-blue-600' : 'hover:text-slate-900'} transition-colors`}
          >
            Features
          </button>
          <button 
            onClick={() => onNavigate('pricing')}
            className={`${currentPath === 'pricing' ? 'text-blue-600' : 'hover:text-slate-900'} transition-colors`}
          >
            Pricing
          </button>
          
          {/* Resources Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors py-2">
              Resources
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute left-0 mt-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl transition-all duration-200 origin-top-left ${isResourcesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
              <div className="p-2 space-y-1">
                {resourceItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item)}
                    className="w-full text-left px-4 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors font-bold text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-3">
          <a href="/login" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-slate-900 px-4">
            Login
          </a>
          <div className="hidden lg:block">
            <Button variant="secondary" size="sm">Book a Demo</Button>
          </div>
          <Button variant="primary" size="sm">Try for Free</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

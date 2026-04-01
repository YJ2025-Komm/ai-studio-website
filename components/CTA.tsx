
import React from 'react';
import Button from './UI/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-dark rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">Do Not Leave AI Visibility to Chance</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              AI search is reshaping how buyers shortlist vendors. The brands that measure and adapt early will shape perception. The rest will react too late.
            </p>
            <p className="text-lg font-semibold text-white mb-12">See how your brand shows up inside AI answers.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                variant="primary" 
                size="sm" 
                className="bg-white !text-blue-700 hover:bg-blue-50 w-full sm:w-auto px-12"
              >
                Try for Free
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10 w-full sm:w-auto px-12"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

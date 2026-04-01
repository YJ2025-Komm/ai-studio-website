
import React from 'react';
import Button from './UI/Button';

const WhoItIsFor: React.FC = () => {
  const personas = [
    {
      role: 'Founders',
      desc: 'Understand whether AI includes you in the category narrative and protects your brand from the start.'
    },
    {
      role: 'Marketing Teams',
      desc: 'Align content strategy with AI visibility gaps to drive high-intent discovery and pipeline.'
    },
    {
      role: 'GTM Leaders',
      desc: 'Protect pipeline by monitoring emerging discovery channels shaping buyer shortlists.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Built for Teams Responsible for Market Position</h2>
          <p className="text-lg text-slate-600 italic">If AI is influencing buyer perception, visibility becomes a leadership metric.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {personas.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:border-blue-200 transition-colors text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 mb-6 flex items-center justify-center text-slate-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{p.role}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50/50 rounded-[3rem] p-10 border border-blue-100 text-center">
          <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Ready to lead your category in the AI era?</h4>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">Join the 150+ GTM teams using GeoRankers to secure their position in automated discovery.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="sm" className="w-full sm:w-auto">Try for Free</Button>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">Book a Demo</Button>
          </div>
          <p className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Setup takes 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;

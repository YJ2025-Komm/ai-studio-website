
import React from 'react';
import Button from './UI/Button';

const HowItWorks: React.FC = () => {
  const features = [
    'Analyze brand mention frequency',
    'Map competitive recommendation patterns',
    'Track citation sources',
    'Identify high intent visibility gaps'
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Measure. Understand. Act.</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              GeoRankers enables you to move from speculation to structured action. Every insight is tied to observed AI answer patterns.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold italic mb-8">
              "You move from speculation to structured action."
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="sm" className="w-full sm:w-auto">Try for Free</Button>
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">Book a Demo</Button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl relative">
            {/* Dashboard Mockup */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                <div>
                  <div className="w-32 h-2.5 bg-slate-700 rounded mb-1.5"></div>
                  <div className="w-20 h-2 bg-slate-600 rounded"></div>
                </div>
              </div>
              <div className="w-24 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-700/50 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Recommendation Rank</p>
                <p className="text-2xl font-bold text-white">#2 Average</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Category Authority</p>
                <p className="text-2xl font-bold text-blue-400">94/100</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-bold uppercase">Competitive Mentions Chart</p>
              <div className="flex items-end gap-2 h-32">
                <div className="flex-1 gradient-primary rounded-t-md h-[40%]"></div>
                <div className="flex-1 bg-slate-600 rounded-t-md h-[70%]"></div>
                <div className="flex-1 gradient-primary rounded-t-md h-[95%] shadow-lg shadow-blue-500/20"></div>
                <div className="flex-1 bg-slate-600 rounded-t-md h-[60%]"></div>
                <div className="flex-1 bg-slate-600 rounded-t-md h-[85%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-bold pt-2">
                <span>GPT-4o</span>
                <span>Claude 3.5</span>
                <span>GeoRankers</span>
                <span>Gemini Pro</span>
                <span>Perplexity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

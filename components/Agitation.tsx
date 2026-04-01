
import React from 'react';
import Button from './UI/Button';

const Agitation: React.FC = () => {
  const points = [
    {
      title: "Invisible in High Intent Queries",
      desc: "You may rank well on Google, yet never appear when buyers ask AI for categorical recommendations."
    },
    {
      title: "Competitor Domain Dominance",
      desc: "Rivals are strengthening their citation profiles while you remain focused on legacy SEO metrics."
    },
    {
      title: "Positioning Misalignment",
      desc: "AI models often misinterpret brand value if your positioning isn't consistent across discovery signals."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-blue-800 to-violet-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
              The Visibility Gap
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
              What You Cannot See <br />
              <span className="text-blue-400">Is Already Costing You.</span>
            </h2>
            
            <div className="space-y-12 max-w-lg mb-12">
              {points.map((p, i) => (
                <div key={i} className="group border-l-2 border-white/10 pl-8 hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-extrabold mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-medium">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="sm" className="w-full sm:w-auto">Try for Free</Button>
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">Book a Demo</Button>
            </div>
          </div>

          <div className="relative">
             <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Prompt</p>
                      <p className="font-bold text-blue-100 italic">"What's the safest B2B CRM for fintech?"</p>
                    </div>
                    <div className="px-3 py-1 bg-red-500/20 text-red-400 text-[10px] font-black rounded-full border border-red-500/20">
                      MISSED OPPORTUNITY
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Competitor A</p>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-3xl font-black text-white">88%</span>
                        <span className="text-green-400 text-[10px] font-bold pb-1">MENTION RATE</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[88%] bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 ring-1 ring-red-500/30">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Your Brand</p>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-3xl font-black text-white/40">12%</span>
                        <span className="text-red-400 text-[10px] font-bold pb-1">MENTION RATE</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[12%] bg-red-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-bold text-blue-100 leading-relaxed">
                      AI systems prioritize "Competitor A" because of specific authority clusters you haven't claimed yet.
                    </p>
                  </div>
                </div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute -top-10 -right-10 w-32 h-32 gradient-primary rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl animate-bounce">
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">Opportunity Loss</p>
                <p className="text-2xl font-black text-white">-$42k</p>
                <p className="text-[8px] font-bold text-white/80">Monthly Pipeline</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;

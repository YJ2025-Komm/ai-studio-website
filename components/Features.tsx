
import React from 'react';
import Button from './UI/Button';

const CircularDiagram: React.FC = () => {
  const segments = [
    { title: "Query Modeling", tooltip: "Simulating high-intent buyer prompts across categories." },
    { title: "Multi Model Capture", tooltip: "Capturing responses from ChatGPT, Gemini, and more." },
    { title: "Signal Interpretation", tooltip: "Turning raw mentions into structured trust signals." },
    { title: "Prescriptive Action", tooltip: "Prioritizing fixes based on model behavior." },
    { title: "Visibility Improvement", tooltip: "Executing changes to secure AI recommendations." }
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
      {/* Outer Glow / Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/5 to-violet-500/5 blur-3xl"></div>
      
      {/* The Diagram */}
      <div className="relative w-[90%] h-[90%] rounded-full border border-slate-100 bg-white shadow-2xl flex items-center justify-center overflow-hidden">
        {/* SVG for Segments */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
          {segments.map((_, i) => {
            const startAngle = (i * 360) / 5;
            const endAngle = ((i + 1) * 360) / 5;
            const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);
            
            return (
              <path
                key={i}
                d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                className="fill-white stroke-slate-50 stroke-[0.5] transition-all duration-300 hover:fill-blue-50 cursor-help group"
              />
            );
          })}
        </svg>

        {/* Labels Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {segments.map((s, i) => {
            const angle = (i * 72) + 36 - 90; // Center of segment
            const radius = 35; // Position of text
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
            return (
              <div 
                key={i}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-center w-24"
              >
                <span className="text-[10px] font-black text-slate-900 leading-tight uppercase tracking-tight block">
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Clockwise Arrows Indicator */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad1)" strokeWidth="0.5" strokeDasharray="5,10" className="animate-[spin_60s_linear_infinite]" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Circle */}
        <div className="relative z-20 w-44 h-44 rounded-full gradient-primary shadow-2xl flex items-center justify-center p-6 text-center border-4 border-white">
          <span className="text-white font-black text-lg leading-tight uppercase tracking-widest">
            AI Visibility Intelligence
          </span>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1 — HEADER */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8">
            The Product System
          </div>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 leading-tight mb-8">
            The AI Visibility <br />Intelligence System
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            AI assistants are shaping product discovery. GeoRankers helps you understand how they evaluate, select, and recommend your brand.
          </p>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl max-w-xl mx-auto mb-12">
            <p className="text-slate-800 font-bold leading-relaxed">
              This is not just tracking. It is a structured intelligence layer built for the AI search era.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="sm" className="px-12 w-full sm:w-auto">Try for Free</Button>
            <Button variant="secondary" size="sm" className="px-12 w-full sm:w-auto">Book a Demo</Button>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/[0.03] rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* SECTION 2 — REFRAME THE CATEGORY */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
                AI Visibility Is Not a Dashboard Problem. <span className="text-blue-600">It Is a Systems Problem.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most tools show mentions. But AI recommendations are influenced by a complex web of signals that require interpretation to become actionable.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Influencing Factors:</p>
                <div className="grid grid-cols-2 gap-4">
                  {['Source trust', 'Narrative consistency', 'Citation overlap', 'Competitive saturation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full gradient-primary"></div>
                      <span className="font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Without interpretation and execution guidance, visibility becomes another metric you cannot act on. 
              </p>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-violet-700 to-violet-600 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Capture, Interpret, Prescribe.</h3>
                <p className="text-blue-100 leading-relaxed font-medium mb-8">
                  GeoRankers builds the full system required to turn raw AI model behavior into strategic category advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="sm" className="bg-white !text-blue-700 hover:bg-blue-50">Try for Free</Button>
                  <Button variant="secondary" size="sm">Book a Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE GEORANKERS INTELLIGENCE STACK */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">THE GEORANKERS <span className="text-gradient">INTELLIGENCE STACK</span></h2>
            <p className="text-xl text-slate-500 font-medium">Three connected layers. One unified visibility engine.</p>
          </div>

          {/* LAYER 1 — VISIBILITY DATA LAYER */}
          <div className="mb-12 p-10 lg:p-16 rounded-[4rem] bg-blue-50/40 border border-blue-100/50 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
              <div className="flex items-center gap-4">
                <span className="px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Layer 1</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Visibility Data Layer</h3>
              </div>
              <p className="text-slate-500 font-bold lg:ml-auto">See Exactly Where AI Mentions Your Brand</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blue-100/50 hover-lift group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:gradient-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">AI Visibility Scanner</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">We execute structured, high intent prompts across major AI platforms and capture full responses, brand mentions, ranking position, and citations.</p>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blue-100/50 hover-lift group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:gradient-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">Citation Graph Engine</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">We map citation domains, authority overlap, and source concentration patterns that influence model decisions. You see which sources strengthen or weaken your visibility.</p>
              </div>
            </div>
          </div>

          {/* INTER-LAYER BANNER 1 */}
          <div className="mb-12 bg-slate-900 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
             <div>
                <h4 className="text-xl font-black text-white mb-2">Data is only half the battle.</h4>
                <p className="text-slate-400 font-medium">Discover how Layer 2 translates raw data into structured category intelligence.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <Button variant="primary" size="sm">Try for Free</Button>
               <Button variant="secondary" size="sm" className="border-white/20">Book a Demo</Button>
             </div>
          </div>

          {/* LAYER 2 — INTERPRETATION INTELLIGENCE */}
          <div className="mb-12 p-10 lg:p-16 rounded-[4rem] bg-violet-50/40 border border-violet-100/50 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
              <div className="flex items-center gap-4">
                <span className="px-5 py-1.5 rounded-full bg-violet-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-violet-500/20">Layer 2</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Interpretation Intelligence</h3>
              </div>
              <p className="text-slate-500 font-bold lg:ml-auto">Quantify AI Trust and Presence</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-violet-100/50 hover-lift">
                <h4 className="text-xl font-black text-slate-900 mb-4">GEO Score</h4>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">The GEO Score normalizes cross model visibility signals into a structured visibility and trust metric. Track how your AI standing evolves over time.</p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-violet-100/50 hover-lift">
                <h4 className="text-xl font-black text-slate-900 mb-4">Narrative Gap Detection</h4>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">AI models synthesize from multiple sources. If your positioning is inconsistent across web assets, your visibility weakens. We identify narrative drift.</p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-violet-100/50 hover-lift">
                <h4 className="text-xl font-black text-slate-900 mb-4">Competitive Mapping</h4>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">See how often competitors appear, where they dominate, and which citations strengthen their visibility. Turn AI competition into insight.</p>
              </div>
            </div>
          </div>

          {/* INTER-LAYER BANNER 2 */}
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[3rem] p-12 text-center shadow-xl">
             <h4 className="text-2xl font-black text-white mb-4">Turn Insight into Execution.</h4>
             <p className="text-blue-50 font-medium mb-8 max-w-2xl mx-auto">Layer 3 provides prescriptive actions to close visibility gaps and lead your category narrative.</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button variant="primary" size="sm" className="bg-white !text-blue-700 hover:bg-blue-50 w-full sm:w-auto px-12">Try for Free</Button>
               <Button variant="secondary" size="sm" className="bg-white/10 !border-white/40 !text-white w-full sm:w-auto px-12">Book a Demo</Button>
             </div>
          </div>

          {/* LAYER 3 — EXECUTION LAYER */}
          <div className="p-10 lg:p-16 rounded-[4rem] bg-indigo-50/40 border border-indigo-100/50 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
              <div className="flex items-center gap-4">
                <span className="px-5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-500/20">Layer 3</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Execution Layer</h3>
              </div>
              <p className="text-slate-500 font-bold lg:ml-auto">Know Exactly What to Improve</p>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-md border border-indigo-100/50 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h4 className="text-3xl font-black text-slate-900 mb-6">Prescriptive Action Engine</h4>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">GeoRankers translates visibility signals into prioritized, execution ready recommendations tied directly to model behavior. No generic SEO advice. Clear next steps.</p>
                <div className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 mb-10">
                  <div className="w-2 h-10 gradient-primary rounded-full"></div>
                  <p className="text-sm font-bold text-slate-800">Why it matters: Intelligence without action does not drive results.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="sm" className="px-12 w-full sm:w-auto">Try for Free</Button>
                  <Button variant="secondary" size="sm" className="px-12 w-full sm:w-auto">Book a Demo</Button>
                </div>
              </div>
              <div className="w-full lg:w-1/3 aspect-square relative flex items-center justify-center">
                 <div className="absolute inset-0 gradient-primary rounded-3xl rotate-6 opacity-10"></div>
                 <div className="relative w-full h-full gradient-primary rounded-3xl p-10 shadow-2xl flex items-center justify-center text-white">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCULAR DIAGRAM SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">How It All Connects</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Data Layer captures model behavior. Interpretation Layer explains it. Execution Layer prioritizes action.
            </p>
          </div>
          
          <div className="hidden md:block">
            <CircularDiagram />
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-slate-800 font-bold max-w-2xl mx-auto mb-10">
              Together, they form a visibility intelligence system designed for AI driven discovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="primary" size="sm" className="px-16 w-full sm:w-auto">Try for Free</Button>
              <Button variant="secondary" size="sm" className="px-16 w-full sm:w-auto">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (No black background) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-700 via-violet-700 to-violet-600 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Turn AI Visibility Into Strategic Advantage
              </h2>
              <div className="space-y-4 mb-12">
                <p className="text-xl text-blue-100 font-medium">See how AI models interpret your brand.</p>
                <p className="text-xl text-blue-100 font-medium opacity-80">Understand what influences that interpretation.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="primary" size="sm" className="bg-white !text-blue-700 hover:bg-blue-50 w-full sm:w-auto px-12">Try for Free</Button>
                <Button variant="secondary" size="sm" className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10 w-full sm:w-auto px-12">Book a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

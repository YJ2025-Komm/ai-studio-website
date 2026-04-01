
import React from 'react';
import Button from './UI/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              The New Era of Strategic Visibility
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-[800] text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Your Buyers Choose Vendors Inside <span className="text-gradient">AI Answers</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              ChatGPT, Gemini, and Perplexity now answer high-intent buying questions directly. They summarize categories and shortlist vendors before a single click happens.
            </p>
            
            <div className="p-6 bg-slate-50/80 backdrop-blur rounded-[2rem] border border-slate-100 mb-10 inline-block text-left lg:max-w-xl">
              <p className="text-lg font-bold text-slate-900 leading-snug">
                "If your brand is not mentioned in those answers, <span className="text-blue-600">you are not part of the decision.</span>"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="sm" className="w-full sm:w-auto">
                Try for Free
              </Button>
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
            
            <p className="mt-10 text-sm font-bold text-slate-400 uppercase tracking-widest">
              Trusted by 150+ high-growth B2B SaaS teams
            </p>
          </div>

          {/* Visual Side */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative z-10 animate-float">
              <div className="bg-slate-900 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">AI Search Simulation</div>
                  <div className="w-8"></div>
                </div>
                
                {/* Chat Content */}
                <div className="p-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="bg-white/5 rounded-[1.5rem] rounded-tl-none p-6 border border-white/5 max-w-[85%]">
                      <p className="text-white/80 font-medium leading-relaxed italic">
                        "What are the best Enterprise SEO tools for mid-market SaaS companies looking for AI features?"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="bg-white/10 rounded-[2rem] rounded-tr-none p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                      
                      <p className="text-white/90 leading-relaxed mb-6 font-medium">Based on 2024 category analysis and user intent signals, here are the top choices:</p>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center opacity-40">
                          <span className="text-white/30 font-bold">01</span>
                          <div className="flex-1 h-3 bg-white/10 rounded-full"></div>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl border border-blue-500/40 ring-1 ring-blue-500/20 relative">
                          <div className="flex items-center gap-4">
                            <span className="text-blue-400 font-black text-lg">02</span>
                            <div className="flex-1">
                              <p className="text-white font-extrabold text-lg mb-0.5">GeoRankers</p>
                              <p className="text-blue-200/60 text-xs">Recommended for specific AI-native visibility features.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-blue-500/40">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 items-center opacity-40">
                          <span className="text-white/30 font-bold">03</span>
                          <div className="flex-1 h-3 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl gradient-primary shrink-0 flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-blue-500/30">AI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-12 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 z-20 hover-lift hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-lg">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">AI Presence Rate</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">+42.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

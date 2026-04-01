
import React from 'react';

const Problem: React.FC = () => {
  const metrics = [
    { label: 'Rankings', value: 'Page 1', trend: 'Stable', color: 'text-blue-600', bg: 'bg-blue-50/50' },
    { label: 'Traffic', value: '120k', trend: 'Up 5%', color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
    { label: 'Conversions', value: '2.1%', trend: 'Down 0.2%', color: 'text-slate-600', bg: 'bg-slate-50' },
    { label: 'AI Visibility', value: '???', trend: 'Hidden', highlight: true }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">You Cannot See How AI Represents Your Brand</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most SaaS teams track rankings, traffic, and conversions. But AI search does not follow traditional rules. AI tools generate synthesized answers. They shortlist vendors. They influence decisions before a click happens.
          </p>
          <div className="mt-8 px-6 py-3 bg-red-50 border border-red-100 rounded-2xl inline-block text-red-600 font-bold text-sm uppercase tracking-wide">
            There is no clear dashboard showing how your brand appears inside AI answers.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border transition-all duration-300 ${
                m.highlight 
                ? 'bg-gradient-to-br from-blue-600 to-violet-600 border-transparent shadow-2xl scale-105 z-10' 
                : `${m.bg} border-slate-200 hover:border-blue-300`
              }`}
            >
              <p className={`text-xs font-bold mb-4 uppercase tracking-[0.2em] ${m.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                {m.label}
              </p>
              <p className={`text-4xl font-black mb-3 ${m.highlight ? 'text-white' : 'text-slate-900'}`}>
                {m.value}
              </p>
              <div className={`text-sm font-bold flex items-center gap-2 ${m.highlight ? 'text-white/80' : m.color}`}>
                {m.highlight && <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>}
                {m.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;


import React from 'react';
import Button from './UI/Button';

const Statistics: React.FC = () => {
  const stats = [
    {
      value: '60%',
      label: 'Zero-Click Search',
      description: 'Nearly 60% of searches end without a visit as users get instant summaries.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      value: '35%',
      label: 'Traffic Drop',
      description: 'The average organic traffic decline for SaaS due to new AI Overviews.',
      color: 'from-orange-400 to-red-500'
    },
    {
      value: '45%',
      label: 'Session Growth',
      description: 'Month-over-month increase in users relying on AI assistants for research.',
      color: 'from-emerald-400 to-teal-600'
    },
    {
      value: '5x',
      label: 'Higher Value',
      description: 'Visitors from AI discovery have 5x higher conversion intent than search.',
      color: 'from-fuchsia-500 to-violet-600'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              The AI Search Revolution <br />
              <span className="text-orange-500 underline decoration-orange-500/20 underline-offset-8">By the Numbers</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Traditional search is being displaced by AI discovery platforms. 
              The metrics of the web are fundamentally shifting.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group bg-blue-50/20 rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-blue-100/30 hover:bg-white hover:border-blue-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className={`text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="font-black text-slate-900 uppercase tracking-[0.2em] text-xs mb-4">{stat.label}</div>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engagement Banner */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">Are you tracking your AI Share of Voice?</h3>
            <p className="text-slate-400 font-medium">Don't let your category authority vanish in the zero-click era.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Button variant="primary" size="sm" className="w-full sm:w-auto">Try for Free</Button>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto border-white/20">Book a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

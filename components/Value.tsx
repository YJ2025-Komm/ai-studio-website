
import React from 'react';
import Button from './UI/Button';

const Value: React.FC = () => {
  const values = [
    { title: 'Strengthen Positioning', desc: 'Identify and correct areas where AI misrepresents your brand architecture.' },
    { title: 'Prioritize Content', desc: 'Align your authority strategy with specific AI visibility gaps.' },
    { title: 'Monitor Competitors', desc: 'Track how rivals are gaining dominance across key buying queries.' },
    { title: 'Align Messaging', desc: 'Ensure your market message is discovery-ready for automated shortlists.' }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Make Smarter Growth Decisions</h2>
          <p className="text-lg text-slate-600">This is strategic intelligence for leadership teams navigating AI search.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover-lift shadow-sm">
              <div className="w-2 h-12 gradient-primary rounded-full mb-6"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-8">
            <p className="text-slate-500 font-bold italic">"Intelligence is useless without a path to improvement."</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button variant="primary" size="sm" className="px-16 w-full sm:w-auto">Try for Free</Button>
              <Button variant="secondary" size="sm" className="px-16 w-full sm:w-auto">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;

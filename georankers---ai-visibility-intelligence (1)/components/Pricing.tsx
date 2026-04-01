
import React, { useState } from 'react';
import Button from './UI/Button';
import PricingFAQ from './PricingFAQ';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');

  const plans = [
    {
      name: "Launch",
      price: billingCycle === 'monthly' ? 49 : 41,
      billingInfo: billingCycle === 'monthly' ? "/ month" : "/ month, billed quarterly",
      description: "For early teams starting to measure AI visibility.",
      cta: "Start Launch Plan",
      features: [
        "3 Seed Prompts",
        "Up to 25 AI Prompts Tracked",
        "ChatGPT Tracking",
        "3 Competitors Tracked",
        "1 Seat",
        "1 Prompt Run every 48 hours"
      ],
      agent: "10 conversations per day ($0.01 extra)",
      history: "Last 2 Runs",
      support: "Email Support"
    },
    {
      name: "Grow",
      price: billingCycle === 'monthly' ? 159 : 129,
      billingInfo: billingCycle === 'monthly' ? "/ month" : "/ month, billed quarterly",
      description: "For growth teams optimizing AI category position.",
      cta: "Start Grow Plan",
      recommended: true,
      features: [
        "Up to 6 Seed Prompts",
        "Up to 50 AI Prompts Tracked",
        "ChatGPT, Gemini, AIO, Perplexity (Soon)",
        "5 Competitors Tracked",
        "3 Seats",
        "1 Prompt Run per day"
      ],
      agent: "20 conversations per day ($0.01 extra)",
      history: "Last 5 Runs",
      support: "Email & Slack",
      extras: ["Report Export Included"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      billingInfo: "",
      description: "For teams making AI visibility a strategic KPI.",
      cta: "Talk to Sales",
      features: [
        "Custom Prompt Volume",
        "Custom AI Model Tracking",
        "Custom Competitor Tracking",
        "Custom Seats",
        "Custom Daily Runs",
        "Extended Analytics History"
      ],
      agent: "Custom Volume",
      history: "Full History",
      support: "Priority + Dedicated Account Manager",
      extras: ["Report Export", "Dedicated GEO Specialist", "Custom Integrations"]
    }
  ];

  const comparisonRows = [
    { group: "Visibility Coverage", items: [
      { label: "Seed Prompts", values: ["3", "6", "Custom"] },
      { label: "Tracked AI Prompts", values: ["25", "50", "Unlimited"] },
      { label: "Daily Runs", values: ["0.5 (48h)", "1", "Custom"] }
    ]},
    { group: "AI Models", items: [
      { label: "ChatGPT", values: ["✓", "✓", "✓"] },
      { label: "Gemini / Perplexity", values: ["-", "✓", "✓"] },
      { label: "Custom Models", values: ["-", "-", "✓"] }
    ]},
    { group: "GEO Agent", items: [
      { label: "Daily Conversations", values: ["10", "20", "Unlimited"] },
      { label: "Base Fee", values: ["Included", "Included", "Included"] }
    ]},
    { group: "Reporting", items: [
      { label: "History Retention", values: ["2 Runs", "5 Runs", "Unlimited"] },
      { label: "PDF Export", values: ["-", "✓", "✓"] }
    ]},
    { group: "Support", items: [
      { label: "Email Support", values: ["✓", "✓", "✓"] },
      { label: "Slack Connect", values: ["-", "✓", "✓"] },
      { label: "Account Manager", values: ["-", "-", "✓"] }
    ]}
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
          Flexible Pricing for AI Visibility Intelligence
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Choose a plan based on how deeply you want to track, interpret, and improve your AI visibility.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-full mb-8">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-8 py-2 text-sm font-bold rounded-full transition-all duration-200 ${billingCycle === 'monthly' ? 'gradient-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('quarterly')}
            className={`px-8 py-2 text-sm font-bold rounded-full transition-all duration-200 ${billingCycle === 'quarterly' ? 'gradient-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Quarterly – Save up to 20%
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-10 rounded-[2.5rem] border bg-white transition-all duration-300 ${
                plan.recommended 
                  ? 'border-transparent shadow-2xl scale-[1.03] z-10 ring-2 ring-blue-500/10' 
                  : 'border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 gradient-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Recommended Plan
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-slate-900">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  </span>
                  <span className="text-slate-500 font-bold text-sm">{typeof plan.price === 'number' && plan.billingInfo}</span>
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-6 mb-10">
                <div className="space-y-3">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Core Features</p>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-700 font-medium">
                        <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-50 space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">GEO Agent</p>
                    <p className="text-sm font-bold text-slate-800">{plan.agent}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">History</p>
                    <p className="text-sm font-bold text-slate-800">{plan.history}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Support</p>
                    <p className="text-sm font-bold text-slate-800">{plan.support}</p>
                  </div>
                  {plan.extras?.map((e, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <p className="text-sm font-bold text-slate-800">{e}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Compare Plans</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-6 pr-4 text-sm font-black text-slate-400 uppercase tracking-widest">Plan Breakdown</th>
                  <th className="py-6 px-4 text-center text-xl font-black text-slate-900">Launch</th>
                  <th className="py-6 px-4 text-center text-xl font-black text-blue-600">Grow</th>
                  <th className="py-6 px-4 text-center text-xl font-black text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-slate-100/50">
                      <td colSpan={4} className="py-3 px-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
                        {group.group}
                      </td>
                    </tr>
                    {group.items.map((item, iIdx) => (
                      <tr key={iIdx} className="border-b border-slate-100 hover:bg-white transition-colors">
                        <td className="py-6 px-6 text-sm font-bold text-slate-700">{item.label}</td>
                        {item.values.map((val, vIdx) => (
                          <td key={vIdx} className={`py-6 px-4 text-center text-sm font-bold ${vIdx === 1 ? 'text-blue-600' : 'text-slate-600'}`}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PricingFAQ />
    </div>
  );
};

export default Pricing;

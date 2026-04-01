
import React, { useState } from 'react';

interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
  mockup: React.ReactNode;
}

const Solution: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      id: "01",
      label: "Step 01 — Query Modeling",
      title: "Strategic Query Simulation",
      description: "We simulate high intent buyer prompts across your category to understand exactly what questions are being asked.",
      mockup: (
        <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 h-full flex flex-col">
          <div className="flex gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-4 font-mono text-xs">
            <div className="p-3 rounded bg-white/5 border border-white/10">
              <p className="text-blue-400">PROMPT_VAR_1: "Best enterprise CRM for fintech..."</p>
            </div>
            <div className="p-3 rounded bg-white/5 border border-white/10">
              <p className="text-violet-400">PROMPT_VAR_2: "Compare Salesforce vs HubSpot for security..."</p>
            </div>
            <div className="p-3 rounded bg-white/5 border border-white/10">
              <p className="text-blue-300">PROMPT_VAR_3: "Which vendor has the best API docs?"</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "02",
      label: "Step 02 — Multi Model Capture",
      title: "Holistic Answer Extraction",
      description: "We capture full AI responses, brand mentions, and citation sources across models simultaneously.",
      mockup: (
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-slate-900 mx-auto mb-2 flex items-center justify-center text-[10px] text-white">GPT</div>
            <div className="h-2 w-full bg-slate-200 rounded-full mb-1"></div>
            <div className="h-2 w-2/3 bg-slate-200 rounded-full mx-auto"></div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 mx-auto mb-2 flex items-center justify-center text-[10px] text-white">GMN</div>
            <div className="h-2 w-full bg-slate-200 rounded-full mb-1"></div>
            <div className="h-2 w-2/3 bg-slate-200 rounded-full mx-auto"></div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-center text-center col-span-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 mx-auto mb-2 flex items-center justify-center text-[10px] text-white">PPLX</div>
            <div className="flex gap-2 w-full">
              <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
              <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
              <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      label: "Step 03 — Signal Structuring",
      title: "Measurable Visibility Data",
      description: "We convert unstructured answers into measurable visibility signals: mentions, sentiment, and trust.",
      mockup: (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg h-full">
          <div className="flex justify-between items-end gap-2 h-32 mb-4">
             <div className="flex-1 bg-slate-100 rounded-t h-[30%]"></div>
             <div className="flex-1 bg-slate-100 rounded-t h-[50%]"></div>
             <div className="flex-1 gradient-primary rounded-t h-[90%] shadow-lg"></div>
             <div className="flex-1 bg-slate-100 rounded-t h-[40%]"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-slate-400">
               <span>Extracted Signal</span>
               <span>Confidence</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full w-4/5 gradient-primary"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "04",
      label: "Step 04 — Competitive Mapping",
      title: "Visualizing the Gaps",
      description: "We identify overrepresentation patterns and visibility gaps versus your primary competitors.",
      mockup: (
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 text-xs font-bold text-slate-500">YOU</div>
              <div className="flex-1 h-6 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-blue-500"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 text-xs font-bold text-slate-500">COMP A</div>
              <div className="flex-1 h-6 bg-violet-100 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-violet-500"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 text-xs font-bold text-slate-500">COMP B</div>
              <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "05",
      label: "Step 05 — Prescriptive Intelligence",
      title: "Execution Ready Actions",
      description: "We translate visibility signals into prioritized actions. No more guessing what content to write.",
      mockup: (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl h-full flex flex-col gap-3">
          <div className="flex items-center justify-between">
             <span className="text-xs font-black text-slate-900">PRIORITY FIXES</span>
             <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold">CRITICAL</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-red-500 flex items-center gap-3">
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
             <p className="text-xs font-bold text-slate-700 leading-tight">Strengthen technical documentation citation links</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-yellow-500 flex items-center gap-3">
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
             <p className="text-xs font-bold text-slate-700 leading-tight">Update case study meta for "fintech scale"</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border-l-4 border-blue-500 flex items-center gap-3 opacity-50">
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
             <p className="text-xs font-bold text-slate-700 leading-tight">Refresh G2/Capterra features list</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">Turn AI Answers Into Structured Intelligence</h2>
          <p className="text-lg text-slate-600">Our systematic approach to visibility infrastructure for the AI era.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setActiveStep(i)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  activeStep === i 
                  ? 'gradient-primary border-transparent text-white shadow-xl scale-[1.02] translate-x-2' 
                  : 'border-slate-100 text-slate-500 hover:border-blue-200 hover:text-slate-900'
                }`}
              >
                <div className={`text-xs font-black uppercase tracking-widest mb-1 ${activeStep === i ? 'text-blue-100' : 'text-slate-400'}`}>
                  {s.label}
                </div>
                <div className={`text-xl font-bold ${activeStep === i ? 'text-white' : 'text-slate-800'}`}>
                  {s.title}
                </div>
                
                {/* Mobile description */}
                {activeStep === i && (
                  <div className="mt-4 lg:hidden">
                    <p className="text-sm text-blue-50 mb-6">{s.description}</p>
                    <div className="aspect-video bg-white/10 rounded-xl p-4">
                       {s.mockup}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column - Image Crossfade (Desktop) */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="h-full bg-slate-50 rounded-3xl p-12 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-12">
                  <div className="w-full max-w-md h-64 transition-all duration-300 ease-in-out opacity-100 transform translate-y-0">
                    {steps[activeStep].mockup}
                  </div>
                </div>
                
                <div className="mt-auto transition-all duration-300">
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{steps[activeStep].title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

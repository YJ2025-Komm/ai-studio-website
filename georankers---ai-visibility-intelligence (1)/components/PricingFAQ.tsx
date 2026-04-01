
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const PricingFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is a Seed Prompt?",
      answer: "A Seed Prompt is a core buying query that reflects how customers explore your category. GeoRankers runs structured variations of these prompts across AI models to measure your visibility where it matters most."
    },
    {
      question: "What does “AI Prompts Tracked” mean?",
      answer: "This refers to the total number of structured prompt variations we execute and monitor across AI platforms. It includes comparison queries, best tool queries, use case queries, and category queries."
    },
    {
      question: "How often are visibility runs executed?",
      answer: "AI Visibility runs can be done once per account. Enterprise plans can customize frequency. Each run captures fresh AI responses and updates visibility signals accordingly."
    },
    {
      question: "What AI models are supported?",
      answer: (
        <div>
          <p className="mb-2">Currently supported:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>ChatGPT</li>
          </ul>
          <p className="mt-2 mb-2">Grow and Enterprise also include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gemini</li>
            <li>AIO</li>
            <li>Perplexity (Coming Soon)</li>
          </ul>
          <p className="mt-2">We continuously expand model coverage as AI search evolves.</p>
        </div>
      )
    },
    {
      question: "What is GEO Agent Intelligence?",
      answer: (
        <div>
          <p className="mb-2">GEO Agent is your conversational visibility assistant. It allows you to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ask visibility questions</li>
            <li>Compare competitors</li>
            <li>Understand citation sources</li>
            <li>Explore narrative gaps</li>
          </ul>
          <p className="mt-2">Each conversation includes one user message and one system response. Additional usage is billed at $0.01 per conversation.</p>
        </div>
      )
    },
    {
      question: "How is this different from traditional SEO tools?",
      answer: "Traditional tools measure rankings and traffic. GeoRankers measures how AI models interpret, select, and cite your brand inside generated answers. We focus on visibility signals, citation patterns, and prescriptive actions tied to AI behavior."
    },
    {
      question: "What does “Competitors Tracked” include?",
      answer: "You can define key competitors per plan. GeoRankers monitors how often they are mentioned, how they are positioned, and which sources strengthen their visibility across AI models."
    },
    {
      question: "Can I export reports?",
      answer: "Report export is available in Grow and Enterprise plans. Enterprise plans can customize reporting formats."
    },
    {
      question: "What happens if I exceed my GEO Agent conversation limit?",
      answer: "Additional conversations are billed at $0.01 per conversation. You can upgrade anytime if usage consistently exceeds your plan limit."
    },
    {
      question: "Is Enterprise required for larger teams?",
      answer: (
        <div>
          <p className="mb-2">Enterprise is recommended if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You need custom prompt volume</li>
            <li>You require higher run frequency</li>
            <li>You need dedicated support</li>
            <li>You want extended analytics history</li>
            <li>You require custom integrations</li>
          </ul>
        </div>
      )
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes. You can change plans at any time. Billing adjustments are prorated based on your subscription cycle."
    },
    {
      question: "Do you offer pilots or custom onboarding?",
      answer: "Enterprise customers receive dedicated onboarding and a GEO specialist. If you are evaluating at scale, contact us for a structured visibility pilot."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-2">
              <button
                className="w-full flex items-center justify-between py-6 text-left hover:text-blue-600 transition-colors group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ml-4 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-slate-600 leading-relaxed text-base pb-2 pr-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;

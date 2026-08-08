import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';

interface PricingProps {
  onRequestDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestDemo }) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-20 bg-[#080c14] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <Zap className="h-3.5 w-3.5" />
            TRANSPARENT MUNICIPAL PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Deployment Tiers for Every City Size
          </h2>
          <p className="text-slate-400 text-base">
            Simple per-node pricing with zero upfront hardware lock-in and 24/7 node health monitoring.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center gap-3 rounded-xl bg-slate-900 p-1 border border-slate-800 mt-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                !isAnnual ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isAnnual ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPricePerNode : plan.monthlyPricePerNode;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-8 flex flex-col justify-between shadow-xl transition-all ${
                  plan.popular
                    ? 'border-cyan-500 bg-slate-900/95 shadow-cyan-500/10 ring-1 ring-cyan-500'
                    : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    MOST POPULAR SMART CITY TIER
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono">${price}</span>
                    <span className="text-slate-400 text-xs">/ node / month</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onRequestDemo}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all shadow-md ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-cyan-500/25 hover:scale-[1.02]'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    Request Pilot Proposal
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

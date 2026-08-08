import React from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { Building2, Award, Quote, CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-[#0b0f17] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <Building2 className="h-3.5 w-3.5" />
            MUNICIPAL CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Traffic Optimization Worldwide
          </h2>
          <p className="text-slate-400 text-base">
            See how major transit authorities reduced congestion without expanding road infrastructure.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.city}</h3>
                    <p className="text-xs text-slate-400 font-mono">{study.country} • Pop. {study.population}</p>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                    {study.badge}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800/80 text-left">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 font-mono">
                      -{study.delayReductionPct}%
                    </div>
                    <div className="text-[11px] text-slate-400">Peak Hour Delays</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono">
                      {study.co2SavedTonsPerYear.toLocaleString()}T
                    </div>
                    <div className="text-[11px] text-slate-400">CO2 Reduced / Year</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pt-2">
                  <Quote className="h-6 w-6 text-cyan-500/30 absolute -top-1 -left-1" />
                  <p className="text-xs text-slate-300 italic pl-5 leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{study.author}</div>
                  <div className="text-[10px] text-slate-400">{study.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

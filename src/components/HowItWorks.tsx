import React from 'react';
import { Camera, Cpu, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Edge Vision Processing',
      icon: Camera,
      badge: 'INPUT LAYER',
      description: 'Ultra-low latency HD camera feeds & IoT radar sensors collect live high-resolution video streams at edge intersection nodes.',
      techSpecs: ['4K @ 60fps local processing', 'Zero cloud bandwidth overhead', 'Night vision & inclement weather clarity']
    },
    {
      step: '02',
      title: 'Neural Network Analysis',
      icon: Cpu,
      badge: 'AI COMPUTE LAYER',
      description: 'On-device neural network models classify vehicle types, measure queue growth velocities, and detect emergency approach vectors in <15ms.',
      techSpecs: ['99.2% vehicle classification accuracy', 'Predictive queue growth vectoring', 'Integrated Emergency Vehicle Priority (EVP)']
    },
    {
      step: '03',
      title: 'Automated Signal Control',
      icon: Zap,
      badge: 'ACTUATION LAYER',
      description: 'Direct handshake with NEMA TS2 traffic cabinets executes optimal green light cycles dynamically while maintaining pedestrian safety buffers.',
      techSpecs: ['<50ms controller phase update', 'NEMA TS2 & ATC cabinet compliant', 'Fail-safe hardware hardware lockouts']
    }
  ];

  return (
    <section className="py-20 bg-[#080c14] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold text-purple-400 border border-purple-500/30">
            <Cpu className="h-3.5 w-3.5" />
            SYSTEM ARCHITECTURE FLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How PulseTraffic Operates in Milliseconds
          </h2>
          <p className="text-slate-400 text-base">
            From raw edge video capture to intelligent signal actuation across municipal light networks.
          </p>
        </div>

        {/* 3-Step Flow Diagram Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
              >
                {/* Step badge & number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-mono text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                    {step.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Tech Specs */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                    TECHNICAL SPECIFICATIONS
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    {step.techSpecs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Arrow for desktop */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-cyan-400 bg-[#080c14] p-1 rounded-full border border-slate-800">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Camera, Server, Cloud, Cpu, Radio, ShieldCheck, ArrowRight, Zap, Database } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const nodes = [
    {
      title: '1. Edge Optics & Radar Sensors',
      subtitle: '4K UltraHD / Microwave Radar',
      icon: Camera,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40',
      description: 'Collects optical vehicle queues, velocity vectors, pedestrian presence, and optical emergency vehicle strobes at 60fps.'
    },
    {
      title: '2. PulseTraffic Edge Box',
      subtitle: 'On-Cabinet AI Accelerator',
      icon: Cpu,
      color: 'border-purple-500 text-purple-400 bg-purple-950/40',
      description: 'Executes lightweight computer vision inferencing in <15ms locally at the light cabinet, guaranteeing failsafe local operation.'
    },
    {
      title: '3. Cloud Command Center',
      subtitle: 'Regional Neural Matrix',
      icon: Cloud,
      color: 'border-blue-500 text-blue-400 bg-blue-950/40',
      description: 'Aggregates multi-intersection metrics, forecasts regional congestion surges, coordinates emergency green wave corridors, and logs analytics.'
    },
    {
      title: '4. NEMA TS2 Light Controller',
      subtitle: 'Hardware Cabinet Actuation',
      icon: Server,
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40',
      description: 'Receives updated signal phase durations and directly switches traffic light state with zero modification to underlying physical wiring.'
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-[#080c14] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-400 border border-blue-500/30">
            <Radio className="h-3.5 w-3.5" />
            HARDWARE & CLOUD INTEGRATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Resilient Edge-to-Cloud Infrastructure
          </h2>
          <p className="text-slate-400 text-base">
            Engineered for zero-downtime reliability with localized edge computing and military-grade encryption.
          </p>
        </div>

        {/* Interactive Node Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-4 hover:border-cyan-500/50 transition-all group"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${node.color} shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {node.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{node.title}</h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {node.description}
                </p>

                {/* Arrow indicator between nodes on large screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fail-Safe Standards & Compliance Footer Banner */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>NEMA TS2 & 2070 Cabinet Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <span>AES-256 Encrypted C-V2X Radio Channels</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-purple-400" />
            <span>ISO 27001 & GDPR Privacy Audited</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            <span>Fail-Safe Hardware Conflict Monitor (MMU)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

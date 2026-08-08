import React, { useState } from 'react';
import { Sliders, ShieldAlert, AlertTriangle, Leaf, Radio, BrainCircuit, ArrowRight, Check } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      id: 'dynamic-timing',
      title: 'Dynamic Signal Timing',
      tagline: 'Millisecond computer vision queue adaptation',
      icon: Sliders,
      accentColor: 'from-cyan-500 to-blue-600',
      description: 'Computer vision algorithms analyze incoming lane approach density, queue build-up, and velocity to recalculate green light durations dynamically every 100 milliseconds.',
      highlights: [
        'Queue length estimation up to 200m per approach',
        'Multi-phase signal split optimization',
        'Eliminates ghost waiting at empty intersections',
        'Prevents gridlock spillback into upstream junctions'
      ]
    },
    {
      id: 'evp-priority',
      title: 'Emergency Vehicle Priority (EVP)',
      tagline: 'Automatic green corridor pre-emption',
      icon: ShieldAlert,
      accentColor: 'from-red-500 to-pink-600',
      description: 'Integrated GPS dispatch and optical recognition automatically clears signalized intersections along emergency routes, granting instant green waves for first responders.',
      highlights: [
        'Reduces ambulance & fire response times by 120+ seconds',
        'GPS pre-emption with optical camera confirmation',
        'Gentle phase recovery prevents sudden cross-street surges',
        'Automatic CAD dispatch system handshake'
      ]
    },
    {
      id: 'incident-detection',
      title: 'Incident & Anomaly Detection',
      tagline: 'Instant AI detection of accidents & road hazards',
      icon: AlertTriangle,
      accentColor: 'from-amber-500 to-orange-600',
      description: 'Continuous video stream analysis immediately flags stalled vehicles, collisions, debris, or pedestrians in roadway, triggering automated warnings to emergency dispatchers.',
      highlights: [
        'Sub-second accident & hazard identification',
        'Automatic camera angle lock & high-res crop',
        'Reduces secondary collision risk by 45%',
        'Direct API dispatch alerts to municipal DOT teams'
      ]
    },
    {
      id: 'eco-analytics',
      title: 'Environmental Impact Analytics',
      tagline: 'Idle-time tracking for urban carbon reduction',
      icon: Leaf,
      accentColor: 'from-emerald-500 to-teal-600',
      description: 'Quantify environmental gains with precise idle-time calculations. Measure metric tons of CO2 avoided, fuel gallons saved, and citywide green compliance metrics.',
      highlights: [
        'Calculates fuel burn saved during idle reduction',
        'Real-time CO2 emissions reporting dashboard',
        'Compliance metrics for ISO 14001 & climate goals',
        'Automated monthly environmental impact summaries'
      ]
    },
    {
      id: 'v2x-iot',
      title: 'V2X & Smart City IoT',
      tagline: 'Seamless hardware controller integration',
      icon: Radio,
      accentColor: 'from-purple-500 to-indigo-600',
      description: 'Compatible with standard NEMA TS2, 2070, and ATC controllers. Connects directly to municipal IoT sensors, radar nodes, and connected autonomous vehicles.',
      highlights: [
        'Plug-and-play retrofit with existing light cabinets',
        'Supports C-V2X (Cellular Vehicle-to-Everything) protocol',
        'Zero replacement cost for existing traffic light hardware',
        'Secure hardware root-of-trust encryption'
      ]
    },
    {
      id: 'predictive-ai',
      title: 'Predictive Bottleneck AI',
      tagline: 'Forecast surges 30 minutes before gridlock occurs',
      icon: BrainCircuit,
      accentColor: 'from-blue-500 to-cyan-500',
      description: 'Deep neural networks analyze stadium events, weather forecasts, and historical congestion patterns to re-route arterial traffic flow proactively before bottlenecks form.',
      highlights: [
        '30-minute predictive bottleneck forecasting',
        'Regional network-wide signal coordination',
        'Weather & event-aware traffic signal profiles',
        'Simulated scenario testing before live deployment'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#0b0f17] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30">
            <Radio className="h-3.5 w-3.5" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Urban Mobility Engineering
          </h2>
          <p className="text-slate-400 text-base">
            From single corridor signal adaptation to citywide emergency vehicle priority and carbon analytics.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            const isSelected = activeTab === idx;

            return (
              <div
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-cyan-500 bg-slate-900 shadow-xl shadow-cyan-500/10'
                    : 'border-slate-800/80 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                {/* Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cap.accentColor} text-white shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6" />
                </div>

                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  {cap.tagline}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {cap.description}
                </p>

                {/* Bullet highlights */}
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  {cap.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

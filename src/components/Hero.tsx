import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Shield, Cpu, Zap, ArrowRight, Activity, Car, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onSeeAiInAction: () => void;
  onRequestQuote: () => void;
  onLaunchDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSeeAiInAction,
  onRequestQuote,
  onLaunchDashboard,
}) => {
  // Animated live counter states in hero
  const [throughput, setThroughput] = useState(1428);
  const [aiConfidence, setAiConfidence] = useState(98.7);
  const [emergencyStatus, setEmergencyStatus] = useState<boolean>(false);
  const [activeSignalPhase, setActiveSignalPhase] = useState<'NORTH_SOUTH' | 'EAST_WEST'>('NORTH_SOUTH');
  const [countdown, setCountdown] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate live AI throughput fluctuation
      setThroughput((prev) => prev + Math.floor(Math.random() * 7) - 3);
      setAiConfidence((prev) => Number((98.5 + Math.random() * 0.4).toFixed(1)));
    }, 2000);

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setActiveSignalPhase((current) => (current === 'NORTH_SOUTH' ? 'EAST_WEST' : 'NORTH_SOUTH'));
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background neon grid lines & light spotlights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/30 via-[#0b0f17] to-[#0b0f17] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* High-tech badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3.5 py-1.5 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                Next-Gen Edge AI Traffic Matrix
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Real-Time AI Traffic <br />
              <span className="text-gradient-cyan">Optimization</span> for <br />
              Smarter Cities
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Reduce urban congestion by up to <strong className="text-cyan-400 font-semibold">35%</strong>, lower CO2 emissions, and create automatic green corridors for emergency vehicles using dynamic edge computer vision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onSeeAiInAction}
                className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Play className="h-4 w-4 fill-current group-hover:translate-x-0.5 transition-transform" />
                See AI in Action
              </button>

              <button
                onClick={onRequestQuote}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 transition-all"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  35<span className="text-cyan-400">%</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Congestion Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  &lt; 50<span className="text-cyan-400">ms</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Signal Adapt Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  99.99<span className="text-cyan-400">%</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Uptime SLA</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-4 sm:p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="flex h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="flex h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    LIVE_FEED // INTERSECTION_A14
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI ENGINE ACTIVE
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded border border-cyan-500/30">
                    {aiConfidence}% CONF
                  </span>
                </div>
              </div>

              {/* Simulated Camera Feed Container */}
              <div className="relative mt-4 h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                
                {/* Background grid representing dynamic road intersection */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                
                {/* Intersection Road Layout graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Vertical Road */}
                  <div className="w-24 h-full bg-slate-950 border-x border-slate-700/60 relative">
                    <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-yellow-500/50"></div>
                  </div>
                  {/* Horizontal Road */}
                  <div className="h-24 w-full bg-slate-950 border-y border-slate-700/60 absolute top-1/2 -translate-y-1/2">
                    <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-yellow-500/50"></div>
                  </div>
                  {/* Center junction square */}
                  <div className="w-24 h-24 bg-slate-900/90 border border-cyan-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="text-[10px] font-mono text-cyan-400/80 tracking-tighter text-center">
                      NODE-A14<br />CAM_OPTIC_01
                    </div>
                  </div>
                </div>

                {/* Animated Computer Vision Bounding Boxes */}
                {/* Vehicle 1: Moving North */}
                <div className="absolute top-12 left-[44%] -translate-x-1/2 rounded border border-cyan-400 bg-cyan-500/10 px-2 py-1 shadow-sm transition-all duration-700 animate-pulse">
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-300">
                    <Car className="h-3 w-3 text-cyan-400" />
                    <span>CAR_04 (52 km/h)</span>
                  </div>
                </div>

                {/* Vehicle 2: Bus moving East */}
                <div className="absolute top-[48%] left-[12%] -translate-y-1/2 rounded border border-purple-400 bg-purple-500/10 px-2.5 py-1 shadow-sm">
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-purple-300">
                    <span className="text-purple-400 font-bold">BUS</span>
                    <span>METRO_LINE (34 km/h)</span>
                  </div>
                </div>

                {/* Vehicle 3: Emergency Ambulance corridor preview */}
                {emergencyStatus && (
                  <div className="absolute top-[52%] right-[10%] -translate-y-1/2 rounded border-2 border-red-500 bg-red-950/80 px-3 py-1.5 shadow-lg shadow-red-500/40 animate-bounce">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-red-300">
                      <AlertTriangle className="h-3.5 w-3.5 text-red-400 animate-spin" />
                      <span>AMBULANCE #402 [EVP OVERRIDE]</span>
                    </div>
                  </div>
                )}

                {/* Corner Signal Indicators */}
                {/* N-S Traffic Signal */}
                <div className="absolute top-3 left-3 bg-slate-950/90 p-2 rounded-lg border border-slate-800 flex items-center gap-2">
                  <div className="text-[11px] font-mono font-medium text-slate-300">N-S SIGNAL:</div>
                  <div className={`h-3 w-3 rounded-full ${activeSignalPhase === 'NORTH_SOUTH' ? 'bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-xs font-mono font-bold text-cyan-300">{activeSignalPhase === 'NORTH_SOUTH' ? `${countdown}s` : 'STOP'}</span>
                </div>

                {/* E-W Traffic Signal */}
                <div className="absolute bottom-3 right-3 bg-slate-950/90 p-2 rounded-lg border border-slate-800 flex items-center gap-2">
                  <div className="text-[11px] font-mono font-medium text-slate-300">E-W SIGNAL:</div>
                  <div className={`h-3 w-3 rounded-full ${activeSignalPhase === 'EAST_WEST' ? 'bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-xs font-mono font-bold text-cyan-300">{activeSignalPhase === 'EAST_WEST' ? `${countdown}s` : 'STOP'}</span>
                </div>

                {/* Scanning Radar Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent h-12 w-full animate-pulse pointer-events-none"></div>
              </div>

              {/* Bottom Card Control Panel & Live Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-left">
                <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Flow Throughput</div>
                  <div className="text-lg font-bold text-white flex items-center gap-1 mt-0.5">
                    {throughput} <span className="text-[10px] text-cyan-400 font-normal">vpm</span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Wait Time Saved</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">
                    -32.4%
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Emergency Corridor</div>
                  <button
                    onClick={() => setEmergencyStatus(!emergencyStatus)}
                    className={`mt-1 w-full py-1 rounded text-[11px] font-bold tracking-tight transition-all ${
                      emergencyStatus
                        ? 'bg-red-600 text-white animate-pulse shadow-md shadow-red-500/40'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {emergencyStatus ? 'EVP ACTIVE (CLEAR)' : 'TEST EVP OVERRIDE'}
                  </button>
                </div>
              </div>

              {/* Action link */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Neural Network 98.7% Vehicle Categorization
                </span>
                <button
                  onClick={onLaunchDashboard}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 flex items-center gap-1"
                >
                  Open Full Command Center &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

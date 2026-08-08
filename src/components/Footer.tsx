import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a11] border-t border-slate-800/80 text-slate-400 text-xs py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Ticker: Live System Status */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-4 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-white font-bold">SYSTEM STATUS:</span>
            <span className="text-emerald-400 font-semibold">
              All 1,420 Municipal Nodes Operational (99.99% Uptime)
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Latency: <strong className="text-cyan-400">12ms</strong></span>
            <span>Signal Adapt: <strong className="text-cyan-400">42ms</strong></span>
            <span>Active EVP: <strong className="text-emerald-400">2 Corridors</strong></span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#0b0f17]">
                  <Activity className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Pulse<span className="text-cyan-400">Traffic</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation AI traffic signal optimization engine. Reducing municipal congestion, lowering emissions, and prioritizing first responders in real-time.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              NEMA TS2 • IEEE 1609 C-V2X • ISO 27001 Certified
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Solutions</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#live-analytics" className="hover:text-cyan-400 transition-colors">Adaptive Signals</a></li>
              <li><a href="#live-analytics" className="hover:text-cyan-400 transition-colors">Emergency Priority (EVP)</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Incident & Hazard Detection</a></li>
              <li><a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">Carbon & ROI Analytics</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Platform</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Edge Infrastructure</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Cabinet Hardware Integration</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Municipal Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Deployment Tiers</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Compliance</div>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> GDPR Audited</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> ISO 27001</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-purple-400" /> NEMA TS2 Type 1</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> AES-256 Encrypted</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PulseTraffic Technologies Inc. All rights reserved. Built for Smart Cities.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

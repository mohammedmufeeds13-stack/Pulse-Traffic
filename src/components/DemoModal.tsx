import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Sparkles, Send, ShieldCheck, Radio } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>('San Francisco Metropolitan');
  const [intersectionsCount, setIntersectionsCount] = useState<string>('50-100 Nodes');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [role, setRole] = useState<string>('Traffic Engineer / Planner');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl border border-cyan-500/30 bg-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/30 mb-2">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                MUNICIPAL LIVE DEMO & PILOT PROPOSAL
              </div>
              <h3 className="text-2xl font-bold text-white">
                Experience PulseTraffic in Your City
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Schedule a 1-on-1 technical simulation with a senior smart mobility engineer using your city's GIS corridor data.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Official Email</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@citydot.gov"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Municipality / Agency</label>
                  <input
                    type="text"
                    required
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="e.g. Department of Transportation"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Role / Position</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                  >
                    <option value="Traffic Engineer / Planner">Traffic Engineer / Planner</option>
                    <option value="Director of Transportation">Director of Transportation</option>
                    <option value="Smart City Administrator">Smart City Administrator</option>
                    <option value="Emergency Services Chief">Emergency Services Chief</option>
                    <option value="Municipal Technology Officer">Municipal Technology Officer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Estimated Intersections to Monitor</label>
                <select
                  value={intersectionsCount}
                  onChange={(e) => setIntersectionsCount(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 outline-none"
                >
                  <option value="1-25 Nodes (Corridor Pilot)">1-25 Nodes (Corridor Pilot)</option>
                  <option value="25-100 Nodes (District Rollout)">25-100 Nodes (District Rollout)</option>
                  <option value="100-500 Nodes (Citywide)">100-500 Nodes (Citywide)</option>
                  <option value="500+ Nodes (Metropolis Enterprise)">500+ Nodes (Metropolis Enterprise)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Confirm & Schedule Live Corridor Demo
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero obligation • NEMA TS2 compliant sandbox • Confidential municipal proposal</span>
              </div>

            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Demo Confirmed!</h3>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
              Thank you <strong className="text-white">{contactName}</strong>. A technical package and GIS corridor preview invitation has been sent to <strong className="text-cyan-400">{contactEmail}</strong> for <strong className="text-white">{cityName}</strong>.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="py-2.5 px-6 rounded-xl bg-slate-800 text-xs font-bold text-white hover:bg-slate-700"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

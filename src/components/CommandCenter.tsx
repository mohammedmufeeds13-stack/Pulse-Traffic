import React, { useState } from 'react';
import { CameraFeed, IntersectionSignal, IncidentAlert } from '../types';
import { INITIAL_CAMERAS, INITIAL_INTERSECTIONS, INITIAL_INCIDENTS } from '../data/mockData';
import { LayoutDashboard, Radio, ShieldAlert, Cpu, AlertTriangle, CheckCircle, RefreshCw, Sliders, Play, Lock, Eye, Zap, Volume2, ArrowLeft, Send } from 'lucide-react';

interface CommandCenterProps {
  onBackToWebsite: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({ onBackToWebsite }) => {
  const [intersections, setIntersections] = useState<IntersectionSignal[]>(INITIAL_INTERSECTIONS);
  const [selectedIntersectionId, setSelectedIntersectionId] = useState<string>('int-01');
  const [incidents, setIncidents] = useState<IncidentAlert[]>(INITIAL_INCIDENTS);
  const [cameras, setCameras] = useState<CameraFeed[]>(INITIAL_CAMERAS);

  // Command center interactive controls
  const [activeTab, setActiveTab] = useState<'MONITOR' | 'INCIDENTS' | 'MANUAL_OVERRIDE' | 'ANALYTICS'>('MONITOR');
  const [emergencyCorridorActive, setEmergencyCorridorActive] = useState<boolean>(false);
  const [manualPhase, setManualPhase] = useState<string>('NORTH_SOUTH_GREEN');
  const [overrideTimer, setOverrideTimer] = useState<number>(45);

  const activeIntersection = intersections.find((i) => i.id === selectedIntersectionId) || intersections[0];

  const handleResolveIncident = (id: string) => {
    setIncidents((prev) =>
      prev.map((inc) => (inc.id === id ? { ...inc, resolved: true } : inc))
    );
  };

  const handleApplyManualOverride = () => {
    setIntersections((prev) =>
      prev.map((i) =>
        i.id === selectedIntersectionId
          ? {
              ...i,
              mode: 'MANUAL_OVERRIDE',
              phaseTimeRemainingSec: overrideTimer,
              efficiencyScore: 88
            }
          : i
      )
    );
    alert(`Manual Phase Override Applied to ${activeIntersection.name}! Extended for ${overrideTimer}s.`);
  };

  const handleRevertToAi = () => {
    setIntersections((prev) =>
      prev.map((i) =>
        i.id === selectedIntersectionId
          ? {
              ...i,
              mode: 'AI_AUTO',
              efficiencyScore: 96
            }
          : i
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#070a11] text-white p-4 sm:p-6 font-sans space-y-6">
      
      {/* Top Operating Command Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToWebsite}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Website
          </button>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/30">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold text-white tracking-tight">
                  PulseTraffic Municipal Command Center
                </h1>
                <span className="flex items-center gap-1 text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEM ONLINE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Operator ID: <strong className="text-slate-200">DOT-ADMIN-704</strong> • SF Metropolitan Grid
              </p>
            </div>
          </div>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setActiveTab('MONITOR')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'MONITOR'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            Live Grid Monitor
          </button>
          <button
            onClick={() => setActiveTab('INCIDENTS')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'INCIDENTS'
                ? 'bg-red-500/20 text-red-300 border-red-500/50 shadow-md'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            Incident Queue
            {incidents.filter((i) => !i.resolved).length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold">
                {incidents.filter((i) => !i.resolved).length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('MANUAL_OVERRIDE')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'MANUAL_OVERRIDE'
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-md'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            Signal Override Phase
          </button>
        </div>
      </div>

      {/* Main Command Center Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Intersection Selector & Status (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3 shadow-xl">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              MANAGED INTERSECTIONS ({intersections.length})
            </div>

            <div className="space-y-2">
              {intersections.map((int) => {
                const isSelected = int.id === selectedIntersectionId;
                return (
                  <div
                    key={int.id}
                    onClick={() => setSelectedIntersectionId(int.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-cyan-500 bg-slate-800 shadow-md shadow-cyan-500/10'
                        : 'border-slate-800/80 bg-slate-950/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{int.name}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${int.mode === 'AI_AUTO' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400'}`}>
                        {int.mode}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Efficiency: <strong className="text-emerald-400">{int.efficiencyScore}%</strong></span>
                      <span>Phase: <strong className="text-cyan-400">{int.currentPhase.split('_')[0]}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Active Node Details */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              NODE SPECS // {activeIntersection.id.toUpperCase()}
            </div>
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">District:</span>
                <span className="text-white font-bold">{activeIntersection.district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Coordinates:</span>
                <span className="text-cyan-400">{activeIntersection.coordinates.lat}, {activeIntersection.coordinates.lng}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cabinet HW:</span>
                <span className="text-white">NEMA TS2 Type 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Camera Matrix & Interactive View (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">
                  LIVE OPTICAL STREAM // {activeIntersection.name}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                AI DETECTING 6 VEHICLES
              </span>
            </div>

            {/* Simulated Live Camera Stream */}
            <div className="relative h-80 w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
              
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Road geometry visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className="w-24 h-full bg-slate-900 border-x border-slate-800 relative">
                  <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-yellow-500/50"></div>
                </div>
                <div className="h-24 w-full bg-slate-900 border-y border-slate-800 absolute top-1/2 -translate-y-1/2">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-yellow-500/50"></div>
                </div>
              </div>

              {/* Bounding Box 1 */}
              <div className="absolute top-16 left-[40%] rounded border border-cyan-400 bg-cyan-950/80 px-2 py-0.5 text-[10px] font-mono text-cyan-300 font-bold">
                CAR #104 [48 km/h]
              </div>

              {/* Bounding Box 2 */}
              <div className="absolute top-[48%] left-[15%] rounded border border-purple-400 bg-purple-950/80 px-2 py-0.5 text-[10px] font-mono text-purple-300 font-bold">
                BUS METRO [32 km/h]
              </div>

              {/* Bounding Box 3 */}
              <div className="absolute bottom-16 right-[25%] rounded border border-emerald-400 bg-emerald-950/80 px-2 py-0.5 text-[10px] font-mono text-emerald-300 font-bold">
                EV TAXI [50 km/h]
              </div>

              {/* Overlay Crosshair */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                <div className="w-full h-px bg-cyan-500/50"></div>
                <div className="h-full w-px bg-cyan-500/50 absolute"></div>
              </div>

              <div className="absolute bottom-3 left-3 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">SIGNAL STATUS: </span>
                <span className="text-emerald-400 font-bold">N-S GREEN (24s)</span>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleRevertToAi}
                className="py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="h-3.5 w-3.5 text-cyan-400" />
                Reset Signal to AI Auto
              </button>
              <button
                onClick={() => {
                  setEmergencyCorridorActive(!emergencyCorridorActive);
                  alert(emergencyCorridorActive ? 'Emergency Corridor Cleared.' : 'Emergency Green Wave Corridor Activated across District!');
                }}
                className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md ${
                  emergencyCorridorActive
                    ? 'bg-red-600 text-white animate-pulse'
                    : 'bg-red-950/80 text-red-300 hover:bg-red-900 border border-red-500/30'
                }`}
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                {emergencyCorridorActive ? 'EMERGENCY ACTIVE (CLEAR)' : 'GRANT DISTRICT EVP WAVE'}
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Incident Logs & Manual Override Controls (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Incident Queue */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 uppercase">
              <span>LIVE INCIDENT ALERTS</span>
              <span className="text-red-400">{incidents.filter((i) => !i.resolved).length} UNRESOLVED</span>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {incidents.map((inc) => (
                <div
                  key={inc.id}
                  className={`p-3 rounded-xl border space-y-2 ${
                    inc.resolved
                      ? 'border-slate-800 bg-slate-950/40 opacity-60'
                      : 'border-red-500/40 bg-red-950/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono font-bold text-red-400">{inc.type}</span>
                    <span className="text-slate-400 text-[10px]">{inc.timestamp}</span>
                  </div>

                  <p className="text-xs text-slate-200">{inc.description}</p>

                  {!inc.resolved ? (
                    <button
                      onClick={() => handleResolveIncident(inc.id)}
                      className="w-full py-1.5 rounded bg-red-600/30 hover:bg-red-600 text-red-200 text-[11px] font-bold border border-red-500/50 transition-all"
                    >
                      Acknowledge & Clear Incident
                    </button>
                  ) : (
                    <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Resolved
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Manual Phase Override Control Panel */}
          <div className="rounded-2xl border border-purple-500/30 bg-slate-900/90 p-4 space-y-4 shadow-xl">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase">
              MANUAL PHASE OVERRIDE
            </div>

            <div className="space-y-2 text-xs">
              <label className="text-slate-300 font-semibold block">Select Target Signal Phase:</label>
              <select
                value={manualPhase}
                onChange={(e) => setManualPhase(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white focus:border-purple-400 outline-none"
              >
                <option value="NORTH_SOUTH_GREEN">Hold North-South GREEN</option>
                <option value="EAST_WEST_GREEN">Hold East-West GREEN</option>
                <option value="ALL_RED">ALL RED Safety Hold</option>
                <option value="EMERGENCY_CORRIDOR">Emergency Priority Corridor</option>
              </select>

              <label className="text-slate-300 font-semibold block pt-2">Phase Duration (Seconds):</label>
              <input
                type="number"
                value={overrideTimer}
                onChange={(e) => setOverrideTimer(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white font-mono focus:border-purple-400 outline-none"
              />
            </div>

            <button
              onClick={handleApplyManualOverride}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-purple-600/20 hover:scale-[1.02] transition-all"
            >
              Apply Manual Override
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

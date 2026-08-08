import React, { useState, useEffect } from 'react';
import { CameraFeed, IntersectionSignal, HourlyTrafficData } from '../types';
import { INITIAL_CAMERAS, INITIAL_INTERSECTIONS, HOURLY_TRAFFIC_DATA } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Camera, Sliders, AlertCircle, ShieldAlert, Cpu, Maximize2, RefreshCw, Eye, Flame, Gauge, Zap, CheckCircle, Car, Truck, Bus, Activity, Navigation } from 'lucide-react';

interface DashboardPreviewProps {
  onLaunchFullCommand: () => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ onLaunchFullCommand }) => {
  const [cameras, setCameras] = useState<CameraFeed[]>(INITIAL_CAMERAS);
  const [selectedCameraId, setSelectedCameraId] = useState<string>('cam-01');
  const [intersections, setIntersections] = useState<IntersectionSignal[]>(INITIAL_INTERSECTIONS);
  const [selectedIntersectionId, setSelectedIntersectionId] = useState<string>('int-01');
  
  // Camera feed display modes
  const [feedLayout, setFeedLayout] = useState<'SINGLE' | 'GRID'>('GRID');
  const [isInfrared, setIsInfrared] = useState<boolean>(false);
  const [showBoundingBoxes, setShowBoundingBoxes] = useState<boolean>(true);
  const [chartMetric, setChartMetric] = useState<'throughput' | 'delay' | 'co2'>('throughput');

  // Real-time stat counters
  const [vehiclesPerMin, setVehiclesPerMin] = useState(1420);
  const [avgDelayReduction, setAvgDelayReduction] = useState(28.4);
  const [carbonSavedTons, setCarbonSavedTons] = useState(14.8);
  const [activeEvpCorridors, setActiveEvpCorridors] = useState(2);

  // Active signal timer simulation
  const [activeSignal, setActiveSignal] = useState<IntersectionSignal>(INITIAL_INTERSECTIONS[0]);
  const [greenLightDurationSec, setGreenLightDurationSec] = useState<number>(42);
  const [signalCountdown, setSignalCountdown] = useState<number>(28);
  const [emergencyOverrideActive, setEmergencyOverrideActive] = useState<boolean>(false);

  // Live timer tick
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate stats
      setVehiclesPerMin((prev) => prev + Math.floor(Math.random() * 9) - 4);
      setCarbonSavedTons((prev) => Number((prev + 0.01).toFixed(2)));

      // Countdown traffic signal
      setSignalCountdown((prev) => {
        if (prev <= 1) {
          return greenLightDurationSec;
        }
        return prev - 1;
      });

      // Micro-jitter vehicle positions in camera boxes for realistic movement
      setCameras((prevCams) =>
        prevCams.map((cam) => ({
          ...cam,
          boxes: cam.boxes.map((box) => {
            const deltaX = (Math.random() - 0.5) * 2;
            const deltaY = (Math.random() - 0.5) * 2;
            let newX = Math.min(Math.max(box.x + deltaX, 10), 85);
            let newY = Math.min(Math.max(box.y + deltaY, 15), 80);
            return {
              ...box,
              x: Number(newX.toFixed(1)),
              y: Number(newY.toFixed(1)),
              speedKmH: Math.min(Math.max(box.speedKmH + Math.floor(Math.random() * 3) - 1, 10), 90)
            };
          })
        }))
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [greenLightDurationSec]);

  // Handle emergency corridor trigger
  const handleTriggerEmergency = () => {
    setEmergencyOverrideActive(!emergencyOverrideActive);
    if (!emergencyOverrideActive) {
      setSignalCountdown(60); // Grant 60s emergency green wave corridor
      setActiveEvpCorridors((prev) => prev + 1);
    } else {
      setSignalCountdown(28);
      setActiveEvpCorridors((prev) => Math.max(0, prev - 1));
    }
  };

  const currentCamera = cameras.find((c) => c.id === selectedCameraId) || cameras[0];

  return (
    <section id="live-analytics" className="py-16 bg-[#0b0f17] text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/30 mb-2">
              <Activity className="h-3.5 w-3.5 animate-pulse" />
              LIVE TELEMETRY DASHBOARD PREVIEW
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Real-Time AI Traffic Command & Control
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Inspect live computer vision camera feeds, adaptive signal phase timings, and predictive traffic throughput metrics in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsInfrared(!isInfrared)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                isInfrared
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              {isInfrared ? 'Infrared Night Mode: ON' : 'Infrared Mode'}
            </button>

            <button
              onClick={() => setShowBoundingBoxes(!showBoundingBoxes)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                showBoundingBoxes
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              {showBoundingBoxes ? 'AI Bounding Boxes: ON' : 'Boxes Hidden'}
            </button>

            <button
              onClick={onLaunchFullCommand}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              Full Screen
            </button>
          </div>
        </div>

        {/* Real-Time Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Gauge className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Avg Delay Reduction</div>
              <div className="text-2xl font-bold text-white flex items-center gap-1.5 mt-0.5">
                -{avgDelayReduction}%
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  -18.4s/veh
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Car className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Vehicles Processed</div>
              <div className="text-2xl font-bold text-white mt-0.5 flex items-center gap-1.5">
                {vehiclesPerMin.toLocaleString()}
                <span className="text-xs font-semibold text-cyan-400">vpm</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">CO2 Reduction Today</div>
              <div className="text-2xl font-bold text-emerald-400 mt-0.5">
                {carbonSavedTons} <span className="text-xs font-normal text-slate-300">Tons</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${emergencyOverrideActive ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-bounce' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Active EVP Corridors</div>
              <div className="text-2xl font-bold text-white mt-0.5 flex items-center gap-1.5">
                {activeEvpCorridors} Active
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${emergencyOverrideActive ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-800 text-amber-400'}`}>
                  {emergencyOverrideActive ? 'PRE-EMPTION' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Main Dashboard Layout: Left Camera Grid (8 cols) + Right Signal Control (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Camera Feed Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Camera Bar Header & Layout Selector */}
            <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold text-slate-200">
                  CAMERA FEEDS MATRIX ({cameras.length} NODES)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFeedLayout('GRID')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    feedLayout === 'GRID' ? 'bg-cyan-500 text-white border-cyan-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  4-Grid View
                </button>
                <button
                  onClick={() => setFeedLayout('SINGLE')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md border ${
                    feedLayout === 'SINGLE' ? 'bg-cyan-500 text-white border-cyan-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  Expanded Feed
                </button>
              </div>
            </div>

            {/* Camera Streams Grid Container */}
            <div className={`grid gap-4 ${feedLayout === 'GRID' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {cameras.map((cam) => {
                const isSelected = cam.id === selectedCameraId;
                return (
                  <div
                    key={cam.id}
                    onClick={() => setSelectedCameraId(cam.id)}
                    className={`relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-cyan-500 shadow-xl shadow-cyan-500/20 ring-1 ring-cyan-500'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    } ${isInfrared ? 'bg-emerald-950/90' : 'bg-slate-950'}`}
                  >
                    {/* Simulated Camera Video Frame */}
                    <div className="relative h-56 w-full flex items-center justify-center overflow-hidden">
                      
                      {/* Grid background simulation */}
                      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                      
                      {/* Road Geometry Graphic */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-70">
                        <div className="w-20 h-full bg-slate-900 border-x border-slate-800 relative">
                          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-slate-700"></div>
                        </div>
                        <div className="h-20 w-full bg-slate-900 border-y border-slate-800 absolute top-1/2 -translate-y-1/2">
                          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-700"></div>
                        </div>
                      </div>

                      {/* Computer Vision Bounding Box Overlay */}
                      {showBoundingBoxes &&
                        cam.boxes.map((box) => (
                          <div
                            key={box.id}
                            style={{ left: `${box.x}%`, top: `${box.y}%` }}
                            className={`absolute rounded px-1.5 py-0.5 text-[9px] font-mono font-bold border transition-all duration-700 ${
                              box.type === 'ambulance' || box.type === 'police'
                                ? 'border-red-500 bg-red-950/80 text-red-200 animate-pulse shadow-md shadow-red-500/50'
                                : box.type === 'bus'
                                ? 'border-purple-400 bg-purple-950/80 text-purple-200'
                                : isInfrared
                                ? 'border-emerald-400 bg-emerald-900/80 text-emerald-200'
                                : 'border-cyan-400 bg-slate-900/90 text-cyan-200'
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              <span className="uppercase">{box.type}</span>
                              <span className="opacity-80">[{box.speedKmH}km/h]</span>
                            </div>
                          </div>
                        ))}

                      {/* Top Overlay Banner */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800/80 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="font-bold text-white">{cam.name}</span>
                        </div>
                        <span className="text-cyan-400 font-semibold">{cam.resolution}</span>
                      </div>

                      {/* Bottom Overlay Info */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono bg-slate-950/90 px-2.5 py-1 rounded border border-slate-800">
                        <span className="text-slate-300">
                          DETECTED: <strong className="text-white">{cam.boxes.length} VEHICLES</strong>
                        </span>
                        <span
                          className={`font-bold px-1.5 py-0.5 rounded ${
                            cam.congestionLevel === 'HEAVY'
                              ? 'bg-red-500/20 text-red-400'
                              : cam.congestionLevel === 'MODERATE'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-emerald-500/20 text-emerald-400'
                          }`}
                        >
                          {cam.congestionLevel} FLOW
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Signal Controller & Live Adaptive Timing (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Intersection Signal Controller Box */}
            <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 p-5 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-cyan-400">
                    SMART SIGNAL CONTROLLER
                  </div>
                  <h3 className="text-base font-bold text-white">{activeSignal.name}</h3>
                </div>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle className="h-3 w-3" />
                  AI AUTO
                </span>
              </div>

              {/* Traffic Light State Graphic */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-around">
                
                {/* Traffic Light Signal Stand */}
                <div className="bg-slate-900 border-2 border-slate-700 p-2.5 rounded-2xl flex flex-col gap-2 items-center shadow-inner">
                  {/* Red Light */}
                  <div className={`h-6 w-6 rounded-full transition-all duration-300 ${emergencyOverrideActive ? 'bg-red-950 opacity-40' : signalCountdown < 5 ? 'bg-red-500 shadow-lg shadow-red-500/80 animate-pulse' : 'bg-red-950/60 opacity-30'}`} />
                  {/* Yellow Light */}
                  <div className={`h-6 w-6 rounded-full transition-all duration-300 ${signalCountdown >= 5 && signalCountdown <= 8 ? 'bg-yellow-400 shadow-lg shadow-yellow-400/80 animate-pulse' : 'bg-yellow-950/60 opacity-30'}`} />
                  {/* Green Light */}
                  <div className={`h-6 w-6 rounded-full transition-all duration-300 ${emergencyOverrideActive || signalCountdown > 8 ? 'bg-emerald-400 shadow-lg shadow-emerald-400/80 animate-pulse' : 'bg-emerald-950/60 opacity-30'}`} />
                </div>

                {/* Live Countdown & Phase readout */}
                <div className="space-y-2 text-left">
                  <div className="text-[11px] font-mono text-slate-400">ACTIVE PHASE TIMER</div>
                  <div className="text-4xl font-mono font-extrabold text-cyan-400">
                    {signalCountdown}<span className="text-sm text-slate-400 font-normal">sec</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {emergencyOverrideActive ? (
                      <span className="text-red-400 font-bold flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        EVP GREEN WAVE OVERRIDE
                      </span>
                    ) : (
                      <span>Phase: North-South Green Light</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Efficiency Score: <strong className="text-emerald-400">96 / 100</strong>
                  </div>
                </div>

              </div>

              {/* Dynamic Queue & Green Duration Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Adaptive Green Light Duration:</span>
                  <span className="font-mono font-bold text-cyan-400">{greenLightDurationSec}s</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  value={greenLightDurationSec}
                  onChange={(e) => setGreenLightDurationSec(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <p className="text-[11px] text-slate-400 italic">
                  AI dynamically scales cycle duration between 15s - 90s based on queue growth rates.
                </p>
              </div>

              {/* Emergency Corridor Pre-emption Interactive Button */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={handleTriggerEmergency}
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                    emergencyOverrideActive
                      ? 'bg-red-600 text-white shadow-red-500/40 animate-pulse'
                      : 'bg-slate-800 text-slate-200 hover:bg-red-600/20 hover:text-red-300 border border-slate-700 hover:border-red-500/50'
                  }`}
                >
                  <ShieldAlert className="h-4 w-4" />
                  {emergencyOverrideActive
                    ? 'CANCEL EMERGENCY GREEN WAVE'
                    : 'TRIGGER EMERGENCY CORRIDOR (EVP DEMO)'}
                </button>
              </div>

            </div>

            {/* Node Queue Status Table */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                APPROACH QUEUE LENGTHS
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Northbound Approach:</span>
                  <span className="font-mono font-bold text-cyan-400">45m (7 cars)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[40%]" />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400">Eastbound Approach (Heavy):</span>
                  <span className="font-mono font-bold text-amber-400">85m (14 cars)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[75%]" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 24-Hour Traffic Throughput & CO2 Analytics Chart */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gauge className="h-5 w-5 text-cyan-400" />
                24-Hour Network Traffic Throughput & Efficiency
              </h3>
              <p className="text-xs text-slate-400">
                Comparing AI-Adaptive PulseTraffic timing vs legacy fixed-timer controllers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setChartMetric('throughput')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  chartMetric === 'throughput'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                Vehicles / Hour
              </button>
              <button
                onClick={() => setChartMetric('delay')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  chartMetric === 'delay'
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                Avg Delay (Sec)
              </button>
              <button
                onClick={() => setChartMetric('co2')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  chartMetric === 'co2'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                CO2 Reduction (Kg)
              </button>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HOURLY_TRAFFIC_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f2fe" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="legacyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#00f2fe', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                
                {chartMetric === 'throughput' && (
                  <>
                    <Area type="monotone" dataKey="aiThroughput" name="PulseTraffic AI Throughput (vph)" stroke="#00f2fe" strokeWidth={2.5} fillOpacity={1} fill="url(#aiGradient)" />
                    <Area type="monotone" dataKey="legacyThroughput" name="Legacy Static Timing (vph)" stroke="#64748b" strokeWidth={1.5} fillOpacity={1} fill="url(#legacyGradient)" />
                  </>
                )}

                {chartMetric === 'delay' && (
                  <Area type="monotone" dataKey="avgDelaySec" name="Avg Queue Delay Time (Sec)" stroke="#a855f7" strokeWidth={2.5} fillOpacity={1} fill="url(#aiGradient)" />
                )}

                {chartMetric === 'co2' && (
                  <Area type="monotone" dataKey="co2ReductionKg" name="CO2 Saved per Hour (Kg)" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#aiGradient)" />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </section>
  );
};

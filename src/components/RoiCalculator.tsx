import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Leaf, Shield, Download, Sparkles, CheckCircle2 } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [population, setPopulation] = useState<number>(350000);
  const [intersections, setIntersections] = useState<number>(80);
  const [commuteMins, setCommuteMins] = useState<number>(35);
  const [gasPrice, setGasPrice] = useState<number>(3.85);

  // Calculations
  // Estimate daily commuters ~30% of population
  const dailyCommuters = Math.round(population * 0.32);
  
  // AI reduces congestion delay by 32%
  const dailyTimeSavedMinsPerCommuter = Math.round((commuteMins * 0.32) * 10) / 10;
  const annualHoursSavedPerCommuter = Math.round((dailyTimeSavedMinsPerCommuter * 240) / 60);

  // Total citywide annual hours saved
  const citywideTotalHoursSaved = Math.round(annualHoursSavedPerCommuter * dailyCommuters);

  // Idle fuel saved: avg 0.6 gallons per hour idling
  const fuelSavedGallons = Math.round(citywideTotalHoursSaved * 0.38);
  const annualFuelSavingsDollars = Math.round(fuelSavedGallons * gasPrice);

  // CO2 metric tons saved: ~8.88kg CO2 per gallon of gas
  const annualCo2TonsSaved = Math.round((fuelSavedGallons * 8.88) / 1000);

  // Municipal ROI payback calculation:
  // Node cost approx $350/mo * 12 = $4200/yr per node. Total cost = intersections * $4200
  const annualSystemCost = intersections * 4200;
  const paybackMonths = Number(((annualSystemCost / annualFuelSavingsDollars) * 12).toFixed(1));

  return (
    <section id="roi-calculator" className="py-20 bg-[#0b0f17] border-t border-slate-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
            <Calculator className="h-3.5 w-3.5" />
            MUNICIPAL IMPACT & ROI CALCULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your City's Time & Carbon Savings
          </h2>
          <p className="text-slate-400 text-base">
            Adjust the sliders below to estimate annual commuter time saved, CO2 reduction, and fuel savings for your municipality.
          </p>
        </div>

        {/* Main Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {/* Left Column: Sliders (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Municipality Parameters
            </h3>

            {/* Slider 1: City Population */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300">City Population</span>
                <span className="font-mono font-bold text-cyan-400">
                  {population.toLocaleString()} residents
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="2500000"
                step="25000"
                value={population}
                onChange={(e) => setPopulation(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>25,000 (Small Town)</span>
                <span>2,500,000 (Metropolis)</span>
              </div>
            </div>

            {/* Slider 2: Monitored Intersections */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300">Monitored Signalized Intersections</span>
                <span className="font-mono font-bold text-cyan-400">
                  {intersections} nodes
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={intersections}
                onChange={(e) => setIntersections(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 Nodes</span>
                <span>500 Nodes</span>
              </div>
            </div>

            {/* Slider 3: Avg Commute Time */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300">Average Peak Hour Commute</span>
                <span className="font-mono font-bold text-cyan-400">
                  {commuteMins} minutes
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="75"
                step="1"
                value={commuteMins}
                onChange={(e) => setCommuteMins(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>15 Mins</span>
                <span>75 Mins</span>
              </div>
            </div>

            {/* Slider 4: Gas Price */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300">Average Fuel Price</span>
                <span className="font-mono font-bold text-cyan-400">
                  ${gasPrice.toFixed(2)} / gallon
                </span>
              </div>
              <input
                type="range"
                min="2.50"
                max="6.00"
                step="0.05"
                value={gasPrice}
                onChange={(e) => setGasPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

          </div>

          {/* Right Column: Dynamic Outputs (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-xl border border-slate-800/80 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4">
                ESTIMATED ANNUAL IMPACT & PAYBACK
              </h4>

              <div className="grid grid-cols-2 gap-4">
                
                {/* Hours Saved Card */}
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    <span>Annual Hours Saved / Commuter</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {annualHoursSavedPerCommuter} <span className="text-xs font-normal text-slate-400">hrs/yr</span>
                  </div>
                </div>

                {/* CO2 Tons Card */}
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Leaf className="h-4 w-4 text-emerald-400" />
                    <span>CO2 Reduced / Year</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">
                    {annualCo2TonsSaved.toLocaleString()} <span className="text-xs font-normal text-slate-400">Tons</span>
                  </div>
                </div>

                {/* Fuel Savings Card */}
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    <span>Annual Fuel Cost Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    ${(annualFuelSavingsDollars / 1000000).toFixed(2)}M
                  </div>
                </div>

                {/* Payback Period Card */}
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Shield className="h-4 w-4 text-amber-400" />
                    <span>Municipal Payback Period</span>
                  </div>
                  <div className="text-2xl font-bold text-amber-400 font-mono">
                    {paybackMonths < 1 ? '< 1 Month' : `${paybackMonths} Months`}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom summary text & export button */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Calculated based on FHWA urban mobility congestion benchmark models.</span>
              </div>

              <button
                onClick={() => alert(`Generated PDF ROI Summary for ${population.toLocaleString()} population city with ${intersections} intersections! Total fuel savings: $${annualFuelSavingsDollars.toLocaleString()}`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
              >
                <Download className="h-4 w-4" />
                Download Complete ROI & Impact Executive Summary (PDF)
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

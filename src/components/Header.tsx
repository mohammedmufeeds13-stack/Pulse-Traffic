import React, { useState } from 'react';
import { Activity, Radio, Shield, LayoutDashboard, Sliders, Play, Bell } from 'lucide-react';

interface HeaderProps {
  currentView: 'marketing' | 'command_center';
  onViewChange: (view: 'marketing' | 'command_center') => void;
  onRequestDemo: () => void;
  unreadIncidentsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onRequestDemo,
  unreadIncidentsCount = 2,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Live Analytics', href: '#live-analytics' },
    { name: 'Core Capabilities', href: '#capabilities' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onViewChange('marketing')} 
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0b0f17]">
                <Activity className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">
                  Pulse<span className="text-cyan-400">Traffic</span>
                </span>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/30">
                  v3.4 AI
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </span>
                <span>Active City Grid: SF Metropolitan</span>
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 hover:border-b-2 hover:border-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Mode Switch */}
        <div className="flex items-center gap-3">
          
          {/* Mode Switcher pill */}
          <div className="hidden sm:flex items-center rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => onViewChange('marketing')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                currentView === 'marketing'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              SaaS Overview
            </button>
            <button
              onClick={() => onViewChange('command_center')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                currentView === 'command_center'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              Command Center
              {unreadIncidentsCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {unreadIncidentsCount}
                </span>
              )}
            </button>
          </div>

          {/* Request Demo Button */}
          <button
            onClick={onRequestDemo}
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-300 transition-all shadow-sm"
          >
            <Radio className="h-3.5 w-3.5 text-cyan-400" />
            Request Demo
          </button>

          {/* Primary CTA - Launch Dashboard / Command Toggle */}
          <button
            onClick={() => onViewChange(currentView === 'marketing' ? 'command_center' : 'marketing')}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {currentView === 'marketing' ? (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                Launch Dashboard
              </>
            ) : (
              <>
                <Shield className="h-3.5 w-3.5" />
                Back to Website
              </>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b0f17] px-4 pt-2 pb-4 space-y-3">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-xs font-medium text-slate-300">Switch App View</span>
            <div className="flex gap-1">
              <button
                onClick={() => { onViewChange('marketing'); setMobileMenuOpen(false); }}
                className={`px-2.5 py-1 text-xs rounded font-medium ${currentView === 'marketing' ? 'bg-cyan-500 text-white' : 'text-slate-400'}`}
              >
                Website
              </button>
              <button
                onClick={() => { onViewChange('command_center'); setMobileMenuOpen(false); }}
                className={`px-2.5 py-1 text-xs rounded font-medium ${currentView === 'command_center' ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
              >
                Command Center
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-slate-800/60 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => { onRequestDemo(); setMobileMenuOpen(false); }}
            className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-slate-800 text-cyan-300 border border-cyan-500/30"
          >
            Request Live Demo
          </button>
        </div>
      )}
    </header>
  );
};

'use client';

import React, { useState } from 'react';
import { Activity, Brain, ShieldCheck, ArrowRight, AlertCircle, Zap, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const ScreeningHub = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'lung',
      name: 'Lung Fluid Monitor',
      shortName: 'Pulmonary AI',
      desc: 'Deep learning analysis of chest X-rays for pulmonary edema, pneumonia, and fluid overload detection.',
      href: '/smart-screening/lung-monitor',
      icon: <Activity size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      status: 'Scan Recommended',
      statusColor: 'bg-orange-50 text-orange-700 border-orange-200',
      lastScan: '45 days ago',
      accuracy: '94%',
      processingTime: '~8 seconds'
    },
    {
      id: 'skin',
      name: 'Access Point Guard',
      shortName: 'DermGuard AI',
      desc: 'Real-time computer vision for fistula infections, diabetic ulcers, and vascular access complications.',
      href: '/smart-screening/derm-guard',
      icon: <ShieldCheck size={32} />,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      lightBg: 'bg-green-50',
      textColor: 'text-green-600',
      status: 'All Clear',
      statusColor: 'bg-green-50 text-green-700 border-green-200',
      lastScan: '7 days ago',
      accuracy: '92%',
      processingTime: '~5 seconds'
    },
    {
      id: 'neuro',
      name: 'Neuro Risk Assessment',
      shortName: 'Cerebral AI',
      desc: 'MRI-based stroke prediction analyzing white matter hyperintensities and cerebral small vessel disease.',
      href: '/smart-screening/neuro-risk',
      icon: <Brain size={32} />,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600',
      status: 'Scan Due',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
      lastScan: '30 days ago',
      accuracy: '89%',
      processingTime: '~12 seconds'
    },
  ];

  const stats = [
    { label: 'Total Scans', value: '1,247', change: '+12%', icon: <Zap size={16} /> },
    { label: 'Avg Accuracy', value: '91.7%', change: '+2.3%', icon: <TrendingUp size={16} /> },
    { label: 'Processing Time', value: '8.3s', change: '-15%', icon: <Clock size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 pt-28 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-md border border-slate-200 text-sm sm:text-base">
            <div className="relative">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-ping" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">AI Diagnostic Engine Online</span>
            <span className="text-xs text-slate-500 ml-1 hidden xs:inline">• 3 Models Active</span>
          </div>

          <div className="space-y-3 sm:space-y-4 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Smart Screening
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
                Comorbidity Intelligence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              Deep learning models trained on 500K+ medical images act as your 24/7 diagnostic assistant, detecting complications before they become critical.
            </p>
          </div>

          {/* Stats Bar - Responsive Grid */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 pt-2 sm:pt-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 bg-white px-3 sm:px-6 py-3 rounded-xl shadow-sm border border-slate-100"
              >
                <div className="p-1.5 sm:p-2 bg-blue-50 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs text-slate-500">{stat.label}</div>
                  <div className="flex items-baseline gap-1 sm:gap-2 justify-center sm:justify-start">
                    <span className="text-base sm:text-xl font-bold text-slate-900">{stat.value}</span>
                    <span className="text-xs text-green-600 font-semibold">{stat.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Grid - Single Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, idx) => (
            <div
              key={tool.id}
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <a href={tool.href} className="block h-full group">
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-slate-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                  
                  {/* Status Badge */}
                  <div className={`inline-flex self-start items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded-full border ${tool.statusColor} mb-4 sm:mb-6`}>
                    {tool.status === 'All Clear' && <CheckCircle2 size={12} />}
                    <span>{tool.status}</span>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${tool.lightBg} rounded-xl sm:rounded-2xl flex items-center justify-center ${tool.textColor} group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                      {tool.icon}
                    </div>
                    {hoveredTool === tool.id && (
                      <div className={`absolute -inset-2 rounded-3xl bg-linear-to-br ${tool.gradient} opacity-20 -z-10 blur-xl`} />
                    )}
                  </div>

                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                        {tool.name}
                      </h2>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {tool.shortName}
                      </p>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {tool.desc}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 pt-3 sm:pt-4 border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Accuracy</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">{tool.accuracy}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Speed</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">{tool.processingTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`mt-4 sm:mt-6 flex items-center justify-between p-3 sm:p-4 ${tool.lightBg} rounded-xl group-hover:${tool.bgColor} group-hover:text-white transition-all duration-300 text-slate-700`}>
                    <span className="font-bold text-sm sm:text-base">Launch Screening</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Last Scan Info */}
                  <div className="mt-3 sm:mt-4 text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} />
                    Last scan: {tool.lastScan}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-blue-50 to-purple-50 border-2 border-blue-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="p-2 bg-blue-600 rounded-lg text-white shrink-0">
                <AlertCircle size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Medical Disclaimer</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  These AI-powered screening tools are designed to <strong>assist healthcare professionals</strong> in early detection of complications. They do not replace clinical judgment or diagnostic procedures. <strong>Results should always be reviewed by a qualified physician.</strong> In case of medical emergency, contact your dialysis center immediately or call emergency services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="text-center p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <CheckCircle2 className="text-green-600" size={20} />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">FDA Compliant</h4>
            <p className="text-xs text-slate-600">Models trained on anonymized, HIPAA-compliant datasets</p>
          </div>

          <div className="text-center p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Zap className="text-blue-600" size={20} />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Real-time Results</h4>
            <p className="text-xs text-slate-600">Get analysis in under 15 seconds with confidence scores</p>
          </div>

          <div className="text-center p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Brain className="text-purple-600" size={20} />
            </div>
            <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Deep Learning</h4>
            <p className="text-xs text-slate-600">CNNs trained on 500K+ validated medical images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreeningHub;
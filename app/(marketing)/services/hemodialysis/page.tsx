'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Droplets, Wifi, Coffee, MonitorPlay, CalendarCheck } from 'lucide-react';

const HemodialysisPage = () => {
  return (
    <div className="min-h-screen bg-white pt-28">
      <header className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Core Services</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Advanced Hemodialysis</h1>
                <p className="text-lg text-slate-600 mb-8">
                    Experience dialysis reimagined. High-flux membranes, ultrapure water, and a serene environment designed to make your treatment time your own.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20">
                    Book a Session
                </button>
            </div>
            <div className="relative">
                 <div className="aspect-video bg-white rounded-2xl shadow-2xl border border-blue-100 flex items-center justify-center p-8">
                    <Activity className="text-blue-500 w-full h-full opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="text-center">
                            <Droplets size={48} className="text-blue-600 mx-auto mb-2" />
                            <span className="font-bold text-slate-700">High-Flux Dialysis</span>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">The Nephrocare Standard</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                    icon: <Activity size={32} />,
                    title: "Hemodiafiltration (HDF)",
                    desc: "We offer online HDF, the gold standard in renal replacement therapy, for better toxin removal."
                },
                {
                    icon: <Droplets size={32} />,
                    title: "Ultrapure Water",
                    desc: "Our double-pass RO systems ensure the water used is 100% free of endotoxins."
                },
                {
                    icon: <CalendarCheck size={32} />,
                    title: "Flexible Scheduling",
                    desc: "Morning, afternoon, and nocturnal shifts available to suit your lifestyle."
                }
            ].map((feature, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
                >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">Comfort During Care</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Four hours is a long time. We've designed our stations to be private suites where you can work, rest, or be entertained.
                    </p>
                    <ul className="space-y-4">
                        {[
                            { icon: <Wifi />, text: "High-speed Wi-Fi" },
                            { icon: <MonitorPlay />, text: "Personal Entertainment Systems" },
                            { icon: <Coffee />, text: "Nutrionist-approved Snacks" },
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                                <div className="text-blue-400">{item.icon}</div>
                                <span className="font-medium">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2">
                     <div className="h-100 w-full bg-slate-800 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                            [Image: Patient comfortably reclining with iPad]
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HemodialysisPage;
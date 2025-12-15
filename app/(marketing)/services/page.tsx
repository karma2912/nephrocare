'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Plane, ArrowRight, CheckCircle2, Stethoscope, Globe } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6"
        >
            <Stethoscope size={16} />
            <span>World-Class Renal Care</span>
        </motion.div>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
            Choose Your Care Path
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
            Whether you need routine clinical excellence or the freedom to travel while on treatment, NephroCare has a solution for you.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={180} />
            </div>

            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={32} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Advanced Hemodialysis</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Experience the gold standard in renal replacement therapy. Our centers feature high-flux hemodiafiltration (HDF) and ultra-pure water systems for the safest possible treatment.
            </p>

            <ul className="space-y-4 mb-10">
                {['High-Flux Membranes', 'Private Treatment Suites', 'Real-time AI Monitoring'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                        {item}
                    </li>
                ))}
            </ul>

            <Link href="/services/hemodialysis" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg group-hover:gap-4 transition-all">
                View Clinical Details <ArrowRight size={20} />
            </Link>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-800 hover:shadow-2xl transition-all duration-300 overflow-hidden text-white"
        >
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 to-slate-900/80 z-0" />
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Globe size={180} />
            </div>

            <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-300 mb-8 group-hover:bg-white group-hover:text-blue-900 transition-colors">
                    <Plane size={32} />
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Holiday Dialysis</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Don't let kidney disease ground you. Access our global network of 4,000+ certified centers. We handle the medical records so you can handle the vacation.
                </p>

                <ul className="space-y-4 mb-10">
                    {['Global Clinic Network', 'Seamless Record Transfer', 'Multi-lingual Support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-blue-50 font-medium">
                            <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                            {item}
                        </li>
                    ))}
                </ul>

                <Link href="/services/holiday-dialysis" className="inline-flex items-center gap-2 text-white font-bold text-lg group-hover:gap-4 transition-all">
                    Start Planning Trip <ArrowRight size={20} />
                </Link>
            </div>
        </motion.div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-24">
         <p className="text-slate-500 mb-4">Not sure which service fits your needs?</p>
         <button className="text-slate-900 font-semibold underline decoration-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 transition-colors">
            Schedule a free consultation with our Patient Coordinator
         </button>
      </div>

    </div>
  );
};

export default ServicesPage;
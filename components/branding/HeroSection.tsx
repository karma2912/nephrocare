'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm"
          >
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-600"> #1 Ranked Renal Care Network</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]"
          >
            Renal health, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
              Future-proofed.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-lg leading-relaxed"
          >
            Combine world-class dialysis care with our new AI-powered early detection systems. Your kidneys deserve the best science has to offer.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/20">
              <Activity size={20} />
              Check Your Risk (AI)
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-colors">
              Book Consultation <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="pt-8 border-t border-slate-200 flex items-center gap-8 text-sm font-medium text-slate-500">
             <span>Trusted by 10,000+ Patients</span>
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                ))}
             </div>
          </div>
        </div>

        {/* Visual / Image Area */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-125 bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
            {/* Placeholder for Hero Image */}
            <div className="absolute inset-0 bg-linear-to-tr from-slate-800 to-transparent z-10 opacity-40" />
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-slate-500 uppercase">System Status</span>
                </div>
                <p className="font-bold text-slate-800">AI Screening Active</p>
                <p className="text-sm text-slate-600">Upload reports for instant analysis.</p>
            </div>
            {/* Actual image goes here */}
            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400">
                [High-Quality Doctor/Patient Image]
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
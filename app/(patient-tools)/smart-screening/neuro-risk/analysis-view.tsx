'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Activity, FileText } from 'lucide-react';

const AnalysisView = () => {
  const [step, setStep] = useState(1); // 1: Upload, 2: Processing, 3: Result

  return (
    <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 min-h-125 flex flex-col relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[20px_20px]" />

      {/* Step 1: Upload */}
      {step === 1 && (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center z-10"
        >
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Brain size={48} className="text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Upload MRI Sequence</h2>
            <button 
                onClick={() => setStep(2)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
            >
                <Upload size={18} /> Select Files
            </button>
        </motion.div>
      )}

      {/* Step 2: Processing */}
      {step === 2 && (
        <motion.div 
             onAnimationComplete={() => setTimeout(() => setStep(3), 3000)}
             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
             className="flex-1 flex flex-col items-center justify-center z-10"
        >
             <div className="relative w-32 h-32 mb-8">
                <motion.div 
                    className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
                />
                <motion.div 
                    className="absolute inset-0 border-t-4 border-purple-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-mono text-purple-400">ANALYZING</span>
                </div>
             </div>
             <div className="space-y-2 text-center">
                <p className="text-slate-400 text-sm">Mapping White Matter Hyperintensities...</p>
                <p className="text-slate-500 text-xs">Segmenting Ventricles...</p>
             </div>
        </motion.div>
      )}

      {/* Step 3: Result Dashboard */}
      {step === 3 && (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex-1 z-10"
        >
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="text-green-500" /> Analysis Report
                </h3>
                <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20">
                    Low Risk Profile
                </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 text-xs uppercase tracking-wider block mb-2">Total Stroke Risk</span>
                    <div className="text-4xl font-bold text-white mb-1">12<span className="text-lg text-slate-500">%</span></div>
                    <p className="text-xs text-slate-400">Within normal range for age group.</p>
                </div>
                
                <div className="col-span-2 md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 text-xs uppercase tracking-wider block mb-2">WMH Volume</span>
                    <div className="text-4xl font-bold text-white mb-1">1.2<span className="text-lg text-slate-500">ml</span></div>
                    <p className="text-xs text-slate-400">Minimal structural change detected.</p>
                </div>

                <div className="col-span-2 bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FileText className="text-purple-400" />
                        <div className="text-sm">
                            <p className="text-white font-medium">Download Detailed PDF</p>
                            <p className="text-slate-500">Includes slice-by-slice segmentation.</p>
                        </div>
                    </div>
                    <button className="text-sm text-purple-400 hover:text-purple-300 font-bold">Download</button>
                </div>
            </div>

            <button 
                onClick={() => setStep(1)}
                className="mt-8 text-slate-500 hover:text-white text-sm w-full text-center"
            >
                Process New Scan
            </button>
        </motion.div>
      )}

    </div>
  );
};

export default AnalysisView;
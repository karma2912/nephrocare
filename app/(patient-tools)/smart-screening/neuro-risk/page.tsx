'use client';

import React from 'react';
import Link from 'next/link';
import AnalysisView from './analysis-view';
import { ChevronLeft, Database, Share2 } from 'lucide-react';

export default function NeuroRiskPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/smart-screening" className="flex items-center text-slate-400 hover:text-white transition-colors">
            <ChevronLeft size={20} className="mr-2" /> 
            <span className="text-sm font-medium uppercase tracking-widest">Return to Hub</span>
          </Link>
          <div className="flex gap-4">
             <button className="p-2 text-slate-400 hover:text-white"><Database size={20}/></button>
             <button className="p-2 text-slate-400 hover:text-white"><Share2 size={20}/></button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Panel: Info */}
            <div className="lg:col-span-1 space-y-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">Neuro</span> <br/>
                        Risk Engine
                    </h1>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Automated quantification of White Matter Hyperintensities (WMH) using T2-FLAIR MRI sequences.
                    </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Parameters</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
                            <span className="text-slate-500">Sequence</span>
                            <span className="text-purple-300">T2-FLAIR</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
                            <span className="text-slate-500">Slice Thickness</span>
                            <span className="text-purple-300">Max 5mm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Format</span>
                            <span className="text-purple-300">DICOM / NIfTI</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: The Visualization */}
            <div className="lg:col-span-2">
                <AnalysisView />
            </div>
        </div>
      </div>
    </div>
  );
}
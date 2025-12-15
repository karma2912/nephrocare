'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Info } from 'lucide-react';
import UploadForm from './upload-form';

export default function LungMonitorPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <Link href="/smart-screening" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ChevronLeft size={20} className="mr-1" /> Back to Hub
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Context & Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">Chest Radiography Analysis</span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Fluid Overload Detection</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our Deep Learning model (DenseNet-121) scans for pulmonary edema signs, specifically Kerley B-lines and pleural effusion, to help manage your dry weight.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                <Info size={18} className="text-blue-500" /> Submission Guidelines
              </h3>
              <ul className="space-y-3">
                {['PA (Posterior-Anterior) View only', 'Ensure patient is upright', 'Remove metallic objects (necklaces)', 'Supported formats: DICOM, JPEG, PNG'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: The Interactive Tool */}
          <div className="lg:col-span-7">
             <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-150 flex flex-col">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">System Ready</span>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                   </div>
                </div>
                <UploadForm />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
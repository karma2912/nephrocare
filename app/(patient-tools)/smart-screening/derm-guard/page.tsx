'use client';

import React from 'react';
import CameraView from './camera-view';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function DermGuardPage() {
  return (
    // Note: Dark background for better "Scanner" feel
    <div className="min-h-screen bg-slate-900 pt-28 pb-10 px-4 md:px-0">
      <div className="max-w-lg mx-auto h-[85vh] flex flex-col bg-black rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-800 relative">
        
        {/* Mobile-style Header inside the frame */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 flex items-center justify-between bg-linear-to-b from-black/80 to-transparent">
          <Link href="/smart-screening" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md">
            <ChevronLeft size={20} />
          </Link>
          <span className="font-bold text-white tracking-wide">DermGuard AI</span>
          <div className="w-9" /> {/* Spacer for balance */}
        </div>

        {/* The Camera Component takes full height */}
        <div className="flex-1 relative">
           <CameraView />
        </div>

      </div>
      
      <p className="text-center text-slate-500 mt-6 text-sm">
        For best results, place the fistula access point within the frame grid.
      </p>
    </div>
  );
}
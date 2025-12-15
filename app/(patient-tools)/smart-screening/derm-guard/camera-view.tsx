'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, Camera } from 'lucide-react';

const CameraView = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<'idle' | 'scanning' | 'safe' | 'danger'>('idle');

  const startScan = () => {
    setIsScanning(true);
    setResult('scanning');
    
    // Simulate scan process
    setTimeout(() => {
        setIsScanning(false);
        setResult('safe'); // Mock result
    }, 3000);
  };

  return (
    // CHANGE 1: Used 'h-full w-full' instead of 'flex-1' to ensure it fills the parent
    <div className="relative h-full w-full bg-slate-900 rounded-b-3xl overflow-hidden">
      
      {/* CHANGE 2: Added a fallback gradient + fixed height explicitly */}
      <div className="absolute inset-0 z-0">
          {/* Fallback Gradient (visible if image fails) */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900" />
          
          {/* Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')" }}
          />
      </div>
      
      {/* Scanning Line Animation */}
      {isScanning && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
      )}

      {/* Overlay UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8 z-30">
        
        {/* Guide Box */}
        <div className="w-64 h-64 border-2 border-white/30 rounded-3xl mt-12 flex items-center justify-center relative">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1 rounded-br-lg"></div>
            
            {result === 'safe' && (
                <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
                >
                    <Scan size={16} /> No Infection
                </motion.div>
            )}
        </div>

        {/* Controls */}
        <div className="w-full">
            {result === 'idle' && (
                <div className="text-center mb-6 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <p className="text-white font-medium text-sm">Align area within the frame</p>
                </div>
            )}
            
            <button 
                onClick={startScan}
                disabled={isScanning}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 active:scale-95 transform duration-100"
            >
                {isScanning ? (
                    <span className="animate-pulse">Analyzing Tissue...</span>
                ) : result === 'safe' ? (
                    <><Scan size={20} /> Scan Another Area</>
                ) : (
                    <><Camera size={20} /> Capture & Analyze</>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CameraView;
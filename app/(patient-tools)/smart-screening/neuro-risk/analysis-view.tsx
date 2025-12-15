'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Activity, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const AnalysisView = () => {
  const [step, setStep] = useState(1); // 1: Upload, 2: Processing, 3: Result
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      await analyzeMRI(file);
    }
  };

  const analyzeMRI = async (file: File) => {
    setStep(2); // Move to "Processing" animation immediately
    setResult(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      // 1. Send to Flask Backend (Brain Endpoint)
      const response = await fetch(`https://nephrocare-api.onrender.com/api/brain`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analysis Failed");
      }

      // 2. Set Data and Move to Results
      // Artificial delay to let the cool animation play for at least 2 seconds
      setTimeout(() => {
        setResult(data);
        setStep(3);
      }, 2000);

    } catch (error) {
      console.error(error);
      alert("Failed to connect to Brain Analysis Model. Is app.py running?");
      setStep(1); // Go back to upload
    }
  };

  return (
    <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 min-h-150 flex flex-col relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[20px_20px]" />

      {/* Hidden Input for File Upload */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Step 1: Upload */}
      {step === 1 && (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center z-10"
        >
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Brain size={48} className="text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Upload MRI Sequence</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                Upload a T2-weighted MRI scan (DICOM, JPG, PNG) to detect anomalies like gliomas or meningiomas.
            </p>
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-purple-900/20"
            >
                <Upload size={18} /> Select Files
            </button>
        </motion.div>
      )}

      {/* Step 2: Processing */}
      {step === 2 && (
        <motion.div 
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
                    <span className="text-xs font-mono text-purple-400 animate-pulse">ANALYZING</span>
                </div>
             </div>
             <div className="space-y-2 text-center">
                <p className="text-slate-400 text-sm">Mapping Neural Structures...</p>
                <p className="text-slate-500 text-xs">Running DenseNet-121 Inference...</p>
             </div>
        </motion.div>
      )}

      {/* Step 3: Result Dashboard */}
      {step === 3 && result && (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex-1 z-10 w-full"
        >
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                    <Activity className="text-green-500" /> Analysis Report
                </h3>
                {result.diagnosis === 'notumor' ? (
                    <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20 flex items-center gap-1">
                        <CheckCircle size={12} /> Normal Scan
                    </span>
                ) : (
                    <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20 flex items-center gap-1">
                        <AlertTriangle size={12} /> Abnormality Detected
                    </span>
                )}
            </div>

            <div className="grid grid-cols-2 gap-6">
                
                {/* Result Card 1: Diagnosis */}
                <div className="col-span-2 md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 text-xs uppercase tracking-wider block mb-2">Primary Diagnosis</span>
                    <div className="text-3xl font-bold text-white mb-1 capitalize">
                        {result.diagnosis}
                    </div>
                    <p className="text-xs text-slate-400">Classified by AI Model</p>
                </div>
                
                {/* Result Card 2: Confidence */}
                <div className="col-span-2 md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 text-xs uppercase tracking-wider block mb-2">Model Confidence</span>
                    <div className="text-3xl font-bold text-white mb-1">
                        {(result.confidence * 100).toFixed(1)}<span className="text-lg text-slate-500">%</span>
                    </div>
                    <p className="text-xs text-slate-400">Probability score</p>
                </div>

                {/* Heatmap Visualization */}
                <div className="col-span-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <FileText className="text-purple-400" size={16} />
                        <span className="text-sm font-bold text-white">Localization Heatmap (GradCAM)</span>
                    </div>
                    
                    <div className="h-64 w-full bg-black rounded-xl overflow-hidden border border-slate-700 relative group">
                        {/* Display Base64 Heatmap from Backend */}
                        <img 
                            src={`data:image/jpeg;base64,${result.heatmap}`} 
                            alt="Brain MRI Heatmap"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                             <p className="text-white text-xs">
                                Red areas indicate regions contributing most to the diagnosis.
                             </p>
                        </div>
                    </div>
                </div>

                {/* AI Summary */}
                <div className="col-span-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                    <p className="text-slate-300 text-sm italic leading-relaxed">
                        "{result.ai_summary}"
                    </p>
                </div>
            </div>

            <button 
                onClick={() => {
                    setResult(null);
                    setStep(1);
                }}
                className="mt-8 text-slate-500 hover:text-white text-sm w-full text-center hover:underline"
            >
                Process New Scan
            </button>
        </motion.div>
      )}

    </div>
  );
};

export default AnalysisView;
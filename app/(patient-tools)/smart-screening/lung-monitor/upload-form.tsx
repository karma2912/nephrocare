'use client';

import React, { useState } from 'react';
import ModelUploader from '@/components/ai-tools/ModelUploader'; // Using your existing component
import ResultCard from '@/components/ai-tools/ResultCard';       // Using your existing component
import { motion } from 'framer-motion';

const LungUploadForm = () => {
  // In a real app, this state would be lifted or managed by the ModelUploader's onComplete callback
  // For demo purposes, we will simulate the flow here.
  
  // NOTE: You might need to adjust ModelUploader to accept an 'onAnalysisComplete' prop
  // or handle the state inside ModelUploader. 
  // Assuming ModelUploader handles the visual upload and we just show results for now:
  
  const [hasResult, setHasResult] = useState(false);

  // Mock function to simulate "Receiving data from Uploader"
  // You would pass this to ModelUploader
  const handleAnalysisComplete = () => {
    setTimeout(() => setHasResult(true), 2500); // Wait for the "loading" bar in Uploader
  };

  return (
    <div className="p-8 md:p-12">
      {!hasResult ? (
        <div className="space-y-8">
           {/* Instructions */}
           <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold block text-slate-800 mb-1">Correct View</span>
                Patient standing upright, PA view.
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold block text-slate-800 mb-1">File Size</span>
                Max 10MB (JPG, PNG, DCM).
              </div>
           </div>

           {/* The Component we made earlier */}
           {/* Add an onClick wrapper here just to demo the transition for the user */}
           <div onClick={handleAnalysisComplete}> 
             <ModelUploader />
             <p className="text-center text-xs text-slate-400 mt-4">(Click the upload box to simulate a successful analysis)</p>
           </div>
        </div>
      ) : (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Analysis Results</h3>
            <button 
                onClick={() => setHasResult(false)}
                className="text-sm text-blue-600 font-medium hover:underline"
            >
                Upload Another
            </button>
          </div>

          <ResultCard 
            score={72} 
            riskLevel="Moderate" 
            biomarkers={[
                { name: 'Fluid Accumulation', value: 'Detected (Base)', status: 'warning' },
                { name: 'Cardiomegaly', value: 'Negative', status: 'ok' },
                { name: 'Lung Clarity', value: '85%', status: 'ok' }
            ]} 
          />
        </motion.div>
      )}
    </div>
  );
};

export default LungUploadForm;
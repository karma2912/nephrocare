'use client';

import React, { useState } from 'react';
import ModelUploader from '@/components/ai-tools/ModelUploader';
import ResultCard from '@/components/ai-tools/ResultCard';
import { motion } from 'framer-motion';
import { Loader2, AlertTriangle } from 'lucide-react';

const LungUploadForm = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (file: File) => {
    setLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      // 1. Send to your Flask Backend
      const response = await fetch(`https://nephrocare-api.onrender.com/api/chest`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Prediction failed');

      // 2. Set the data from Flask
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError('Failed to connect to AI Server. Is app.py running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 md:p-12">
      {!result ? (
        <div className="space-y-8">
           <ModelUploader onFileSelect={handleUpload} /> 
           
           {loading && (
             <div className="text-center space-y-3">
               <Loader2 className="animate-spin h-8 w-8 text-blue-600 mx-auto" />
               <p className="text-blue-600 font-medium animate-pulse">
                 Analyzing Lung Opacity & Fluid Levels...
               </p>
             </div>
           )}

           {error && (
             <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2">
               <AlertTriangle size={20} /> {error}
             </div>
           )}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Analysis Results</h3>
            <button onClick={() => setResult(null)} className="text-sm text-blue-600 hover:underline">
                Upload Another
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: The AI Result Card */}
            <ResultCard 
                score={Math.round(result.confidence * 100)} 
                riskLevel={result.diagnosis === 'Normal' ? 'Low' : 'High'} 
                biomarkers={[
                    { name: 'Primary Diagnosis', value: result.diagnosis, status: result.diagnosis === 'Normal' ? 'ok' : 'warning' },
                    { name: 'Confidence', value: `${(result.confidence * 100).toFixed(1)}%`, status: 'ok' }
                ]} 
            />

            {/* Right: GradCAM Heatmap & Summary */}
            <div className="space-y-6">
                <div className="bg-slate-900 rounded-2xl p-1 overflow-hidden">
                    <p className="text-center text-white text-xs py-2 font-bold uppercase tracking-wider">AI Attention Heatmap</p>
                    {/* Display the Base64 Heatmap from Flask */}
                    <img 
                        src={`data:image/jpeg;base64,${result.heatmap}`} 
                        alt="AI Heatmap" 
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        🤖 AI Summary
                    </h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                        {result.ai_summary}
                    </p>
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LungUploadForm;
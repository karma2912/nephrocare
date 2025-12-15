'use client';

import React, { useState, useCallback } from 'react';
import { UploadCloud, FileText, X, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ModelUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'complete'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (uploadedFile: File) => {
    setFile(uploadedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadStatus('uploading');
    setTimeout(() => setUploadStatus('complete'), 2000); // Simulate 2s processing
  };

  const resetUpload = () => {
    setFile(null);
    setUploadStatus('idle');
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode='wait'>
        {uploadStatus === 'idle' ? (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`
                    relative border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer
                    ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'}
                `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => e.target.files && handleFile(e.target.files[0])} 
                />
                
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UploadCloud size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Upload Medical Record</h3>
                <p className="text-slate-500 text-sm mb-4">Drag & drop or click to upload</p>
                <p className="text-xs text-slate-400 uppercase tracking-wide">Supported: JPG, PDF, DICOM (Max 10MB)</p>
            </motion.div>
        ) : (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 truncate max-w-50">{file?.name}</p>
                            <p className="text-xs text-slate-500">{(file?.size! / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                    </div>
                    {uploadStatus === 'complete' && (
                        <button onClick={resetUpload} className="text-slate-400 hover:text-red-500">
                            <X size={20} />
                        </button>
                    )}
                </div>

                {uploadStatus === 'uploading' ? (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium animate-pulse">
                            <Loader2 size={16} className="animate-spin" />
                            Analyzing with AI Model...
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-blue-600"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2 }}
                            />
                        </div>
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3"
                    >
                        <CheckCircle size={20} />
                        <span className="font-semibold text-sm">Analysis Complete</span>
                    </motion.div>
                )}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelUploader;
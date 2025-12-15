'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scan, Camera, X, RefreshCcw, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const CameraView = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [permissionError, setPermissionError] = useState(false);
  
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  // 1. Initialize Camera on Mount
  useEffect(() => {
    startCamera();
    return () => stopCamera(); // Cleanup on unmount
  }, []);

  const startCamera = async () => {
    try {
      setPermissionError(false);
      // 'environment' requests the back camera on mobiles
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Camera Error:", err);
      setPermissionError(true);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  // 2. Capture Frame & Analyze
  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsScanning(true);
    setResult(null);

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to Blob (File)
      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
          await sendToBackend(file);
        }
      }, 'image/jpeg', 0.95); // 0.95 quality
    }
  };

  const sendToBackend = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch(`https://nephrocare-api.onrender.com/api/skin`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.error);
        
        // Artificial delay for the "Scanner" feel
        setTimeout(() => {
            setResult(data);
            setIsScanning(false);
        }, 1000);

    } catch (err) {
        console.error(err);
        alert("Server Error. Ensure Flask is running on port 5000.");
        setIsScanning(false);
    }
  };

  const resetScan = () => {
    setResult(null);
    setIsScanning(false);
    // Restart camera if it was stopped (optional, usually we keep it running)
  };

  return (
    <div className="relative h-full w-full bg-black rounded-b-3xl overflow-hidden flex flex-col">
      
      {/* HIDDEN CANVAS (Used for capturing the image) */}
      <canvas ref={canvasRef} className="hidden" />

      {/* VIDEO STREAM LAYER */}
      <div className="absolute inset-0 z-0">
        {!permissionError ? (
            <video 
                ref={videoRef}
                autoPlay 
                playsInline 
                muted
                className="w-full h-full object-cover"
            />
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-8 text-center">
                <AlertTriangle size={48} className="mb-4 text-yellow-500" />
                <p>Camera access denied or unavailable.</p>
                <button onClick={startCamera} className="mt-4 text-blue-400 underline">Try Again</button>
            </div>
        )}
      </div>

      {/* SCANNING ANIMATION LAYER */}
      {isScanning && (
        <div className="absolute inset-0 z-10">
            {/* The "Scanner Light" moving up and down */}
            <motion.div 
                className="absolute left-0 w-full h-1 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]"
                animate={{ top: ['10%', '90%', '10%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
            {/* Grid Overlay for tech feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
      )}

      {/* UI OVERLAY LAYER */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center pt-2">
            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                {isScanning ? 'ANALYZING...' : 'LIVE FEED'}
            </div>
            {result && (
                <button onClick={resetScan} className="bg-white/20 p-2 rounded-full text-white hover:bg-white/40 backdrop-blur-md transition">
                    <RefreshCcw size={20} />
                </button>
            )}
        </div>

        {/* Center: The Scanner Box (GPay Style) */}
        {!result && (
            <div className="relative w-64 h-64 border-2 border-white/50 rounded-3xl mx-auto flex items-center justify-center">
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-0.5 -ml-0.5 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-0.5 -mr-0.5 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-0.5 -ml-0.5 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-0.5 -mr-0.5 rounded-br-xl"></div>
                
                <p className="text-white/70 text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Align lesion here
                </p>
            </div>
        )}

        {/* Result Pop-up (If scan is done) */}
        {result && (
             <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 mx-4 mb-20"
             >
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl shrink-0 ${result.diagnosis === 'Benign' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {result.diagnosis === 'Benign' ? <CheckCircle size={32} /> : <AlertTriangle size={32} />}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{result.diagnosis}</h3>
                        <p className="text-slate-500 text-sm mt-1">
                            Confidence: <span className="font-bold text-slate-900">{(result.confidence * 100).toFixed(1)}%</span>
                        </p>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                            {result.ai_summary ? result.ai_summary.slice(0, 80) + "..." : "AI Analysis complete."}
                        </p>
                    </div>
                </div>
             </motion.div>
        )}

        {/* Bottom Controls */}
        <div className="w-full pb-4">
            {!result ? (
                <button 
                    onClick={captureAndAnalyze}
                    disabled={isScanning || permissionError}
                    className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                    {isScanning ? (
                        <span className="animate-pulse">Scanning...</span>
                    ) : (
                        <><Scan size={20} /> Capture & Analyze</>
                    )}
                </button>
            ) : (
                <button 
                    onClick={resetScan}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 border border-slate-700"
                >
                    <RefreshCcw size={20} /> New Scan
                </button>
            )}
        </div>

      </div>
    </div>
  );
};

export default CameraView;
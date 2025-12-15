import React from 'react';
import { AlertCircle, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { clsx } from 'clsx';

interface ResultCardProps {
  score: number; // 0 to 100
  riskLevel: 'Low' | 'Moderate' | 'High';
  biomarkers: { name: string; value: string; status: 'ok' | 'warning' }[];
}

const ResultCard: React.FC<ResultCardProps> = ({ score, riskLevel, biomarkers }) => {
  
  // Dynamic styling based on risk
  const styles = {
    Low: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle2 },
    Moderate: { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', icon: Info },
    High: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: AlertCircle },
  };

  const CurrentStyle = styles[riskLevel];
  const Icon = CurrentStyle.icon;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden max-w-lg mx-auto">
      {/* Header */}
      <div className={clsx("p-6 border-b", CurrentStyle.bg, CurrentStyle.border)}>
        <div className="flex items-center justify-between mb-4">
            <span className={clsx("font-bold text-sm uppercase tracking-wider", CurrentStyle.color)}>
                AI Analysis Report
            </span>
            <Icon className={CurrentStyle.color} size={24} />
        </div>
        <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-bold text-slate-900">{score}%</h2>
            <span className="text-slate-600 font-medium">Kidney Health Score</span>
        </div>
        <p className="text-slate-600 mt-2 text-sm">
            Based on the uploaded clinical data, the patient falls into the 
            <strong className={clsx("mx-1", CurrentStyle.color)}>{riskLevel} Risk</strong> category.
        </p>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
            <TrendingUp size={16} /> Key Biomarkers
        </h3>
        <div className="space-y-3">
            {biomarkers.map((bio, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-700 font-medium">{bio.name}</span>
                    <div className="flex items-center gap-3">
                        <span className="text-slate-900 font-bold">{bio.value}</span>
                        <div className={clsx(
                            "w-2 h-2 rounded-full",
                            bio.status === 'ok' ? "bg-green-500" : "bg-orange-500"
                        )} />
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8">
            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                Consult a Nephrologist
            </button>
            <p className="text-xs text-center text-slate-400 mt-3">
                *This result is AI-generated and not a medical diagnosis.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
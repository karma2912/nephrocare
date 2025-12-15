'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Calendar, ArrowRight, Stethoscope, Filter, Clock } from 'lucide-react';
import Image from 'next/image';

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    role: 'Chief Nephrologist',
    specialty: 'Kidney Transplants',
    exp: '15 Years',
    rating: 4.9,
    reviews: 124,
    location: 'New York, NY',
    available: 'Today',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 2,
    name: 'Dr. James Alistair',
    role: 'Clinical Director',
    specialty: 'Hemodialysis Care',
    exp: '22 Years',
    rating: 5.0,
    reviews: 89,
    location: 'London, UK',
    available: 'Tomorrow',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    role: 'Renal Dietitian',
    specialty: 'CKD Nutrition',
    exp: '8 Years',
    rating: 4.8,
    reviews: 210,
    location: 'San Francisco, CA',
    available: 'Available Now',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 4,
    name: 'Dr. Michael Ross',
    role: 'Interventional Nephrologist',
    specialty: 'Vascular Access',
    exp: '12 Years',
    rating: 4.7,
    reviews: 76,
    location: 'Chicago, IL',
    available: 'Mon, Wed, Fri',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 5,
    name: 'Dr. Anita Roy',
    role: 'Pediatric Nephrologist',
    specialty: 'Child Renal Care',
    exp: '18 Years',
    rating: 4.9,
    reviews: 150,
    location: 'Mumbai, IN',
    available: 'Today',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 6,
    name: 'Dr. Robert Stone',
    role: 'Transplant Surgeon',
    specialty: 'Robotic Surgery',
    exp: '25 Years',
    rating: 5.0,
    reviews: 312,
    location: 'Berlin, DE',
    available: 'Next Week',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

const DoctorsPage = () => {
  const [activeTab, setActiveTab] = useState('All Specialists');
  const filters = ['All Specialists', 'Nephrologists', 'Surgeons', 'Dietitians', 'Pediatric'];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans">
      
      <div className="max-w-7xl mx-auto mb-16 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Meet Our Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            World-class care starts with world-class doctors. Find a specialist near you.
          </motion.p>
        </div>

        <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white p-2 rounded-full shadow-lg border border-slate-200 flex items-center"
        >
            <div className="pl-6 text-slate-400">
                <Search size={20} />
            </div>
            <input 
                type="text" 
                placeholder="Search by doctor name, specialty, or condition..." 
                className="flex-1 px-4 py-3 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Find Doctor
            </button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f, i) => (
                <button 
                    key={f}
                    onClick={() => setActiveTab(f)}
                    className={`
                        px-5 py-2 rounded-full text-sm font-semibold transition-all border
                        ${activeTab === f 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}
                    `}
                >
                    {f}
                </button>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOCTORS.map((doc, idx) => (
            <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-slate-100">
                        <img 
                            src={doc.image} 
                            alt={doc.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {doc.available === 'Available Now' || doc.available === 'Today' ? (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            {doc.available}
                        </span>
                    ) : (
                        <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <Clock size={12} /> {doc.available}
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-1">{doc.role}</p>
                    <p className="text-slate-500 text-sm mb-4">{doc.specialty}</p>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl">
                        <div className="flex items-center gap-1">
                            <Star size={14} className="text-orange-400 fill-orange-400" />
                            <span className="font-bold text-slate-900">{doc.rating}</span>
                            <span className="text-slate-400">({doc.reviews})</span>
                        </div>
                        <div className="w-px h-4 bg-slate-300" />
                        <div className="font-medium">{doc.exp} Exp.</div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin size={16} className="text-slate-400" /> {doc.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Stethoscope size={16} className="text-slate-400" /> NephroCare Certified
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                    <button className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        View Profile
                    </button>
                    <button className="py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                        Book Now <ArrowRight size={14} />
                    </button>
                </div>
            </motion.div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto mt-24 bg-blue-900 rounded-[2.5rem] p-12 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 p-12 opacity-10">
              <Stethoscope size={300} className="text-white" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Are you a Nephrologist?</h2>
                  <p className="text-blue-200 text-lg mb-8">
                      Join the world's leading renal care network. Get access to our AI diagnostic tools and a global patient base.
                  </p>
                  <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                      Apply to Join Network
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};

export default DoctorsPage;
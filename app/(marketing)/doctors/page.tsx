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

export default function DoctorsPage (){
  const [activeTab, setActiveTab] = useState('All Specialists');
  const filters = ['All Specialists', 'Nephrologists', 'Surgeons', 'Dietitians', 'Pediatric'];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 font-sans">
      
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 space-y-6 md:space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-4"
          >
            Meet Our Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 px-4"
          >
            World-class care starts with world-class doctors. Find a specialist near you.
          </motion.p>
        </div>

        {/* Search Bar - Mobile Optimized */}
        <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white p-1.5 md:p-2 rounded-full shadow-lg border border-slate-200 flex items-center"
        >
            <div className="pl-4 md:pl-6 text-slate-400">
                <Search size={18} className="md:w-5 md:h-5" />
            </div>
            <input 
                type="text" 
                placeholder="Search doctors..." 
                className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-transparent outline-none text-sm md:text-base text-slate-700 placeholder:text-slate-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-base whitespace-nowrap">
                Find
            </button>
        </motion.div>

        {/* Filter Tabs - Mobile Scrollable */}
        <div className="flex overflow-x-auto gap-2 md:gap-3 pb-2 md:pb-0 scrollbar-hide justify-start md:justify-center px-1">
            {filters.map((f, i) => (
                <button 
                    key={f}
                    onClick={() => setActiveTab(f)}
                    className={`
                        px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all border whitespace-nowrap shrink-0
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

      {/* Doctor Cards Grid - Mobile Optimized */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {DOCTORS.map((doc, idx) => (
            <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-100 shrink-0">
                        <img 
                            src={doc.image} 
                            alt={doc.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {doc.available === 'Available Now' || doc.available === 'Today' ? (
                        <span className="bg-green-100 text-green-700 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="hidden xs:inline">{doc.available}</span>
                            <span className="xs:hidden">Now</span>
                        </span>
                    ) : (
                        <span className="bg-slate-100 text-slate-500 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                            <Clock size={10} className="md:w-3 md:h-3" /> 
                            <span className="hidden sm:inline">{doc.available}</span>
                            <span className="sm:hidden">{doc.available.split(',')[0]}</span>
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                    <p className="text-blue-600 text-xs md:text-sm font-medium mb-0.5 md:mb-1">{doc.role}</p>
                    <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-4">{doc.specialty}</p>

                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-600 mb-4 md:mb-6 bg-slate-50 p-2.5 md:p-3 rounded-lg md:rounded-xl">
                        <div className="flex items-center gap-1">
                            <Star size={12} className="md:w-3.5 md:h-3.5 text-orange-400 fill-orange-400" />
                            <span className="font-bold text-slate-900">{doc.rating}</span>
                            <span className="text-slate-400 text-[10px] md:text-xs">({doc.reviews})</span>
                        </div>
                        <div className="w-px h-3 md:h-4 bg-slate-300" />
                        <div className="font-medium text-xs md:text-sm">{doc.exp} Exp.</div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                            <MapPin size={14} className="md:w-4 md:h-4 text-slate-400 shrink-0" /> 
                            <span className="truncate">{doc.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                            <Stethoscope size={14} className="md:w-4 md:h-4 text-slate-400 shrink-0" /> 
                            <span>NephroCare Certified</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-2 md:gap-3">
                    <button className="py-2 md:py-2.5 px-3 md:px-4 rounded-lg md:rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs md:text-sm hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        Profile
                    </button>
                    <button className="py-2 md:py-2.5 px-3 md:px-4 rounded-lg md:rounded-xl bg-blue-600 text-white font-semibold text-xs md:text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 md:gap-2 shadow-lg shadow-blue-600/20">
                        Book <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                    </button>
                </div>
            </motion.div>
        ))}
      </div>

      {/* CTA Section - Mobile Optimized */}
      <section className="max-w-7xl mx-auto mt-16 md:mt-24 bg-blue-900 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 p-6 md:p-12 opacity-5 md:opacity-10">
              <Stethoscope size={200} className="md:w-75 md:h-75 text-white" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">Are you a Nephrologist?</h2>
                  <p className="text-blue-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
                      Join the world's leading renal care network. Get access to our AI diagnostic tools and a global patient base.
                  </p>
                  <button className="bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                      Apply to Join Network
                  </button>
              </div>
          </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

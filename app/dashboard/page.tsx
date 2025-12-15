'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, AlertCircle, FileText, Bell, ChevronRight, Calendar, MapPin, Heart, Droplets } from 'lucide-react';
import Link from 'next/link';

// Import the component we made earlier
import AppointmentCalendar from '@/components/dashboard/AppointmentCalendar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Header with improved spacing and hierarchy */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back, John</h1>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                CKD Stage 3b
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-sm">ID: #NC-8821</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all relative group">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full text-xs text-white flex items-center justify-center font-bold">
                3
              </span>
              <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                  New notifications
                </div>
              </div>
            </button>
            <Link 
              href="/smart-screening" 
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transform"
            >
              <Activity size={18} /> 
              <span>New AI Scan</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Grid with improved layout */}
        <div className="grid lg:grid-cols-3 gap-8">
            
          {/* COLUMN 1 & 2: Main Health Data */}
          <div className="lg:col-span-2 space-y-8">
                
            {/* 1. Health Status Cards - Enhanced with better visual hierarchy */}
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Card A - GFR Level */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-100 transition-colors">
                    <TrendingUp size={20} />
                  </div>
                  <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    Stable
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-500 mb-1">GFR Level</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  45 <span className="text-lg text-slate-400 font-normal">mL/min</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                  <TrendingUp size={12} />
                  <span>+2.1% from last week</span>
                </div>
              </motion.div>
                    
              {/* Card B - Critical Alert */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-linear-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200/60 shadow-lg shadow-red-200/50 hover:shadow-xl hover:shadow-red-300/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-red-100 rounded-xl text-red-600 group-hover:bg-red-200 transition-colors">
                      <AlertCircle size={20} />
                    </div>
                    <div className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1.5 rounded-full animate-pulse">
                      Action Required
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-red-600 mb-1">Lung Fluid</div>
                  <div className="text-3xl font-bold text-red-900 mb-1">High Risk</div>
                  <div className="text-xs text-red-700/80 font-medium">
                    AI detected 2 days ago
                  </div>
                </div>
              </motion.div>

              {/* Card C - Dry Weight */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Droplets size={20} />
                  </div>
                  <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                    Monitor
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-500 mb-1">Dry Weight</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  72.5 <span className="text-lg text-slate-400 font-normal">kg</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Target: <span className="text-blue-600 font-bold">71.0 kg</span>
                </div>
              </motion.div>
            </div>

            {/* 2. Recent AI Reports - Enhanced with better interactivity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-lg shadow-slate-200/50"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Recent AI Screenings</h2>
                  <p className="text-sm text-slate-500">Your latest diagnostic results</p>
                </div>
                <Link 
                  href="/smart-screening" 
                  className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center gap-1 group"
                >
                  View All 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Chest X-Ray Analysis', date: 'Oct 24, 2024', status: 'Action Required', color: 'text-red-600 bg-red-50 border-red-100', icon: AlertCircle, urgent: true },
                  { name: 'DermGuard Skin Scan', date: 'Oct 20, 2024', status: 'Normal', color: 'text-green-600 bg-green-50 border-green-100', icon: Activity, urgent: false },
                  { name: 'MRI Neuro Assessment', date: 'Sept 15, 2024', status: 'Normal', color: 'text-green-600 bg-green-50 border-green-100', icon: Activity, urgent: false },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center justify-between p-5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group border border-transparent hover:border-slate-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${item.urgent ? 'bg-red-100' : 'bg-blue-100'} flex items-center justify-center ${item.urgent ? 'text-red-600' : 'text-blue-600'} group-hover:scale-110 transition-transform`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{item.name}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-2">
                            <Calendar size={12} />
                            {item.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold px-4 py-2 rounded-full border ${item.color}`}>
                          {item.status}
                        </span>
                        <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* COLUMN 3: Sidebar */}
          <div className="space-y-6">
            {/* Appointment Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AppointmentCalendar />
            </motion.div>

            {/* Quick Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-lg shadow-slate-200/50"
            >
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Heart size={18} className="text-red-500" />
                Health Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Dialysis Sessions</span>
                  <span className="font-bold text-slate-900">156 total</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>This month: 12/15</span>
                  <span className="text-blue-600 font-bold">80%</span>
                </div>
              </div>
            </motion.div>

            {/* Holiday Dialysis Promo - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Planning a Trip?</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  You have <span className="font-bold text-white">2,400 travel points</span>. Book dialysis sessions worldwide with ease.
                </p>
                <Link 
                  href="/services/holiday-dialysis" 
                  className="block w-full text-center bg-white text-blue-700 font-bold py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Destinations
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
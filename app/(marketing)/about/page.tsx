'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Patients Treated', value: '10k+' },
    { label: 'Certified Doctors', value: '50+' },
    { label: 'Global Locations', value: '12' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <section className="relative h-[60vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-blue-800/80 z-10" />
        <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-slate-800 opacity-50" /> 
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Care Beyond Treatment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 font-light"
          >
            We don't just treat kidneys; we empower lives. Welcome to the new standard of nephrology care.
          </motion.p>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To provide accessible, high-quality renal care that combines advanced medical technology with a deeply human touch. We believe that a diagnosis should not limit a patient's potential to live a full, vibrant life.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              {[
                "Patient-Centric Approach",
                "Advanced Hemodialysis Technology",
                "Holistic Lifestyle Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 bg-blue-100 rounded-2xl overflow-hidden shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-blue-300">
                <Users size={64} />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Why Nephrocare?</h2>
                <p className="text-slate-500 mt-2">Built on pillars of trust and innovation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <Heart className="text-red-500 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-3">Compassion First</h3>
                    <p className="text-slate-600">Every decision we make starts with how it affects the patient's emotional and physical well-being.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 bg-linear-to-br from-blue-600 to-blue-800 text-white">
                    <Award className="text-blue-200 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-3">Clinical Excellence</h3>
                    <p className="text-blue-100">We adhere to the highest international safety standards, utilizing cutting-edge filtration technology to ensure the best possible outcomes for every session.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow md:col-span-3 flex flex-col md:flex-row items-center gap-6">
                     <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">Innovative Research</h3>
                        <p className="text-slate-600">Nephrocare actively participates in renal research, bringing the latest treatments from the lab directly to our clinics.</p>
                     </div>
                     <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                        Read our Annual Report <ArrowRight size={18} />
                     </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
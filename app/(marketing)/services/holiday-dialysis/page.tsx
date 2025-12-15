'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Sun, Anchor, Mountain, Search } from 'lucide-react';

const LOCATIONS = [
  { id: 1, name: 'Bali Center', type: 'Beach', coords: { top: '60%', left: '70%' } },
  { id: 2, name: 'Swiss Alps Clinic', type: 'Mountain', coords: { top: '30%', left: '50%' } },
  { id: 3, name: 'London City', type: 'Urban', coords: { top: '25%', left: '45%' } },
  { id: 4, name: 'Dubai Marina', type: 'Urban', coords: { top: '45%', left: '55%' } },
  { id: 5, name: 'Kyoto Wellness', type: 'Culture', coords: { top: '35%', left: '80%' } },
  { id: 6, name: 'New York Hub', type: 'Urban', coords: { top: '30%', left: '20%' } },
  { id: 7, name: 'Santorini Escape', type: 'Beach', coords: { top: '40%', left: '50%' } },
  { id: 8, name: 'Cape Town Retreat', type: 'Nature', coords: { top: '75%', left: '50%' } },
  { id: 9, name: 'Rio de Janeiro', type: 'Beach', coords: { top: '65%', left: '30%' } },
  { id: 10, name: 'Bangkok Vitality', type: 'Urban', coords: { top: '55%', left: '75%' } },
  { id: 11, name: 'Sydney Harbour', type: 'Coastal', coords: { top: '80%', left: '85%' } },
  { id: 12, name: 'Marrakech Oasis', type: 'Culture', coords: { top: '50%', left: '42%' } },
  { id: 13, name: 'Iceland Nordic Spa', type: 'Nature', coords: { top: '15%', left: '40%' } },
  { id: 14, name: 'Vancouver Greenway', type: 'Urban', coords: { top: '22%', left: '15%' } },
  { id: 15, name: 'Maldives Serenity', type: 'Beach', coords: { top: '62%', left: '65%' } },
];

const HolidayDialysisPage = () => {
  const [activeLoc, setActiveLoc] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-blue-50 pt-14">
      
      <section className="text-center pt-20 pb-12 px-6">
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-blue-600 font-semibold mb-6"
        >
            <Plane size={18} />
            <span>Nephrocare Holiday Program</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Don't Let Dialysis <br/> Ground You.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Travel the world with confidence. Our coordinated network ensures your treatment is ready wherever you land.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative aspect-video md:aspect-2/1 bg-slate-100">
             
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-no-repeat bg-center mix-blend-multiply" />
             </div>

             {LOCATIONS.map((loc) => (
                <motion.button
                    key={loc.id}
                    style={{ top: loc.coords.top, left: loc.coords.left }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                    onClick={() => setActiveLoc(loc.id)}
                    whileHover={{ scale: 1.2 }}
                >
                    <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg
                        ${activeLoc === loc.id ? 'bg-orange-500 scale-125' : 'bg-blue-600'}
                        transition-all duration-300
                    `}>
                        <MapPin size={16} fill="currentColor" />
                    </div>
                    
                    <div className={`
                        absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-32 bg-white p-3 rounded-lg shadow-xl text-center
                        transition-all duration-300 pointer-events-none
                        ${activeLoc === loc.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}>
                        <span className="text-xs font-bold text-slate-400 uppercase">{loc.type}</span>
                        <div className="font-bold text-slate-800">{loc.name}</div>
                        <div className="w-3 h-3 bg-white absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45" />
                    </div>
                </motion.button>
             ))}

             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                <h3 className="font-bold text-slate-800 mb-2">Find a Center</h3>
                <div className="relative">
                    <Search className="absolute left-3 top-3 text-slate-400" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search destination..." 
                        className="w-full bg-slate-50 pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500 text-slate-600"
                    />
                </div>
             </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 text-black">
            <div className="bg-white  p-8 rounded-2xl border-2 border-transparent hover:border-blue-100 shadow-sm hover:shadow-lg transition-all">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center text-orange-600 mb-6">
                    <Sun size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Choose Destination</h3>
                <p className="text-slate-600">Browse our network of certified "Holiday Dialysis" partners worldwide.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-blue-100 shadow-sm hover:shadow-lg transition-all">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 mb-6">
                    <Anchor size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">2. We Coordinate</h3>
                <p className="text-slate-600">Our team transfers your medical records and prescriptions securely to the destination clinic.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-blue-100 shadow-sm hover:shadow-lg transition-all">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Mountain size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Travel Freely</h3>
                <p className="text-slate-600">Arrive, get treated with the same standard of care, and enjoy your vacation.</p>
            </div>
        </div>
      </section>
      
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to book your trip?</h2>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Speak to a Coordinator
        </button>
      </section>

    </div>
  );
};

export default HolidayDialysisPage;
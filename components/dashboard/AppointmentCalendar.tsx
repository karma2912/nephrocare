'use client';

import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, MoreHorizontal } from 'lucide-react';

const appointments = [
  { id: 1, type: 'Dialysis Session', date: '2023-10-24', time: '09:00 AM', doctor: 'Dr. Sarah Smith', location: 'Center A' },
  { id: 2, type: 'Nephrology Consult', date: '2023-10-28', time: '02:30 PM', doctor: 'Dr. James Doe', location: 'Main Clinic' },
  { id: 3, type: 'Lab Test: Creatinine', date: '2023-11-02', time: '08:00 AM', doctor: 'Lab 3', location: 'Pathology Wing' },
];

const AppointmentCalendar = () => {
  // Helper to format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' })
    };
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Upcoming Care</h2>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            View All
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map((appt) => {
            const { day, month } = formatDate(appt.date);
            
            return (
                <div key={appt.id} className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 cursor-pointer">
                    {/* Date Box */}
                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm text-slate-800 group-hover:text-blue-600 transition-colors font-bold border border-slate-100">
                        <span className="text-xs uppercase text-slate-400 group-hover:text-blue-400">{month}</span>
                        <span className="text-xl leading-none">{day}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-1">{appt.type}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                                <Clock size={12} /> {appt.time}
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={12} /> {appt.location}
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-all">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            );
        })}
      </div>

      <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 text-slate-500 rounded-xl font-medium hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
        <CalendarIcon size={18} />
        Schedule New Appointment
      </button>
    </div>
  );
};

export default AppointmentCalendar;
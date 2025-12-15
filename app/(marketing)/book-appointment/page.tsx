'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  User, 
  ChevronDown, 
  CheckCircle2, 
  Loader2, 
  AlertCircle 
} from 'lucide-react';

export default function BookAppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Schedule Your Visit
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Book a consultation, dialysis session, or AI screening. We usually confirm appointments within 2 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info & Emergency */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg">Call Us Directly</h3>
                     <p className="text-slate-500 mb-1">Available 24/7 for emergencies.</p>
                     <a href="tel:+15551234567" className="text-blue-600 font-bold hover:underline text-lg">
                        (555) 123-4567
                     </a>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg">Main Center</h3>
                     <p className="text-slate-500">
                        128 Medical Plaza Blvd,<br/>
                        Suite 400, New York, NY 10001
                     </p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg">Email Support</h3>
                     <p className="text-slate-500 mb-1">For medical records & general queries.</p>
                     <a href="mailto:care@nephrocare.com" className="text-blue-600 font-bold hover:underline">
                        care@nephrocare.com
                     </a>
                  </div>
               </div>
            </div>

            {/* Hours */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
               <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Clock size={20} className="text-blue-400"/> Clinic Hours
               </h3>
               <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                     <span className="text-slate-300">Mon - Fri</span>
                     <span className="font-bold">07:00 AM - 09:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                     <span className="text-slate-300">Saturday</span>
                     <span className="font-bold">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-300">Sunday</span>
                     <span className="font-bold text-blue-400">Emergency Only</span>
                  </div>
               </div>
            </div>

             {/* Emergency Alert */}
             <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex gap-3">
                <AlertCircle className="text-red-600 shrink-0" />
                <p className="text-sm text-red-800">
                   <strong>Medical Emergency?</strong> Do not use this form. Call 911 or visit the nearest ER immediately.
                </p>
             </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
             >
                {isSuccess ? (
                   <div className="text-center py-20">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 animate-in zoom-in duration-300">
                         <CheckCircle2 size={40} />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
                      <p className="text-slate-600 mb-8 max-w-md mx-auto">
                         Thank you for choosing NephroCare. Our coordination team has received your request and will contact you shortly to confirm the slot.
                      </p>
                      <button 
                         onClick={() => setIsSuccess(false)}
                         className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
                      >
                         Book Another
                      </button>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid md:grid-cols-2 gap-6">
                         
                         {/* Name */}
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                            <div className="relative">
                               <User className="absolute left-4 top-3.5 text-slate-400" size={20} />
                               <input 
                                  required
                                  type="text" 
                                  placeholder="John Doe" 
                                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                               />
                            </div>
                         </div>

                         {/* Phone */}
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                            <div className="relative">
                               <Phone className="absolute left-4 top-3.5 text-slate-400" size={20} />
                               <input 
                                  required
                                  type="tel" 
                                  placeholder="(555) 000-0000" 
                                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                               />
                            </div>
                         </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Reason for Visit</label>
                         <div className="relative">
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-slate-600">
                               <option>General Nephrology Consultation</option>
                               <option>Hemodialysis Session</option>
                               <option>AI Health Screening Follow-up</option>
                               <option>Kidney Transplant Evaluation</option>
                               <option>Dietary Consultation</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" size={20} />
                         </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                         {/* Date */}
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                            <div className="relative">
                               <Calendar className="absolute left-4 top-3.5 text-slate-400" size={20} />
                               <input 
                                  type="date" 
                                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-600"
                               />
                            </div>
                         </div>

                         {/* Time */}
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                            <div className="relative">
                               <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-slate-600">
                                  <option>Morning (8AM - 12PM)</option>
                                  <option>Afternoon (12PM - 4PM)</option>
                                  <option>Evening (4PM - 8PM)</option>
                               </select>
                               <ChevronDown className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" size={20} />
                            </div>
                         </div>
                      </div>

                      {/* Textarea */}
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Additional Notes (Optional)</label>
                         <textarea 
                            rows={4}
                            placeholder="Please briefly describe your symptoms or specific requirements..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                         ></textarea>
                      </div>

                      <button 
                         type="submit"
                         disabled={isSubmitting}
                         className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                         {isSubmitting ? (
                            <>
                               <Loader2 className="animate-spin" size={20} /> Sending Request...
                            </>
                         ) : (
                            'Confirm Booking Request'
                         )}
                      </button>
                   </form>
                )}
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
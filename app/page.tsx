"use client"
import { 
  Activity, 
  MapPin, 
  ShieldCheck, 
  Brain, 
  Stethoscope, 
  ArrowRight,
  Heart,
  Zap,
  Clock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Star,
  Quote
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const aiFeatures = [
    {
      icon: <Activity size={28} />,
      color: 'blue',
      title: 'Fluid & Lung Monitor',
      description: 'Prevent pulmonary edema with X-Ray analysis detecting early fluid overload and pneumonia in dialysis patients.',
      href: '/smart-screening/lung-monitor',
      stats: '98.8% accuracy',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <ShieldCheck size={28} />,
      color: 'green',
      title: 'Access Point Guard',
      description: 'Your fistula is your lifeline. AI-powered scanning detects diabetic ulcers and access point infections early.',
      href: '/smart-screening/derm-guard',
      stats: '92% sensitivity',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Brain size={28} />,
      color: 'purple',
      title: 'Neuro Risk Assessment',
      description: 'CKD increases stroke risk 5-10x. Automated MRI screening for cerebral vessel disease and stroke markers.',
      href: '/smart-screening/neuro-risk',
      stats: '89% specificity',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const trustMetrics = [
    { value: '4,000+', label: 'Global Centers', icon: <MapPin size={20} /> },
    { value: '340K+', label: 'Patients Served', icon: <Heart size={20} /> },
    { value: '50+', label: 'Countries', icon: <TrendingUp size={20} /> },
    { value: '24/7', label: 'Support', icon: <Clock size={20} /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      treatment: '3 years on dialysis',
      rating: 5,
      text: 'The AI lung monitor caught early signs of fluid buildup that my regular checkup missed. It literally saved my life. Now I can travel knowing I\'m being monitored everywhere.',
      avatar: 'SM'
    },
    {
      name: 'Dr. Rajesh Kumar',
      location: 'Mumbai, India',
      treatment: 'Nephrologist',
      rating: 5,
      text: 'As a physician, I\'m impressed by the accuracy of the neuro risk assessment. It\'s helped us prevent two strokes in my patients this year alone. The technology is groundbreaking.',
      avatar: 'RK'
    },
    {
      name: 'Maria Garcia',
      location: 'Barcelona, Spain',
      treatment: '5 years on dialysis',
      rating: 5,
      text: 'Holiday dialysis changed my life! I visited my family in Argentina after 5 years. The booking was seamless and the care was identical to my home clinic. Pure freedom.',
      avatar: 'MG'
    },
    {
      name: 'James Chen',
      location: 'Singapore',
      treatment: '2 years on dialysis',
      rating: 5,
      text: 'The access point guard detected an infection 3 days before I felt any symptoms. Early treatment meant no hospitalization. This AI actually cares about my health.',
      avatar: 'JC'
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 md:px-4 py-1.5 md:py-2 mx-auto lg:mx-0">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-xs md:text-sm font-semibold text-blue-700">Introducing NephroCare+ AI Suite</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Dialysis Care
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                  Powered by AI
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                World-class dialysis treatment enhanced with deep learning. Monitor comorbidities, prevent complications, and travel freely—all in one integrated platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <a 
                  href="/smart-screening" 
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300 group"
                >
                  <Zap size={18} />
                  <span>Try AI Screening</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <Stethoscope size={18} />
                  <span>Our Services</span>
                </a>
              </div>

              {/* Trust Metrics - Mobile Optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-slate-200">
                {trustMetrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-1 md:mb-2 text-blue-600">
                      {metric.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-slate-900">{metric.value}</div>
                    <div className="text-xs md:text-sm text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Mobile Optimized */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-linear-to-br from-slate-100 to-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200">
                <div className="aspect-square bg-linear-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for hero visual */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10"></div>
                  <div className="relative z-10 text-center space-y-3 md:space-y-4 px-4">
                    <div className="w-16 md:w-24 h-16 md:h-24 mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center">
                      <Activity size={32} className="text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs md:text-sm font-semibold text-slate-600">Real-time Health Monitoring</div>
                      <div className="inline-flex items-center gap-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-md">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-700">AI Models Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards - Hidden on smallest screens */}
                <div className="hidden sm:block absolute -left-2 md:-left-4 top-1/4 bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-[10px] md:text-xs text-slate-500">Scan Complete</div>
                      <div className="text-xs md:text-sm font-bold text-slate-900">No Risks</div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -right-2 md:-right-4 bottom-1/4 bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Brain size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] md:text-xs text-slate-500">MRI Analysis</div>
                      <div className="text-xs md:text-sm font-bold text-slate-900">94% Confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white" id="ai-models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-3 md:px-4 py-1.5 md:py-2">
              <Sparkles size={12} className="text-purple-600" />
              <span className="text-[10px] md:text-xs font-bold text-purple-700 uppercase tracking-wider">Deep Learning Models</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 px-4">
              Comorbidity Management
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                That Predicts & Prevents
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 px-4">
              Kidney disease doesn't happen in isolation. Our AI suite monitors critical secondary risks before they become emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {aiFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative bg-linear-to-br from-white to-slate-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`}></div>
                
                <div className={`w-14 md:w-16 h-14 md:h-16 bg-linear-to-br ${feature.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <div className={`inline-flex items-center gap-1 text-xs font-bold text-${feature.color}-700 bg-${feature.color}-50 px-2 md:px-3 py-1 rounded-full`}>
                      <TrendingUp size={10} />
                      {feature.stats}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <a 
                    href={feature.href}
                    className={`inline-flex items-center gap-2 text-${feature.color}-700 font-semibold group-hover:gap-3 transition-all text-sm md:text-base`}
                  >
                    <span>Start Screening</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Dialysis Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-blue-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent"></div>
                <div className="relative z-10 text-center space-y-4 md:space-y-6 px-4">
                  <MapPin size={48} className="text-blue-600 mx-auto" />
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                      <span className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs md:text-sm font-bold text-slate-700">Finding nearest clinic...</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">Global Network Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <MapPin size={12} className="text-blue-600" />
                <span className="text-[10px] md:text-xs font-bold text-blue-700 uppercase tracking-wider">Travel Freedom</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Holiday Dialysis.
                <span className="block text-blue-600">Travel without boundaries.</span>
              </h2>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Don't let your schedule trap you. With over 4,000 NephroCare centers globally, our Travel Freedom Planner syncs your medical data automatically.
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  'Global standardization of care protocols',
                  'Seamless medical record transfer via blockchain',
                  'Instant slot booking through mobile app',
                  'Pre-travel health check with AI screening'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3">
                    <div className="mt-0.5 p-1 md:p-1.5 bg-green-100 rounded-full text-green-600 shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="/services/holiday-dialysis" 
                className="inline-flex items-center gap-2 text-blue-700 font-bold text-base md:text-lg group"
              >
                <span>Explore Travel Planner</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3 md:px-4 py-1.5 md:py-2">
              <Star size={12} className="text-amber-600 fill-amber-600" />
              <span className="text-[10px] md:text-xs font-bold text-amber-700 uppercase tracking-wider">Patient Stories</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 px-4">
              Trusted by Patients
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Around the World
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 px-4">
              Real stories from real people whose lives have been transformed by AI-powered dialysis care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="relative bg-linear-to-br from-slate-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-100">
                  <Quote size={32} className="md:w-10 md:h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-slate-600">{testimonial.location}</div>
                    <div className="text-xs text-slate-500">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10 md:mt-12">
            <a 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm md:text-base hover:gap-3 transition-all group"
            >
              <span>Read More Success Stories</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6 md:space-y-8 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to experience AI-powered dialysis care?
          </h2>
          
          <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of patients using NephroCare+ for safer, smarter treatment with real-time comorbidity monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <MapPin size={18} />
              <Link href="/services/holiday-dialysis">Find Your Center</Link>
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              <Sparkles size={18} />
              <Link href="/smart-screening">Try AI Screening</Link>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
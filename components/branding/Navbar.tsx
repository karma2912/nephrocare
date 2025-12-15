"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // <--- IMPORTANT: Import this
import {
  Menu,
  X,
  Activity,
  User,
  Sparkles,
  LogOut,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // MOCK AUTH STATE: Change this to true to see the "Logged In" view
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Holiday Dialysis", href: "/services/holiday-dialysis" },
    {
      name: "Smart Screening",
      href: "/smart-screening",
      isNew: true,
      icon: <Sparkles size={14} className="inline ml-1" />,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3"
            : "bg-linear-to-b from-white/80 to-transparent backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-linear-to-br from-blue-600 to-blue-700 text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg">
                <Activity size={22} strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span
                className={`text-xl font-bold tracking-tight ${
                  isScrolled ? "text-slate-900" : "text-slate-900"
                }`}
              >
                Nephro<span className="text-blue-600">Care</span>
                <sup className="text-[10px] text-blue-600 font-black ml-0.5">
                  +
                </sup>
              </span>
              <span className="text-[9px] text-slate-500 font-medium tracking-wider uppercase">
                AI-Enhanced Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  link.isNew
                    ? "text-blue-700 hover:bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.name}
                  {link.icon}
                  {link.isNew && (
                    <span className="ml-1.5 bg-linear-to-r from-blue-600 to-purple-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide shadow-sm">
                      AI
                    </span>
                  )}
                </span>
                {link.isNew && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/renal-diet-bot"
              className="bg-white border-2 border-slate-200 text-slate-700 px-3 py-2 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2 text-sm"
            >
              <MessageCircle size={14} /> Chat
            </Link>
            <Link
              href="/book-appointment"
              className="hidden md:flex items-center gap-2 bg-linear-to-r from-slate-900 to-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-slate-900/20 hover:scale-105 transition-all duration-300 group"
            >
              <span>Book Appointment</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <button
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    link.isNew
                      ? "bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      link.isNew ? "text-blue-700" : "text-slate-800"
                    }`}
                  >
                    {link.name}
                  </span>
                  {link.isNew && (
                    <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
                      <Sparkles size={12} />
                      AI Tool
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {/* Mobile Auth Logic */}
                <Link
                  href="/chat"
                  className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
                >
                  <MessageCircle size={18} /> Chat
                </Link>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

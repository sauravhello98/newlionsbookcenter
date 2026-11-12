"use client";

import React, { useState } from "react";
import Image from "next/image";

// ==========================================
// SVG Icons (Pixel-perfect & zero dependency)
// ==========================================

const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ShoppingCartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const BookOpenIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GraduationCapIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const StationeryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    <line x1="15" y1="5" x2="19" y2="9" />
  </svg>
);

const WholesaleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const NavigationIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.25C9.16 12.41 10.77 14.9 13.23 15.96C15.28 16.84 15.7 16.67 16.14 16.63C16.58 16.59 17.56 16.05 17.76 15.48C17.96 14.91 17.96 14.43 17.9 14.33C17.84 14.23 17.68 14.17 17.44 14.05C17.2 13.93 16.01 13.34 15.79 13.26C15.57 13.18 15.41 13.14 15.25 13.38C15.09 13.62 14.62 14.17 14.48 14.33C14.34 14.49 14.2 14.51 13.96 14.39C13.72 14.27 12.95 14.02 12.03 13.2C11.31 12.56 10.82 11.77 10.68 11.53C10.54 11.29 10.66 11.16 10.78 11.04C10.89 10.93 11.03 10.75 11.15 10.61C11.27 10.47 11.31 10.37 11.39 10.21C11.47 10.05 11.43 9.91 11.37 9.79C11.31 9.67 10.83 8.49 10.63 8C10.43 7.53 10.23 7.59 10.08 7.58C9.94 7.57 9.78 7.57 9.62 7.57L9.53 7.34Z" />
  </svg>
);

const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.28 8.28 0 0 0 4.84 1.55V7.18c-.36 0-.72-.17-1.07-.49z" />
  </svg>
);

// ==========================================
// Main Home Page Component
// ==========================================

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setFormError("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.subject || !formState.message.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Products & Services", href: "#products", id: "products" },
    { name: "Our Brands", href: "#brands", id: "brands" },
    { name: "Leadership", href: "#leadership", id: "leadership" },
    { name: "Find Us", href: "#find-us", id: "find-us" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-700">
      {/* ==================================================== */}
      {/* 1. Header / Navbar                                   */}
      {/* ==================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0"
            onClick={() => setActiveNav("home")}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="New Lions Book Center Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base sm:text-lg font-black tracking-wider text-slate-800 uppercase whitespace-nowrap">
              New Lions Book Center
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`relative py-2 transition-colors duration-200 hover:text-sky-600 ${
                  activeNav === link.id ? "text-sky-600 font-bold" : ""
                }`}
              >
                {link.name}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Contact Us CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              onClick={() => setActiveNav("contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow"
            >
              <SendIcon className="w-3.5 h-3.5 rotate-[-20deg]" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeNav === link.id
                    ? "bg-sky-50 text-sky-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white font-medium text-sm"
              >
                <SendIcon className="w-3.5 h-3.5 rotate-[-20deg]" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* ==================================================== */}
        {/* 2. Hero Section                                      */}
        {/* ==================================================== */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100"
        >
          {/* Decorative Yellow Curve in top-left corner */}
          <div
            className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-amber-300/40 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-0 w-24 h-48 bg-amber-400 rounded-br-[100px] opacity-80 pointer-events-none hidden md:block"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-6 space-y-6">
                {/* Blue dash accent */}
                <div className="w-12 h-1 bg-sky-500 rounded-full" />

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-tight">
                    Your Trusted Partner in
                  </h1>
                  <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-tight">
                    <span className="text-sky-500">Books</span>{" "}
                    <span className="text-amber-400">&amp;</span>{" "}
                    <span className="text-[#db2777]">Stationery</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  Supporting students, parents, teachers and schools with books and stationery.
                </p>

                {/* Hero Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#brands"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow"
                  >
                    <span>Explore Our Brands</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-sky-400 text-sky-600 hover:bg-sky-50 font-semibold text-sm transition-all duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image Banner */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="/hero-books.jpg"
                    alt="School Books, College Books, and Stationery supplies at New Lions Book Center"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 3. A Legacy of Learning Since 2052 BS (About Us)     */}
        {/* ==================================================== */}
        <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: Bookstore Interior Image */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/store-interior.jpg"
                    alt="Inside New Lions Book Center modern showroom"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle brand badge overlay */}
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider">
                    Janakpurdham
                  </div>
                </div>
              </div>

              {/* Right: Content & Feature Highlights */}
              <div className="lg:col-span-6 space-y-6">
                {/* Blue dash accent */}
                <div className="w-12 h-1 bg-sky-500 rounded-full" />

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  A Legacy of Learning Since 2052 BS
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  New Lions Book Center (NLBC) is a trusted bookstore and stationery provider in Janakpurdham, offering a wide range of school books, college books and quality stationery items. We serve our customers with dedication, reliable service and a commitment to education.
                </p>

                {/* 2 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {/* Wholesale & Retail */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ShoppingCartIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Wholesale &amp; Retail</h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-snug">
                        Best quality products at competitive prices.
                      </p>
                    </div>
                  </div>

                  {/* Books & Stationery */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <BookOpenIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Books &amp; Stationery</h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-snug">
                        For students, schools, colleges and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 4. Products & Services Section                       */}
        {/* ==================================================== */}
        <section id="products" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-10">
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Products &amp; Services
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                Everything you need for your learning journey.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: School Books */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/cat-school.jpg"
                    alt="School Books Class 1 to 10"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">School Books</h3>
                    <p className="text-xs text-slate-500">Class 1 – 10</p>
                  </div>
                </div>
              </div>

              {/* Card 2: College Books */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/cat-college.jpg"
                    alt="College Books for Science, Management, Commerce, Humanities"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">College Books</h3>
                    <p className="text-xs text-slate-500">For a brighter future</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Stationery */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/cat-stationery.jpg"
                    alt="Stationery, Pens, Notebooks, Art supplies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <StationeryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">Stationery</h3>
                    <p className="text-xs text-slate-500">Pens, notebooks, art supplies &amp; more</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Wholesale & Retail */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/wholesale-retail-hd.jpg"
                    alt="Wholesale & Retail for businesses, schools and individuals"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <WholesaleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">Wholesale &amp; Retail</h3>
                    <p className="text-xs text-slate-500">For businesses, schools and individuals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 5. Brands We Carry Section                           */}
        {/* ==================================================== */}
        <section id="brands" className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Brands We Carry
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                Quality brands you can trust.
              </p>
            </div>

            {/* 5 Brand Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Brand 1: Cello */}
              <div className="h-24 rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-sm transition-all flex items-center justify-center p-3">
                <div className="w-full h-12 rounded-xl bg-[#e31e24] flex items-center justify-center shadow-xs">
                  <span className="text-white text-2xl font-black italic tracking-tight font-sans">
                    cello
                  </span>
                </div>
              </div>

              {/* Brand 2: DOMS */}
              <div className="h-24 rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-sm transition-all flex items-center justify-center p-3">
                <div className="w-full h-12 rounded-xl bg-[#00529b] flex items-center justify-center shadow-xs">
                  <span className="text-white text-2xl font-black tracking-wider uppercase font-sans">
                    DOMS
                  </span>
                </div>
              </div>

              {/* Brand 3: NATARAJ */}
              <div className="h-24 rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-sm transition-all flex items-center justify-center p-3">
                <div className="w-full h-12 rounded-xl bg-[#d71920] flex items-center justify-center shadow-xs">
                  <span className="text-white text-xl font-black tracking-widest uppercase font-sans flex items-center gap-0.5">
                    NATARAJ<span className="text-sm font-bold align-super">*</span>
                  </span>
                </div>
              </div>

              {/* Brand 4: Flair */}
              <div className="h-24 rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-sm transition-all flex items-center justify-center p-3">
                <div className="w-full h-12 rounded-xl bg-[#d41c1d] flex items-center justify-center shadow-xs">
                  <span className="text-white text-2xl font-serif font-black italic tracking-wide">
                    Flair
                  </span>
                </div>
              </div>

              {/* Brand 5: More Brands */}
              <div className="col-span-2 sm:col-span-1 h-24 rounded-2xl border border-slate-200/80 bg-slate-50/80 hover:bg-slate-100/80 shadow-2xs hover:shadow-sm transition-all flex items-center justify-center p-3 cursor-pointer">
                <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 flex items-center justify-center">
                    <span className="text-slate-600 text-sm font-bold leading-none">+</span>
                  </div>
                  <span>More Brands</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 6. The People Behind NLBC (Leadership)               */}
        {/* ==================================================== */}
        <section id="leadership" className="py-16 lg:py-24 bg-sky-50/40 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                The People Behind NLBC
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1 max-w-2xl">
                Our leadership team is committed to providing the best books and stationery solutions for our community.
              </p>
            </div>

            {/* 2 Leadership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Leader 1: Proprietor */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src="/leader-proprietor.jpg"
                    alt="Proprietor of New Lions Book Center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Proprietor
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Guided by experience and a deep commitment to quality and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Leader 2: CEO */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src="/leader-ceo.jpg"
                    alt="CEO of New Lions Book Center"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    CEO
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Focused on innovation, growth and a better future for NLBC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 7. Find Us (Location & Map)                          */}
        {/* ==================================================== */}
        <section id="find-us" className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Find Us
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                Visit our store and experience our wide range of books and stationery.
              </p>
            </div>

            {/* Layout: Info Card + Google Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Info Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-sky-500" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Visit Our Store</h3>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-1">
                    100 Meters East from Ramanand Chowk, Janakpurdham-08, Nepal
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.google.com/?q=New+Lions+Book+Center+Janakpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-all shadow-sm"
                  >
                    <NavigationIcon className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Right: Interactive Google Map */}
              <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-100 shadow-xs h-72 sm:h-80 lg:h-auto min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.3306019428583!2d85.91887911158722!3d26.733824176657244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec13bff227e5cd%3A0x3d89b3966249ac2d!2sNew%20Lions%20Book%20Center!5e0!3m2!1sen!2snp!4v1750426320853!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Lions Book Center Google Map Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 8. Contact Us Section                                */}
        {/* ==================================================== */}
        <section id="contact" className="py-16 lg:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Contact Us
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                We&apos;re here to help. Get in touch with us anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Contact & Social */}
              <div className="lg:col-span-5 space-y-6">
                {/* WhatsApp & Phone */}
                <a
                  href="https://wa.me/9779812148069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">WhatsApp &amp; Phone</h3>
                    <p className="text-slate-500 text-xs sm:text-sm">Chat with us on WhatsApp</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@newlionsbookcenter.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Email</h3>
                    <p className="text-slate-500 text-xs sm:text-sm">Send us your query</p>
                  </div>
                </a>

                {/* Follow Us */}
                <div className="pt-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Follow Us</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5 mb-3">
                    Stay updated with our latest news and offers.
                  </p>
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    {/* TikTok */}
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you for contacting New Lions Book Center. Our team will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-block mt-4 px-6 py-2.5 rounded-full bg-sky-500 text-white font-medium text-sm hover:bg-sky-600 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-medium">
                        {formError}
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Name <span className="text-sky-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email <span className="text-sky-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
                        />
                      </div>
                    </div>

                    {/* Subject Row */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject <span className="text-sky-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition bg-white"
                      >
                        <option value="">Select subject</option>
                        <option value="school-books">School Books Inquiry</option>
                        <option value="college-books">College Books Inquiry</option>
                        <option value="stationery">Stationery &amp; Supplies</option>
                        <option value="wholesale">Wholesale &amp; Bulk Orders</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>

                    {/* Message Row */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message <span className="text-sky-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:opacity-70 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <SendIcon className="w-4 h-4 rotate-[-20deg]" />
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================== */}
      {/* 9. Footer                                            */}
      {/* ==================================================== */}
      <footer className="bg-[#0b1e36] text-slate-300 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-white/10 rounded-xl p-1">
                  <Image
                    src="/logo.jpeg"
                    alt="New Lions Book Center Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-white text-base font-black tracking-wider uppercase block leading-none">
                    New Lions
                  </span>
                  <span className="text-slate-400 text-xs font-bold tracking-widest uppercase block mt-1">
                    Book Center
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Janakpur&apos;s premier bookstore and stationery partner since 2052 BS. Serving education with passion and dedication.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">Products &amp; Services</a>
                </li>
                <li>
                  <a href="#brands" className="hover:text-white transition-colors">Our Brands</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Secondary Links */}
            <div className="lg:col-span-2">
              <h4 className="text-transparent font-bold text-sm mb-4 select-none hidden lg:block">Navigation</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
                </li>
                <li>
                  <a href="#find-us" className="hover:text-white transition-colors">Find Us</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-sm mb-3">Contact</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Janakpurdham, Nepal</span>
                </div>
                <div className="flex items-start gap-2">
                  <NavigationIcon className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>(See map for exact location)</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-300 block mb-2">Follow Us:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; 2026 New Lions Book Center. All rights reserved.</p>
            <p>Janakpurdham-08, Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

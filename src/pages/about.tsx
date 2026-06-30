import React from 'react';
import NavbarHero from '../components/NavbarHero';
import AboutSection from '../components/about'; 
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <NavbarHero />

      <main className="flex-grow">
        
        <div className="text-center pt-24 pb-12 px-6 max-w-6xl mx-auto">
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
            Behind the Brand
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            About FastBox Logistics
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering packages safely and on time for businesses and individuals. 
            FastBox makes shipping simple, secure, and efficient across every single mile.
          </p>
        </div>

        {/* The 4-Card Operational Foundations Component */}
        <AboutSection />

      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
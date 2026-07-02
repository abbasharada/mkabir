import React from 'react';
import { Target, Eye, ShieldCheck, Milestone } from 'lucide-react';

export default function About() {
  const pillarsList = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To simplify distribution pipelines for businesses worldwide through uncompromised efficiency, transparent pricing, and absolute handling diligence."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      description: "To become the absolute standard in smart shipping setups, bridging communities and international trade channels seamlessly via cloud-coordinated transport."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Core Commitments",
      description: "We operate under strict regulatory compliance parameters, maintaining bulletproof chain-of-custody protocols for client transparency."
    },
    {
      icon: <Milestone className="w-6 h-6" />,
      title: "Strategic Growth",
      description: "Continuously expanding our regional hubs and localized dispatch centers to lower transit times and overhead costs for everyone."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-xs">
            Behind the Brand
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
            Our Operational Foundations
          </h3>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* 4-Card Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarsList.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl text-left shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Icon Container with that matching clean orange theme */}
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                {pillar.icon}
              </div>
              
              {/* Card Title */}
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                {pillar.title}
              </h4>
              
              {/* Card Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
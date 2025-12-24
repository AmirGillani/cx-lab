'use client';
import React, { useState } from 'react';
import { InsightSectionProps } from '../../types';
import { ICONS } from '../constans';

const InsightSection: React.FC<InsightSectionProps> = ({ 
  title, 
  subtitle, 
  narrative, 
  whyItMatters, 
  methodology, 
  children 
}) => {
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Storytelling Content */}
        <div className="lg:col-span-5 space-y-6">
          <header>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">{title}</h2>
            <p className="mt-2 text-lg text-slate-500 font-medium">{subtitle}</p>
          </header>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed text-lg">
              {narrative}
            </p>
          </div>

          <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <div className="flex items-start gap-3">
              <ICONS.LightBulb className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Why it matters</h4>
                <p className="text-blue-800 text-sm leading-relaxed">{whyItMatters}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowMethodology(!showMethodology)}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ICONS.Info className="w-4 h-4" />
            {showMethodology ? 'Hide Methodology' : 'View Methodology'}
          </button>

          {showMethodology && (
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 animate-in fade-in duration-300">
              <span className="font-semibold block mb-1 uppercase tracking-wider">Analysis Methodology</span>
              {methodology}
            </div>
          )}
        </div>

        {/* Visualization Area */}
        <div 
          className="lg:col-span-7 bg-slate-50 rounded-xl p-4 sm:p-8 min-h-[400px] flex items-center justify-center border border-slate-100"
          tabIndex={-1}
          onFocus={(e) => e.currentTarget.blur()}
          style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
        >
          <div 
            className="w-full h-[400px]"
            tabIndex={-1}
            onFocus={(e) => e.currentTarget.blur()}
            style={{ outline: 'none' }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;

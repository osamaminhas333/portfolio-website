"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  details: string;
  category: 'AI / AGENTIC WORKFLOWS' | 'FINANCE / CORE';
}

const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google AI Professional Certificate',
    issuer: 'Coursera (Google)',
    details: '7 Courses in Applied AI & Deep Learning',
    category: 'AI / AGENTIC WORKFLOWS',
  },
  {
    id: 'cert-2',
    title: 'Practical AI Agents 2026: Build Agentic Workflows',
    issuer: 'Packt / Coursera',
    details: 'Multi-agent system architecture & deployment',
    category: 'AI / AGENTIC WORKFLOWS',
  },
  {
    id: 'cert-3',
    title: 'AI Automation Engineer with n8n',
    issuer: 'LearnkartS / Coursera',
    details: '7 Courses — Webhooks, APIs, & n8n Workflows',
    category: 'AI / AGENTIC WORKFLOWS',
  },
  {
    id: 'cert-4',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    details: 'Structured delegation, prompt architecture',
    category: 'AI / AGENTIC WORKFLOWS',
  },
  {
    id: 'cert-5',
    title: 'Claude Code 101 & Claude 101',
    issuer: 'Anthropic',
    details: 'Production-grade AI coding harnesses',
    category: 'AI / AGENTIC WORKFLOWS',
  },
  {
    id: 'cert-6',
    title: 'Chartered Accountancy (CA Inter)',
    issuer: 'Institute of Chartered Accountants of Pakistan',
    details: 'AFC & CAF Qualified — Rigorous Audit Discipline',
    category: 'FINANCE / CORE',
  },
  {
    id: 'cert-7',
    title: 'Workshop On Building Sustainability',
    issuer: 'SMP Committee of ICAP',
    details: 'Sustainability & ESG Reporting',
    category: 'FINANCE / CORE',
  },
  {
    id: 'cert-8',
    title: 'Integrated sustainability disclosures',
    issuer: 'IFRS',
    details: 'IFRS Sustainability Standards',
    category: 'FINANCE / CORE',
  },
  {
    id: 'cert-9',
    title: 'Introduction to IFRS S1',
    issuer: 'IFRS',
    details: 'General Requirements for Disclosure of Sustainability-related Financial Information',
    category: 'FINANCE / CORE',
  },
  {
    id: 'cert-10',
    title: 'Introduction to IFRS S2',
    issuer: 'IFRS',
    details: 'Climate-related Disclosures',
    category: 'FINANCE / CORE',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37] font-sans"
          >
            05 / CREDENTIALS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bebas"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              VERIFIED
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              EXPERTISE.
            </span>
          </h2>
        </motion.div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative p-7 rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C]/80 backdrop-blur-md group hover:border-[#D4AF37]/70 hover:bg-[#1A1612] transition-all duration-500 cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]"
            >
              {/* Top Golden Light Flare */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="block text-[9px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
                    // {cert.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl text-white tracking-wide leading-tight mb-2 group-hover:text-[#F7E7C4] transition-colors font-bebas">
                    {cert.title}
                  </h3>
                  
                  <span className="block text-xs font-medium tracking-wider text-[#8C6D4F] uppercase font-sans mb-4">
                    {cert.issuer}
                  </span>
                </div>
                
                <div className="pt-5 border-t border-[#8C6D4F]/20 mt-auto">
                  <p className="text-[11px] sm:text-xs text-[#A8988B] font-light leading-relaxed font-sans">
                    {cert.details}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;

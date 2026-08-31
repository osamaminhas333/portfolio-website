"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  details: string;
  category: 'AI / AGENTIC WORKFLOWS' | 'FINANCE / CORE';
  imagePath: string;
  customLabel?: string;
  subLabel?: string;
  highlightLabel?: boolean;
}

const certifications: Certification[] = [
  // AI Certificates
  {
    id: 'ai-3',
    title: 'AI Automation Engineer with n8n',
    issuer: 'LearnkartS / Coursera',
    details: 'Webhooks, APIs, & Workflows',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/ai-automation-engineer-with-n8n.png',
    customLabel: 'SPECIALISATION',
    subLabel: '(7 Courses)',
    highlightLabel: true
  },
  {
    id: 'ai-2',
    title: 'Practical AI Agents 2026: Build Agentic Workflows',
    issuer: 'Packt / Coursera',
    details: 'Multi-agent system architecture',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/practical-ai-agents-2026.png',
    customLabel: 'SPECIALISATION',
    highlightLabel: true
  },
  {
    id: 'ai-1',
    title: 'Google AI Professional Certificate',
    issuer: 'Coursera (Google)',
    details: 'Applied AI & Deep Learning',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/google-ai-professional.png',
    customLabel: 'SPECIALISATION',
    subLabel: '(7 Courses)',
    highlightLabel: true
  },
  {
    id: 'ai-4',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    details: 'Structured delegation & LLM foundations',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/ai-fluency-framework-and-foundations.png',
    customLabel: 'AI FLUENCY'
  },
  {
    id: 'ai-5',
    title: 'AI Fluency and Capabilities',
    issuer: 'Anthropic',
    details: 'Advanced capabilities evaluation',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/ai-fluency-and-capabilities.png',
    customLabel: 'AI FLUENCY'
  },
  {
    id: 'ai-6',
    title: 'Claude 101',
    issuer: 'Anthropic',
    details: 'Core prompt engineering',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/claude-101.png',
    customLabel: 'CLAUDE EXPERTISE'
  },
  {
    id: 'ai-7',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    details: 'Production-grade AI coding harnesses',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/claude-code-101.png',
    customLabel: 'CLAUDE CODE MASTERY'
  },
  {
    id: 'ai-8',
    title: 'Introduction To Model Context Protocol',
    issuer: 'Anthropic',
    details: 'Tool usage and standard MCP protocols',
    category: 'AI / AGENTIC WORKFLOWS',
    imagePath: '/documents/certificates/ai/introduction-to-mcp.png',
    customLabel: 'MCP INTRODUCTION'
  },

  // CA Certificates
  {
    id: 'ca-1',
    title: 'Chartered Accountancy (CA Inter)',
    issuer: 'Institute of Chartered Accountants of Pakistan',
    details: 'AFC & CAF Qualified — Rigorous Audit Discipline',
    category: 'FINANCE / CORE',
    imagePath: '/documents/certificates/ca/icap-ca-inter.png',
    customLabel: 'ACCOUNTING AND FINANCE'
  },
  {
    id: 'ca-2',
    title: 'Workshop On Building Sustainability (S1, S2)',
    issuer: 'SMP Committee of ICAP',
    details: 'Sustainability & ESG Reporting',
    category: 'FINANCE / CORE',
    imagePath: '/documents/certificates/ca/workshop-on-building-sustainability.png',
    customLabel: 'SUSTAINABILITY REPORTING'
  },
  {
    id: 'ca-3',
    title: 'Integrated Sustainability Disclosures',
    issuer: 'IFRS',
    details: 'IFRS Sustainability Standards',
    category: 'FINANCE / CORE',
    imagePath: '/documents/certificates/ca/integrated-sustainability-disclosures.png',
    customLabel: 'SUSTAINABILITY REPORTING'
  },
  {
    id: 'ca-4',
    title: 'Introduction to IFRS S1',
    issuer: 'IFRS',
    details: 'General Requirements for Disclosure of Sustainability-related Financial Information',
    category: 'FINANCE / CORE',
    imagePath: '/documents/certificates/ca/introduction-to-ifrs-s1.png',
    customLabel: 'SUSTAINABILITY REPORTING'
  },
  {
    id: 'ca-5',
    title: 'Introduction to IFRS S2',
    issuer: 'IFRS',
    details: 'Climate-related Disclosures',
    category: 'FINANCE / CORE',
    imagePath: '/documents/certificates/ca/introduction-to-ifrs-s2.png',
    customLabel: 'SUSTAINABILITY REPORTING'
  }
];

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const aiCerts = certifications.filter(c => c.category === 'AI / AGENTIC WORKFLOWS');
  const caCerts = certifications.filter(c => c.category === 'FINANCE / CORE');

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
            04 / CREDENTIALS
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

        {/* AI CERTIFICATES */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-[#F3DBB3] mb-8 font-bebas border-b border-[#8C6D4F]/30 pb-4">
            AI CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="relative p-7 rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C]/80 backdrop-blur-md group hover:border-[#D4AF37]/70 hover:bg-[#1A1612] transition-all duration-500 cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className={`block uppercase mb-3 ${cert.highlightLabel ? 'text-[11px] font-bold font-sans tracking-[0.35em] text-[#F3DBB3] drop-shadow-[0_0_8px_rgba(243,219,179,0.5)]' : 'text-[9px] font-mono tracking-[0.25em] text-[#D4AF37]'}`}>
                      | {cert.customLabel || cert.category.replace(/\//g, '|')}
                      {cert.subLabel && (
                        <span className="font-normal font-sans text-[9px] tracking-[0.1em] text-[#D4AF37]/80 normal-case ml-2">
                          {cert.subLabel}
                        </span>
                      )}
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
                    <span className="block mt-4 text-[10px] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.2em] font-medium uppercase">
                      VIEW CERTIFICATE ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CA CERTIFICATES */}
        <div>
          <h3 className="text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-[#F3DBB3] mb-8 font-bebas border-b border-[#8C6D4F]/30 pb-4 mt-16">
            CA CERTIFICATES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caCerts.map((cert, index) => {
              const isCaMain = cert.id === 'ca-1';
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  className={`relative p-7 rounded-sm border bg-[#120F0C]/80 backdrop-blur-md group transition-all duration-500 cursor-pointer overflow-hidden ${
                    isCaMain 
                      ? 'border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] bg-gradient-to-b from-[#1F1911] to-[#120F0C]' 
                      : 'border-[#8C6D4F]/30 hover:border-[#D4AF37]/70 hover:bg-[#1A1612] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]'
                  }`}
                >
                  {isCaMain && (
                    <div className="absolute inset-0 border border-[#D4AF37]/50 rounded-sm pointer-events-none" />
                  )}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${isCaMain ? 'via-[#D4AF37]' : 'via-[#D4AF37]/50'} to-transparent ${isCaMain ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <span className={`block uppercase mb-3 ${cert.highlightLabel ? 'text-[11px] font-bold font-sans tracking-[0.35em] text-[#F3DBB3] drop-shadow-[0_0_8px_rgba(243,219,179,0.5)]' : 'text-[9px] font-mono tracking-[0.25em] text-[#D4AF37]'}`}>
                        | {cert.customLabel || cert.category.replace(/\//g, '|')} {isCaMain && ' | CORE CREDENTIAL'}
                      </span>
                      <h3 className={`text-2xl sm:text-3xl tracking-wide leading-tight mb-2 transition-colors font-bebas ${
                        isCaMain ? 'text-[#F3DBB3]' : 'text-white group-hover:text-[#F7E7C4]'
                      }`}>
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
                      <span className="block mt-4 text-[10px] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.2em] font-medium uppercase">
                        VIEW CERTIFICATE ↗
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#0A0806] border border-[#8C6D4F]/40 p-2 shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col rounded-sm overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#120F0C] border border-[#8C6D4F]/50 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors z-20 cursor-pointer"
              >
                ✕
              </button>
              
              <div className="relative w-full h-[70vh] bg-[#0A0806]">
                <Image
                  src={selectedCert.imagePath}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
              <div className="p-4 text-center border-t border-[#8C6D4F]/20 bg-[#0A0806]">
                <h4 className="text-xl sm:text-2xl text-[#F3DBB3] font-bebas tracking-widest">{selectedCert.title}</h4>
                <p className="text-[10px] sm:text-xs text-[#A8988B] font-mono tracking-[0.2em] uppercase mt-1">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CertificationsSection;

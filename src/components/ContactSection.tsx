"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram, Mail } from 'lucide-react';

const connections = [
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    value: 'Direct Message',
    icon: <MessageCircle className="w-5 h-5" />,
    href: 'https://wa.me/923334707011?text=Hello%20Osama,%20I%20would%20like%20to%20connect.',
    clickable: true
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'osamaminhas-',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/osamaminhas-',
    clickable: true
  },
  {
    id: 'instagram',
    label: 'INSTAGRAM',
    value: '@osamaminhas_',
    icon: <Instagram className="w-5 h-5" />,
    href: 'https://www.instagram.com/osamaminhas_?igsi=ZjdjaTQzN2p1aHJ6&utm_source=qr',
    clickable: true
  },
  {
    id: 'gmail',
    label: 'GMAIL',
    value: 'osama.minhas111@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    href: '#',
    clickable: false
  }
];

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37] font-sans"
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none font-bebas"
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md font-sans"
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Choose a channel below to establish a connection.
              </p>
            </div>
          </div>

          {/* Right Column: Connection Hub (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {connections.map((conn) => {
                const Wrapper = conn.clickable ? 'a' : 'div';
                return (
                  <Wrapper
                    key={conn.id}
                    href={conn.clickable ? conn.href : undefined}
                    target={conn.clickable ? "_blank" : undefined}
                    rel={conn.clickable ? "noopener noreferrer" : undefined}
                    className={`group flex items-start space-x-4 p-5 rounded-sm border border-[#8C6D4F]/20 bg-[#120F0C] transition-all duration-300 ${
                      conn.clickable 
                        ? 'hover:border-[#D4AF37]/60 hover:bg-[#1A1612] cursor-pointer hover:shadow-[0_8px_25px_rgba(212,175,55,0.12)]' 
                        : 'opacity-90'
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`p-3 rounded-full border border-[#8C6D4F]/30 bg-[#0A0806] text-[#D4AF37] transition-colors ${
                      conn.clickable ? 'group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37]' : ''
                    }`}>
                      {conn.icon}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center pt-1">
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                        // {conn.label}
                      </span>
                      <span className={`text-[13px] font-medium tracking-wide transition-colors ${
                        conn.clickable ? 'text-[#E8DFD8] group-hover:text-[#F7E7C4]' : 'text-[#E8DFD8]'
                      }`}>
                        {conn.value}
                      </span>
                    </div>

                    {/* Optional external link arrow */}
                    {conn.clickable && (
                      <span className="absolute top-5 right-5 text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    )}
                  </Wrapper>
                );
              })}
            </div>

          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;

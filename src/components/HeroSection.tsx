"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /*
   * ZOOM-PROOF LAYOUT
   * -----------------
   * Every dimension uses pure vw (viewport-width) proportions.
   * No clamp() min/max caps, no Tailwind sm:/md:/lg: breakpoints.
   * When Chrome zoom changes the CSS viewport, ALL elements scale
   * by the exact same factor, so nothing drifts relative to the video.
   */

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black text-[#E8DFD8] font-sans cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-auto max-w-none object-cover origin-right"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div
          className="absolute pointer-events-none flex items-center justify-center z-10"
          style={{ bottom: '6%', right: '4%' }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute bg-black/85 rounded-full blur-xl" style={{ width: '9vw', height: '9vw' }} />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src="/media/watermark.png"
                alt="Insignia"
                className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                style={{ width: 'max(45px, 7vw)', height: 'max(45px, 7vw)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div
        className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none"
        style={{ padding: 'max(16px, 1.5vw) max(24px, 4vw) max(20px, 2vw) max(24px, 4vw)' }}
      >
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity font-sans"
            style={{ fontSize: 'max(20px, 1.2vw)' }}
          >
            OSAMA.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2 font-sans"
            style={{ gap: 'max(20px, 3.2vw)', fontSize: 'max(14px, 0.9vw)', letterSpacing: '0.28em' }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0 font-sans font-light uppercase"
            style={{ fontSize: 'max(14px, 0.9vw)', letterSpacing: '0.24em', padding: 'max(8px, 0.7vw) max(16px, 1.6vw)', gap: 'max(6px, 0.5vw)' }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ fontSize: 'max(12px, 0.8vw)' }}>
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row — percentage-positioned, no flex distribution */}
        <div className="relative w-full my-auto">
          
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pointer-events-auto z-20 relative"
            style={{ maxWidth: 'max(420px, 52vw)' }}
          >
            {/* Massive Condensed Headline — pure vw, no bounds */}
            <motion.div variants={fadeUpVariants} className="relative select-none" style={{ marginBottom: 'max(12px, 1vw)' }}>
              <h1
                className="tracking-tight uppercase leading-[0.83] font-bebas"
                style={{ fontSize: 'max(54px, 8.5vw)' }}
              >
                {/* Line 1 */}
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                  style={{ fontSize: 'max(48px, 7.8vw)' }}
                >
                  A CA FINALIST
                </span>

                {/* Line 2 */}
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]"
                  style={{ fontSize: 'max(48px, 7.8vw)', marginTop: 'max(4px, 0.4vw)' }}
                >
                  WHO BUILDS
                </span>

                {/* Line 3 */}
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]"
                  style={{ fontSize: 'max(48px, 7.8vw)', marginTop: 'max(4px, 0.4vw)' }}
                >
                  AGENTIC SYSTEMS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} style={{ marginBottom: 'max(12px, 1vw)', marginTop: 'max(32px, 2.5vw)' }}>
              <p
                className="font-normal uppercase text-[#C4B29E] font-sans flex flex-wrap items-center leading-snug"
                style={{ fontSize: 'max(14px, 1.25vw)', letterSpacing: '0.28em' }}
              >
                <span className="text-[#F3DBB3] font-semibold drop-shadow-[0_0_8px_rgba(243,219,179,0.5)]" style={{ letterSpacing: '0.3em' }}>CA FINALIST</span> <span className="text-[#8C6D4F]" style={{ margin: '0 max(6px, 0.5vw)' }}>•</span> AI AGENT ENGINEER <span className="text-[#8C6D4F]" style={{ margin: '0 max(6px, 0.5vw)' }}>•</span> AUTOMATION
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="font-light text-[#A8988B] tracking-wide font-sans"
              style={{ fontSize: 'max(16px, 1.35vw)', lineHeight: '1.8', maxWidth: 'max(400px, 42vw)', marginBottom: 'max(32px, 2vw)' }}
            >
              <p>
                Bridging the deep precision of Accounting and Finance with the autonomous execution of Agentic AI and Automation.
                <br />
                I deploy self-hosting agents that perform reliably in regulated, finance-heavy environments with evidence trails and verifiable output.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row flex-wrap items-center font-sans"
              style={{ gap: 'max(16px, 1.4vw)' }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] font-medium uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
                style={{ fontSize: 'max(14px, 1.1vw)', letterSpacing: '0.24em', padding: 'max(14px, 1.2vw) max(24px, 2.2vw)', gap: 'max(8px, 0.7vw)' }}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ fontSize: 'max(12px, 0.9vw)' }}>
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/documents/cv/osama-minhas-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Osama_Minhas_CV.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] font-medium uppercase transition-all duration-300"
                style={{ fontSize: 'max(14px, 1.1vw)', letterSpacing: '0.24em', padding: 'max(14px, 1.2vw) max(24px, 2.2vw)', gap: 'max(8px, 0.6vw)' }}
              >
                <span>DOWNLOAD CV</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5" style={{ fontSize: 'max(12px, 0.9vw)' }}>
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card — pure % position */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto absolute z-20 select-none"
            style={{ right: '4%', top: '50%', transform: 'translateY(-50%)' }}
          >
            {/* 1. Quote Mark */}
            <span className="text-[#C99E5D] leading-none font-serif" style={{ fontSize: 'max(24px, 1.4vw)', marginBottom: 'max(8px, 0.5vw)' }}>
              "
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="font-medium uppercase text-[#E0D3C5] font-sans"
              style={{ fontSize: 'max(11px, 0.65vw)', letterSpacing: '0.24em', marginBottom: 'max(10px, 0.8vw)' }}
            >
              <p>AUTOMATION IS MY CRAFT.</p>
              <p style={{ marginTop: 'max(4px, 0.3vw)' }}>ASSURANCE IS MY STANDARD.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)]" style={{ width: 'max(80px, 7.3vw)', height: '1px', marginBottom: 'max(8px, 0.5vw)' }} />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[#D8AB64] font-normal leading-none font-allura tracking-wide"
              style={{ fontSize: 'max(40px, 3.3vw)', marginLeft: 'min(-2px, -0.1vw)' }}
            >
              Osama
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div style={{ height: 'max(8px, 0.5vw)' }} />
      </div>
    </section>
  );
};

export default HeroSection;

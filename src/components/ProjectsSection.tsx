"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem, ScrollStackRef } from './ui/ScrollStack';

interface Project {
  number: string;
  title: string;
  shortTitle?: string;
  category: string;
  description: React.ReactNode;
  githubUrl: string;
  linkText?: string;
  thumbnailUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Agent Runs ODOO | Accounting on Autopilot',
    category: 'ERP / AGENT ORCHESTRATION',
    description: (
      <div className="space-y-3">
        <p>
          One prompt, one run: an AI agent completes a full business cycle inside Odoo ERP on its own. CRM, sales, delivery, invoicing, payment, inventory, purchasing, manufacturing and HR, with zero clicks from me. Built for CA, ACCA, ERP consultants and finance professionals who want to see agentic AI working inside a real ERP, not just answering questions in a chatbot.
        </p>
        <p className="font-semibold text-[#D4AF37]">What happens in this demo:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-4 list-disc marker:text-[#D4AF37] text-[11px] leading-tight">
          <li><strong>CRM:</strong> creates the customer and marks the opportunity as won</li>
          <li><strong>Sales:</strong> generates and confirms the sales order</li>
          <li><strong>Delivery:</strong> processes the delivery to the customer</li>
          <li><strong>Accounting:</strong> creates the invoice and registers the payment</li>
          <li><strong>Inventory:</strong> updates stock levels</li>
          <li><strong>Purchasing:</strong> places the purchase order</li>
          <li><strong>Manufacturing:</strong> runs the manufacturing order</li>
          <li><strong>HR:</strong> creates a new employee and approves a leave request</li>
        </ul>
        <p className="text-[11px] leading-relaxed">
          <strong className="text-[#D4AF37]">How it works:</strong> I wrote one comprehensive prompt covering the whole cycle and ran it in Claude, connected to Odoo through MCP (Model Context Protocol). MCP lets Claude use Odoo's real functions directly, so it executes each step itself instead of telling you what to click. At the end, every record is checked inside Odoo. (The execution part is sped up in the video.)
        </p>
      </div>
    ),
    githubUrl: 'https://www.youtube.com/watch?v=xpXql7syJpc',
    linkText: 'Watch Project Video',
    thumbnailUrl: '/media/odoo-thumbnail.png',
    tech: [
      'Claude',
      'Model Context Protocol (MCP)',
      'Odoo ERP',
    ],
    metrics: [
      { label: 'OPERATION', value: 'Automated Entry' },
      { label: 'ENGINE', value: 'Agent Harness' },
      { label: 'AUDIT', value: 'Verifiable Trail' },
    ],
  },
  {
    number: '02',
    title: 'QuickBooks AI Bookkeeping Agent',
    category: 'ACCOUNTING / AI AUTOMATION',
    description: (
      <div className="space-y-3">
        <p>
          An advanced AI-powered bookkeeping pipeline seamlessly integrated with QuickBooks Online. This autonomous agent functions as a 24/7 virtual bookkeeper, managing core accounting operations with absolute precision:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-4 list-disc marker:text-[#D4AF37]">
          <li><strong>Bank Reconciliations:</strong> Autonomous matching of bank feeds and transaction coding.</li>
          <li><strong>Invoice & Receipt Processing:</strong> Automated OCR extraction and precise expense categorization.</li>
          <li><strong>AP & AR Management:</strong> Tracking vendor bills, sending payment reminders, and managing receivables.</li>
          <li><strong>Financial Reporting:</strong> Real-time generation of P&L statements, balance sheets, and audit trails.</li>
        </ul>
        <p>
          By automating these QuickBooks essentials, the agent ensures continuous, error-free accounting records ready for tax compliance.
        </p>
      </div>
    ),
    githubUrl: '#',
    tech: [
      'QuickBooks API',
      'AI Agent',
      'Data Extraction',
      'Financial Recon',
    ],
    metrics: [
      { label: 'OPERATION', value: 'Continuous Bookkeeping' },
      { label: 'ENGINE', value: 'AI Agent' },
      { label: 'ACCURACY', value: 'High-Precision Extraction' },
    ],
  },
  {
    number: '03',
    title: 'Automated MS Excel Office Work',
    category: 'OFFICE AUTOMATION / AI SCRIPTING',
    description: (
      <div className="space-y-3">
        <p>
          Transforming manual spreadsheet workflows into an autonomous pipeline by connecting Microsoft Excel directly to AI agents via the Model Context Protocol (MCP). This integration completely eliminates repetitive data entry and complex manual formatting:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-4 list-disc marker:text-[#D4AF37]">
          <li><strong>Data Formatting & Cleansing:</strong> Autonomous parsing, structuring, and cleaning of raw financial datasets.</li>
          <li><strong>Complex Calculations:</strong> AI-driven execution of dynamic financial modeling and pivot logic.</li>
          <li><strong>Bulk Reporting:</strong> Automated generation and styling of executive dashboards and summaries.</li>
          <li><strong>Cross-System Sync:</strong> Seamlessly reading and writing data between Excel and external databases via MCP.</li>
        </ul>
        <p>
          By leveraging MCP, the AI agent possesses deep contextual awareness of local Excel files, enabling error-free, instant execution of enterprise-grade spreadsheet tasks.
        </p>
      </div>
    ),
    githubUrl: '#',
    tech: [
      'MS Excel',
      'MCP',
      'Python',
      'AI Agents',
      'Reporting Automation',
    ],
    metrics: [
      { label: 'OPERATION', value: 'Repetitive Task Automation' },
      { label: 'ENGINE', value: 'AI Scripts' },
      { label: 'IMPACT', value: 'Manual Work Eliminated' },
    ],
  },
  {
    number: '04',
    title: 'Autonomous Crypto Trading Agent',
    category: 'AI / ALGORITHMIC TRADING',
    description: (
      <div className="space-y-3">
        <p>
          A 24/7 unattended algorithmic trading system built on a hybrid architecture of agent harnesses and workflow automation. This setup ensures continuous market operation and risk management:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-4 list-disc marker:text-[#D4AF37]">
          <li><strong>Control & Logic:</strong> Developed and controlled via Claude Code / OpenCode (Harness).</li>
          <li><strong>Execution Engine:</strong> Trading automation and data pipelines run entirely on n8n.</li>
          <li><strong>Live Reporting:</strong> Instant trade alerts and P&L summaries via Telegram.</li>
          <li><strong>Risk Management:</strong> Autonomous data ingestion and strict persistent session state.</li>
        </ul>
      </div>
    ),
    githubUrl: '#',
    tech: [
      'Claude Code / OpenCode',
      'n8n',
      'Telegram API',
      'Python',
      'Algorithmic Trading',
    ],
    metrics: [
      { label: 'OPERATION', value: '24/7 Unattended' },
      { label: 'ENGINE', value: 'Claude Code' },
      { label: 'STATE', value: 'Persistent Sessions' },
    ],
  },
  {
    number: '05',
    title: 'Facebook Bulk Pages Scheduling Automation | Auto-Schedule Posts to bulk Pages with n8n',
    shortTitle: 'Facebook Bulk Pages Scheduling Automation',
    category: 'SOCIAL MEDIA / AUTOMATION',
    description: (
      <div className="space-y-3">
        <p className="font-semibold text-[#D4AF37]">
          Stop scheduling Facebook posts page by page.
        </p>
        <p>
          This short workflow animation demonstrates an n8n automation for scheduling content across multiple Facebook Pages—from loading content and looping through pages to scheduling posts and updating their status.
        </p>
        <p>
          Built around bulk content scheduling for social media managers, agencies, and businesses managing multiple pages.
        </p>
        <p className="text-[11px] leading-relaxed text-[#D4AF37]">
          Need a similar Facebook automation? Comment “AUTOMATE” and tell us how many pages you manage.
          <br />
          Subscribe for more n8n workflows and social media automation demos.
          <br />
          #n8n #FacebookAutomation #SocialMediaAutomation
        </p>
      </div>
    ),
    githubUrl: 'https://www.youtube.com/watch?v=W3dnLVDcGIA',
    linkText: 'Watch Project Video',
    thumbnailUrl: '/media/facebook-bulk-thumbnail.png',
    tech: [
      'n8n',
      'Facebook API',
      'Bulk Automation',
      'Workflow Logic',
    ],
    metrics: [
      { label: 'OPERATION', value: 'Bulk Scheduling' },
      { label: 'ENGINE', value: 'n8n Workflow' },
      { label: 'IMPACT', value: 'Time Saved' },
    ],
  },
  {
    number: '06',
    title: 'Free AI Video Generator',
    category: 'OPEN-WEIGHT AI / SERVERLESS GPU',
    description: (
      <div className="space-y-3">
        <p>
          Free AI video generation on autopilot: add a title and a reference image to Google Sheets, and this n8n workflow keeps generating videos in a loop with no paid video API.
        </p>
        <p>
          The model (Wan 2.2 image-to-video on ComfyUI) runs on serverless GPUs through my Modal account, inside Modal's free credits.
        </p>
        <p className="font-semibold text-[#D4AF37]">How the automation works:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-1 pl-4 list-disc marker:text-[#D4AF37] text-[11px] leading-tight">
          <li><strong>Input:</strong> Google Sheet row = title/prompt + reference image</li>
          <li><strong>Trigger:</strong> n8n picks the next row automatically</li>
          <li><strong>Processing:</strong> Image + prompt go to the GPU endpoint on Modal</li>
          <li><strong>Output:</strong> AI video is generated and returned</li>
          <li><strong>Iteration:</strong> Loop moves to the next row until the sheet is done</li>
        </ul>
        <p className="text-[11px] leading-relaxed">
          <strong className="text-[#D4AF37]">Why it matters:</strong> no per-video API cost, no manual prompting, and scaling up is as simple as adding rows.
        </p>
      </div>
    ),
    githubUrl: 'https://www.youtube.com/watch?v=1zdaOVHCgCY',
    linkText: 'Watch Video',
    thumbnailUrl: '/media/video-gen-thumbnail.jpg',
    tech: [
      'n8n',
      'Google Sheets',
      'ComfyUI',
      'Wan 2.2',
      'Modal',
    ],
    metrics: [
      { label: 'MODEL', value: 'Wan 2.2 (Open-Weight)' },
      { label: 'INFRASTRUCTURE', value: 'Serverless A100' },
      { label: 'COST EFFICIENCY', value: 'Near-Zero Marginal' },
    ],
  },
  {
    number: '07',
    title: 'Stop Clicking. Let AI Control Your Browser!',
    category: 'BROWSER AUTOMATION / AI AGENTS',
    description: (
      <div className="space-y-3">
        <p>
          <strong className="text-[#D4AF37]">What if your browser could do the work for you?</strong>
        </p>
        <p>
          In this demo, I give an AI agent a task—and it browses multiple websites, researches movie recommendations, compiles a list, and sends it through WhatsApp Web.
        </p>
        <p className="font-semibold text-[#D4AF37]">You’ll see:</p>
        <ul className="grid grid-cols-1 gap-y-1 pl-4 list-disc marker:text-[#D4AF37] text-[11px] leading-tight">
          <li>How to set up Browser Use with Codex</li>
          <li>How to connect Chrome through CDP</li>
          <li>AI researching across websites</li>
          <li>Research results delivered through WhatsApp</li>
        </ul>
        <p className="text-[11px] leading-relaxed">
          From searching to sending, watch the workflow in action—and imagine which repetitive browser task you could automate next.
        </p>
      </div>
    ),
    githubUrl: 'https://www.youtube.com/watch?v=KmDZGWrOez0&list=PLVwgOBp4SYOs',
    linkText: 'Watch Video',
    thumbnailUrl: '/media/browser-automation-thumbnail.jpg',
    tech: [
      'Browser Use',
      'Codex',
      'Chrome CDP',
      'WhatsApp Web',
      'AI Agents',
    ],
    metrics: [
      { label: 'OPERATION', value: 'Web Automation' },
      { label: 'ENGINE', value: 'Codex & Browser Use' },
      { label: 'INTEGRATION', value: 'WhatsApp Web' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const scrollStackRef = useRef<ScrollStackRef>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const scrollToProject = (index: number) => {
    if (scrollStackRef.current) {
      scrollStackRef.current.scrollToItem(index);
    }
  };

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows (Wrapped to prevent horizontal overflow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none font-bebas"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed font-sans"
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges with precision.
          </p>
        </motion.div>

        {/* MOBILE: Grid Project Directory (Hidden on desktop) */}
        <div className="block lg:hidden w-full pb-6 mb-10 border-b border-[#8C6D4F]/20">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] block mb-4 px-2">
            // PROJECT DIRECTORY
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 px-2">
            {projects.map((project, i) => (
              <div 
                key={project.title} 
                className="relative group cursor-pointer flex flex-col items-start" 
                onClick={() => scrollToProject(i)}
              >
                <div className="w-1.5 h-1.5 rounded-full border border-[#8C6D4F]/40 bg-black group-active:bg-[#D4AF37] transition-colors mb-2" />
                <h5 className="text-[9.5px] font-medium tracking-widest text-[#A8988B] group-active:text-[#F7E7C4] transition-colors uppercase leading-[1.4]">
                  {project.shortTitle || project.title}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* React Bits Stacking Deck + Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          
          {/* LEFT: Project Cards */}
          <div className="lg:col-span-8 xl:col-span-9">
            <ScrollStack
              ref={scrollStackRef}
              itemDistance={20}
              itemScale={0.035}
              itemStackDistance={18}
              stackPosition="15%"
              scaleEndPosition="6%"
              baseScale={1 - (projects.length - 1) * 0.035}
              useWindowScroll={true}
            >
              {projects.map((project, index) => (
                <ScrollStackItem key={project.title} id={`project-${project.number}`}>
                  <div 
                    className="relative w-full h-[550px] sm:h-[450px] perspective-[2000px] group cursor-pointer lg:cursor-default"
                    onClick={() => toggleFlip(index)}
                  >
                <div className={`w-full h-full relative transition-transform duration-1000 [transform-style:preserve-3d] shadow-[0_25px_70px_rgba(0,0,0,0.98)] lg:group-hover:[transform:rotateX(180deg)] ${flippedCards[index] ? '[transform:rotateX(180deg)]' : ''}`}>
                  
                  {/* ================= FRONT FACE ================= */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 [backface-visibility:hidden] overflow-hidden flex flex-col justify-between">
                    {/* Top Gold Border Light Flare */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                    {/* Corner Minimal L-Brackets */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />

                    {/* Big Background Watermark Number */}
                    <span className="absolute -bottom-6 -right-3 text-8xl sm:text-[12rem] font-bold text-[#EAD8C7]/[0.03] select-none pointer-events-none leading-none font-bebas">
                      {project.number}
                    </span>

                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-4 uppercase leading-[0.9] font-bebas max-w-2xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3 text-[#D4AF37] opacity-80">
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase hidden lg:inline">Hover to Explore Details</span>
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase lg:hidden">Tap to Explore Details</span>
                      <span className="animate-pulse text-sm">↓</span>
                    </div>
                  </div>

                  {/* ================= BACK FACE ================= */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl border border-[#D4AF37]/80 bg-[#16120E] p-8 sm:p-12 [backface-visibility:hidden] [transform:rotateX(180deg)_translateZ(1px)] overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(212,175,55,0.15)] antialiased">
                    <div className="flex flex-col h-full overflow-hidden">
                      <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-6">
                        
                        {/* LEFT COLUMN: Title + Scrolling Description */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                          <h4 className="shrink-0 text-2xl text-[#F7E7C4] font-bebas tracking-wide mb-4 uppercase">
                            {project.title}
                          </h4>
                          <div 
                            className="flex-1 overflow-y-auto pr-2 overscroll-contain" 
                            style={{ scrollbarWidth: 'thin', scrollbarColor: '#8C6D4F #16120E' }}
                          >
                            <div className="text-xs sm:text-[13.5px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide font-sans pb-4">
                              {project.description}
                            </div>
                          </div>
                        </div>
                        
                        {/* RIGHT COLUMN: Thumbnail + Button */}
                        {project.thumbnailUrl && (
                          <div className="w-full md:w-64 shrink-0 flex flex-col items-center gap-4">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-md border border-[#8C6D4F]/40 hover:border-[#D4AF37] transition-colors relative group">
                               <img src={project.thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto aspect-video object-contain bg-black opacity-80 group-hover:opacity-100 transition-opacity" />
                               <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/90 transition-colors">
                                   <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                 </div>
                               </div>
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group w-full inline-flex items-center justify-center space-x-2 px-6 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors duration-300 rounded-sm"
                            >
                              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-[#F7E7C4]">
                                Watch Project Video
                              </span>
                              <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]">
                                ↗
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                      
                      {/* FOOTER: Tech Stack + Button (if NO thumbnail) */}
                      <div className="mt-4 shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-[#8C6D4F]/20">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-[9.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] text-[#E8D7C5] font-sans"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        {!project.thumbnailUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group shrink-0 inline-flex items-center justify-center space-x-2 px-6 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors duration-300 rounded-sm"
                          >
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-[#F7E7C4]">
                              {project.linkText || 'View Deployment'}
                            </span>
                            <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]">
                              ↗
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
          </ScrollStack>
          </div>

          {/* RIGHT: Timeline Navigation */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 h-full">
            <div className="sticky top-40 space-y-6">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] block mb-4">
                // PROJECT DIRECTORY
              </span>
              <div className="relative pl-6 border-l border-[#8C6D4F]/20">
                {projects.map((project, i) => (
                  <div 
                    key={project.title} 
                    className="relative mb-6 group cursor-pointer" 
                    onClick={() => scrollToProject(i)}
                  >
                    {/* Hover indicator dot */}
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full border border-[#8C6D4F]/40 bg-black group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300" />
                    
                    <h5 className="text-[13px] font-medium tracking-wide text-[#A8988B] group-hover:text-[#F7E7C4] transition-colors uppercase">
                      {project.shortTitle || project.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

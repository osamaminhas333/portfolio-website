"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem, ScrollStackRef } from './ui/ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: React.ReactNode;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Odoo (ERP) Agentic Automation',
    category: 'ERP / AGENT ORCHESTRATION',
    description: (
      <div className="space-y-3">
        <p>
          End-to-end integration of Odoo ERP with autonomous agent harnesses, transforming a traditional ERP into an intelligent, self-driving business engine. The AI agents have full control to execute and monitor workflows across all major Odoo modules without manual intervention:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4 list-disc marker:text-[#D4AF37]">
          <li><strong>Sales & CRM:</strong> Automated lead scoring, quotation generation, and follow-ups.</li>
          <li><strong>Accounting:</strong> Journal entries, ledger reconciliations, and tax compliance.</li>
          <li><strong>Accounts Payable & Receivable:</strong> Automated invoice matching, payment tracking, and aging analysis.</li>
          <li><strong>Inventory & Procurement:</strong> Autonomous stock monitoring and automated purchase orders.</li>
        </ul>
        <p>
          This architecture ensures absolute operational efficiency with built-in audit trails and control testing.
        </p>
      </div>
    ),
    githubUrl: '#',
    tech: [
      'Odoo ERP',
      'Agent Harness',
      'Python',
      'Automation',
      'Financial Accounting',
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
    title: 'Content Factory — Content Pipeline',
    category: 'AUTOMATION / MULTI-AGENT SYSTEM',
    description: (
      <div className="space-y-3">
        <p>
          An end-to-end n8n workflow factory functioning entirely as an autonomous multi-agent system. This robust content creation pipeline handles the complete lifecycle of digital media production and distribution:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-4 list-disc marker:text-[#D4AF37]">
          <li><strong>Research:</strong> Autonomous trend analysis and topic gathering.</li>
          <li><strong>Scripting:</strong> AI-driven generation of tailored video scripts.</li>
          <li><strong>Asset Creation:</strong> Automated video and image generation pipeline.</li>
          <li><strong>Distribution:</strong> Direct uploading to TikTok, Facebook, YouTube, and Instagram.</li>
        </ul>
      </div>
    ),
    githubUrl: '#',
    tech: [
      'n8n',
      'Webhooks',
      'REST APIs',
      'Multi-Agent System',
      'Scripting Automation',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Workflow Factory' },
      { label: 'PIPELINE', value: 'Fully Autonomous' },
      { label: 'INTEGRATION', value: 'Multi-Platform' },
    ],
  },
  {
    number: '06',
    title: 'Zero-Cost Video Gen Stack',
    category: 'OPEN-WEIGHT AI / SERVERLESS GPU',
    description:
      'Open-weight Wan 2.2 video model deployed on ComfyUI over serverless GPU (Modal, A100) with authenticated endpoints and budget controls, wired into n8n — replacing paid video APIs at near-zero marginal cost.',
    githubUrl: '#',
    tech: [
      'Wan 2.2',
      'ComfyUI',
      'Modal (A100)',
      'n8n',
      'Serverless GPU',
      'API Authentication',
    ],
    metrics: [
      { label: 'MODEL', value: 'Wan 2.2 (Open-Weight)' },
      { label: 'INFRASTRUCTURE', value: 'Serverless A100' },
      { label: 'COST EFFICIENCY', value: 'Near-Zero Marginal' },
    ],
  },
  {
    number: '07',
    title: 'Self-Hosted Agent Environment',
    category: 'LOCAL DEPLOYMENT / CONTAINERIZATION',
    description:
      'Deployed a comprehensive self-hosted environment integrating OpenHands, n8n, OpenClaw, Agent Harnesses, OMP, ComfyUI, MCP, Odoo, and PostgreSQL under Docker. Configured with persistent volumes, isolated networking, and interchangeable LLM backends for secure, robust local execution.',
    githubUrl: '#',
    tech: [
      'Docker',
      'Docker Compose',
      'OpenHands',
      'WSL2',
      'Volume Persistence',
      'LLM Configuration',
    ],
    metrics: [
      { label: 'DEPLOYMENT', value: 'Containerized (Docker)' },
      { label: 'SECURITY', value: 'Isolated Networking' },
      { label: 'FLEXIBILITY', value: 'Configurable Backends' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const scrollStackRef = useRef<ScrollStackRef>(null);

  const scrollToProject = (index: number) => {
    if (scrollStackRef.current) {
      scrollStackRef.current.scrollToItem(index);
    }
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
                  {project.title}
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
              {projects.map((project) => (
                <ScrollStackItem key={project.title} id={`project-${project.number}`}>
                  <div className="relative w-full h-[550px] sm:h-[450px] perspective-[2000px] group">
                <div className="w-full h-full relative transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-[0_25px_70px_rgba(0,0,0,0.98)]">
                  
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
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Hover to Explore Details</span>
                      <span className="animate-pulse text-sm">↓</span>
                    </div>
                  </div>

                  {/* ================= BACK FACE ================= */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl border border-[#D4AF37]/80 bg-[#16120E] p-8 sm:p-12 [backface-visibility:hidden] [transform:rotateX(180deg)] overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-2xl text-[#F7E7C4] font-bebas tracking-wide mb-4 uppercase">{project.title}</h4>
                        <div className="text-xs sm:text-[13.5px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide font-sans">
                          {project.description}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
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
                        
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center space-x-2 px-6 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors duration-300 rounded-sm"
                        >
                          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-[#F7E7C4]">
                            View Deployment
                          </span>
                          <span className="text-[10px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]">
                            ↗
                          </span>
                        </a>
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
                      {project.title}
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

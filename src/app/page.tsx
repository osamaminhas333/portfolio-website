import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

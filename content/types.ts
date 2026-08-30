export type DateString = string; // e.g., "2026-06" or "2026-07-24"

export type Project = {
  id: string;
  title: string;
  description: string;
  stackIds: string[];
};

export type Competency = {
  id: string;
  title: string;
  description: string;
};

export type StackCategory = 
  | 'Agentic Harnesses'
  | 'LLM Backends'
  | 'Automation'
  | 'Infrastructure'
  | 'Audit & Finance'
  | 'Standards'
  | 'Methodology (AI Toolkit)';

export type StackTool = {
  id: string;
  name: string;
  category: StackCategory;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  startDate: DateString;
  endDate: DateString | null; // null means PRESENT
  bullets: string[];
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  startDate: DateString;
  endDate: DateString;
  bullets?: string[];
};

export type CertCategory = 'AI' | 'CA & Finance' | 'Other';
export type CertSubCategory = 
  | 'Agentic & LLM Engineering'
  | 'AI Fluency & Applied AI'
  | 'Automation'
  | 'ICAP — CA Inter'
  | 'Sustainability & Reporting'
  | 'Degrees & Academic'
  | 'General';

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: DateString | null;
  credentialId: string | null;
  category: CertCategory;
  subCategory: CertSubCategory;
  documents: string[]; // Paths relative to public/, e.g., "/documents/certificates/ai/claude-101.png"
  isGold?: boolean; // Reserved for CA Inter
};

export type ProfileData = {
  name: string;
  titles: string[];
  email: string;
  phone: string;
  location: string;
  socials: {
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  bio: string;
  interests: string[];
  languages: { name: string; proficiency: string }[];
};

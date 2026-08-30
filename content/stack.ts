import { StackTool } from './types';

export const stack: StackTool[] = [
  // Agentic Harnesses
  { id: "claude-code", name: "Claude Code", category: "Agentic Harnesses" },
  { id: "openai-codex", name: "OpenAI Codex", category: "Agentic Harnesses" },
  { id: "opencode", name: "OpenCode", category: "Agentic Harnesses" },
  { id: "openhands", name: "OpenHands", category: "Agentic Harnesses" },
  { id: "manus", name: "Manus", category: "Agentic Harnesses" },
  
  // LLM Backends
  { id: "claude", name: "Claude", category: "LLM Backends" },
  { id: "gpt", name: "GPT", category: "LLM Backends" },
  { id: "gemini", name: "Gemini", category: "LLM Backends" },
  { id: "qwen", name: "Qwen", category: "LLM Backends" },
  { id: "llama", name: "Llama", category: "LLM Backends" },
  { id: "kimi", name: "Kimi (API & Web UI)", category: "LLM Backends" },
  
  // Automation
  { id: "n8n", name: "n8n", category: "Automation" },
  { id: "mcp-servers", name: "MCP Servers", category: "Automation" },
  { id: "apify", name: "Apify", category: "Automation" },
  { id: "airtable", name: "Airtable", category: "Automation" },
  { id: "webhooks-rest-apis", name: "Webhooks & REST APIs", category: "Automation" },
  
  // Infrastructure
  { id: "docker", name: "Docker", category: "Infrastructure" },
  { id: "docker-compose", name: "Docker Compose", category: "Infrastructure" },
  { id: "localhost-self-hosting", name: "Localhost Self-Hosting", category: "Infrastructure" },
  { id: "wsl2", name: "WSL2", category: "Infrastructure" },
  { id: "git", name: "Git", category: "Infrastructure" },
  
  // Audit & Finance
  { id: "inflo-audit-platform", name: "Inflo Audit Platform", category: "Audit & Finance" },
  { id: "odoo-erp", name: "Odoo ERP", category: "Audit & Finance" },
  { id: "advanced-ms-excel", name: "Advanced MS Excel", category: "Audit & Finance" },
  { id: "ms-office", name: "MS Office", category: "Audit & Finance" },
  
  // Standards
  { id: "ifrs", name: "IFRS", category: "Standards" },
  { id: "ifrs-s1-s2", name: "IFRS S1 & S2", category: "Standards" },
  { id: "isa", name: "International Standards on Auditing (ISA)", category: "Standards" },
  
  // Methodology (AI Toolkit)
  { id: "agent-memory", name: "Agent Memory", category: "Methodology (AI Toolkit)" },
  { id: "skills", name: "Skills", category: "Methodology (AI Toolkit)" },
  { id: "multi-agent", name: "Multi-Agent", category: "Methodology (AI Toolkit)" },
  { id: "prompt-eng", name: "Prompt Eng.", category: "Methodology (AI Toolkit)" },
  { id: "rag", name: "RAG", category: "Methodology (AI Toolkit)" }
];

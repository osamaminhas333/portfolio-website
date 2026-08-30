import { Project } from './types';

export const projects: Project[] = [
  {
    id: "autonomous-crypto-trading-agent",
    title: "Autonomous Crypto Trading Agent",
    description: "24/7 unattended trading system built through Claude Code — data ingestion, strategy logic, risk controls and persistent session state.",
    stackIds: ["claude-code", "claude"]
  },
  {
    id: "contentos-autonomous-content-pipeline",
    title: "ContentOS — Autonomous Content Pipeline",
    description: "n8n workflow factory automating research, scripting, asset generation and multi-platform publishing as a multi-agent system.",
    stackIds: ["n8n", "multi-agent"]
  },
  {
    id: "zero-cost-ai-video-generation-stack",
    title: "Zero-Cost AI Video Generation Stack (Open-Weight Model)",
    description: "Open-weight Wan 2.2 video model deployed on ComfyUI over serverless GPU (Modal, A100) with authenticated endpoints and budget controls, wired into n8n — replacing paid video APIs at near-zero marginal cost.",
    stackIds: ["n8n", "localhost-self-hosting", "webhooks-rest-apis"]
  },
  {
    id: "self-hosted-local-agent-environment",
    title: "Self-Hosted Local Agent Environment",
    description: "OpenHands and agent runtimes under Docker with persistent volumes, isolated networking and configurable LLM backends.",
    stackIds: ["openhands", "docker", "localhost-self-hosting"]
  }
];

# 🪷 Project LotusLift Modernization Enablement

**Health Canada Hackathon — Legacy Applications to Modern Delivery**

Project LotusLift is a collaborative initiative between Microsoft and Health Canada DTB developers to modernize four Lotus Notes applications using GitHub Copilot and AI-assisted delivery.

## 🎯 Objectives

1. Deliver proof-of-concept modern replacements for four Lotus Notes applications.
2. Demonstrate safe, practical use of AI-assisted engineering in a real HC scenario.
3. Build internal DTB capability through hands-on execution with reusable patterns.
4. Produce an operating model that can scale to future modernization efforts.

## 👥 Documentation by Audience

This repository intentionally separates documentation by audience:

| Audience | Location | Purpose |
| --- | --- | --- |
| **Executive / Leadership** | `docs/` | Published GitHub Pages site focused on business outcomes, operating model, phases, and security posture. |
| **Developers / Delivery Teams** | `developer-docs/` | Practical engineering playbooks, implementation guardrails, and Copilot workflows. |

## 🌐 Executive Site (GitHub Pages Content)

The executive site lives in `docs/` and currently includes:

- `docs/index.html` / `docs/index-fr.html` — Executive landing page
- `docs/methodology.html` / `docs/methodology-fr.html` — Operating methodology
- `docs/phases.html` / `docs/phases-fr.html` — Four execution phases and quality gates
- `docs/security.html` / `docs/security-fr.html` — Unified security policy

## 👩‍💻 Developer Guidance

Start with:

- [`developer-docs/methodology.md`](developer-docs/methodology.md) — Developer implementation playbook aligned to the four-phase model
- [`developer-docs/data-safeguards.md`](developer-docs/data-safeguards.md) — Data, security, and commit-time guardrails
- [`developer-docs/copilot-tips.md`](developer-docs/copilot-tips.md) — Prompting patterns and Copilot usage guide for this repo

## 🧠 Four-Phase Delivery Model (Shared Across All Docs)

| Phase | Purpose | AI Role | Human Gate |
| --- | --- | --- | --- |
| **1. Discover & Document** | Capture legacy workflows, schemas, and constraints | Structure and summarize source context | Team validates baseline accuracy |
| **2. Define Requirements** | Translate discovery into implementation-ready requirements | Draft requirements and user stories | Team approves scope and priorities |
| **3. Plan Conversion** | Define target architecture and build sequence | Propose architecture and migration steps | Team approves design and rollout plan |
| **4. Execute & Deliver** | Build working modern increments | Generate/refine code, tests, and docs | Team owns review, quality, and readiness |

## ⚠️ Security & Data Safeguards

> **No private, protected, or production data may be committed to this repository.**

- Allowed: anonymized screenshots, schema metadata, and dummy/synthetic data.
- Not allowed: production exports, credentials, internal endpoints/IPs, or unredacted screens with personal data.
- AI output is assistive only; human review is mandatory before commit/merge.

See [`developer-docs/data-safeguards.md`](developer-docs/data-safeguards.md) for full policy details.

## 📁 Repository Structure

```text
├── App1/                    # First Lotus Notes application
│   ├── LotusApp/            # Legacy app capture (screenshots/schema/docs)
│   └── NewApp/              # Modern replacement implementation
├── App2/                    # Second application (same structure)
├── App3/                    # Third application (same structure)
├── App4/                    # Fourth application (same structure)
├── docs/                    # Executive project site (GitHub Pages, EN/FR)
│   ├── index*.html
│   ├── methodology*.html
│   ├── phases*.html
│   └── security*.html
└── developer-docs/          # Developer-facing markdown playbooks
    ├── methodology.md
    ├── data-safeguards.md
    └── copilot-tips.md
```

## 🚀 Getting Started

1. Choose an app folder (`App1/` to `App4/`).
2. Capture anonymized source artifacts in `LotusApp/`.
3. Use the developer playbooks in `developer-docs/` to run Phases 1–4.
4. Build and document the modern implementation in `NewApp/`.

## 📅 Hackathon Logistics

- **Location:** On-Site - 100 Queen St., Suite 500, Ottawa (remote participation available upon request)
- **Team:** 3–6 Health Canada developers + Microsoft support
- **Day length:** 9:00 AM – 4:00 PM (plus optional follow-up)
- **Lunch:** Provided
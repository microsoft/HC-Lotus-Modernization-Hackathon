# 🪷 White Lotus: The Great Modernization

**Health Canada Hackathon — Lotus Notes to Modern Tech**

A collaborative hackathon between Microsoft and Health Canada's DTB developers to modernize four Lotus Notes applications into modern technologies using GitHub Copilot and AI-assisted development.

---

## ⚠️ SECURITY & DATA SAFEGUARDS

> **NO private, protected, or production data will be used in this repository.**

- ❌ No production data — only dummy/randomized datasets
- ❌ No system data will be altered or extracted from HC environments
- ❌ Existing Lotus Notes systems will NOT be modified or accessed directly
- ❌ AI tools will NOT access internal Health Canada applications
- ✅ Only anonymized screenshots, data schemas, and dummy data are permitted
- ✅ Modernization is based on visual inputs and AI-assisted generation

See [DATA-SAFEGUARDS.md](DATA-SAFEGUARDS.md) for full details.

---

## 🎯 Objectives

1. Partner with HC team(s) to deliver a PoC converting four Lotus Notes applications to modern technologies
2. Showcase the capabilities of GitHub Copilot through a real-world Health Canada scenario
3. Demonstrate and enable developers on the opportunities of AI-assisted coding
4. Equip DTB developers with knowledge they can share across their teams

## 🧠 Methodology

We use AI (GitHub Copilot) at every stage:

| Phase | What We Do | AI Role |
|-------|-----------|---------|
| **1. Document** | Capture the existing Lotus Notes app (screenshots, schemas, workflows) | AI summarizes and structures documentation |
| **2. Requirements** | Define what the modern app needs to do | AI generates requirements from documentation |
| **3. Plan** | Create a conversion/migration plan | AI proposes architecture and migration steps |
| **4. Execute** | Build the modern application | AI generates code, tests, and infrastructure |

See [docs/methodology.md](docs/methodology.md) for the full workflow.

## 📁 Repository Structure

```
├── App1/                    # First Lotus Notes application
│   ├── LotusApp/            # Documentation of the existing app
│   │   ├── screenshots/     # Anonymized screenshots
│   │   ├── data-schema/     # Table/field definitions
│   │   └── documentation/   # AI-generated docs, workflows, business rules
│   └── NewApp/              # The modern replacement
│       ├── src/             # Application source code
│       ├── dummy-data/      # Randomized test data
│       └── docs/            # Requirements, architecture, plans
├── App2/                    # Second application (same structure)
├── App3/                    # Third application (same structure)
├── App4/                    # Fourth application (same structure)
└── docs/                    # Cross-cutting guides and references
    ├── methodology.md       # Our AI-assisted modernization workflow
    └── copilot-tips.md      # GitHub Copilot tips for the team
```

## 🛠️ Target Technologies

- **Languages:** .NET or Python (per app team preference)
- **Data:** Modern data store with randomized/dummy datasets
- **Infra:** Containerization-ready, CI/CD principles
- **AI Tooling:** GitHub Copilot (Chat, Inline, Agent Mode)

## 📅 Hackathon Day

- **Location:** Onsite in Ottawa (remote participation available)
- **Team:** 3–6 Health Canada developers + Microsoft team
- **Time:** 9:00 AM – 4:00 PM (date TBD)
- **Support:** Microsoft team available throughout for guidance

## 🚀 Getting Started

1. Pick your app folder (`App1/` through `App4/`)
2. Add anonymized screenshots to `LotusApp/screenshots/`
3. Document the data schema in `LotusApp/data-schema/`
4. Use Copilot to generate documentation, requirements, and code in `NewApp/`

## ✅ What CAN Go In This Repo

| Allowed | Examples |
|---------|----------|
| Anonymized screenshots | UI mockups with no real user data visible |
| Data schemas | Field names, types, relationships (no real values) |
| Dummy/randomized data | Fake names, generated IDs, lorem ipsum |
| Code | All application code, configs, tests |
| Documentation | Workflows, business rules, architecture decisions |

## ❌ What CANNOT Go In This Repo

| Prohibited | Why |
|------------|-----|
| Production data | Privacy and security |
| Real user information | PII protection |
| System credentials | Security |
| Internal HC network details | Security |
| Unredacted screenshots showing real data | Privacy |
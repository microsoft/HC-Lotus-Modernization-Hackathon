# Methodology: AI-Assisted Lotus Notes Modernization

## Overview

This document describes our four-phase approach to modernizing Lotus Notes applications using GitHub Copilot and AI-assisted development. Each phase builds on the previous one, with AI accelerating every step.

---

## Phase 1: Document the Existing Application

**Goal:** Capture everything about the current Lotus Notes app so AI can understand it.

### Inputs (from HC developers)
- Anonymized screenshots of all major screens/forms
- Data schema exports (field names, types, relationships)
- Verbal/written descriptions of business rules and workflows
- User role descriptions

### Process
1. Add screenshots to `LotusApp/screenshots/`
2. Document the data schema in `LotusApp/data-schema/`
3. Open GitHub Copilot Chat and provide screenshots + context
4. Ask Copilot to generate comprehensive documentation:
   - "Based on these screenshots, document this application's UI, forms, and navigation"
   - "Given this data schema, describe the data model and relationships"
   - "Document the likely business rules and workflows"
5. Review, refine, and save to `LotusApp/documentation/`

### Outputs
- Complete application documentation in `LotusApp/documentation/`
- Data model documentation in `LotusApp/data-schema/`
- Annotated screenshots showing key UI elements

---

## Phase 2: Generate Requirements

**Goal:** Translate the existing app documentation into clear requirements for the modern version.

### Process
1. Feed the Phase 1 documentation into Copilot Chat
2. Prompt: "Based on this documentation of an existing Lotus Notes application, generate a requirements document for a modern web application replacement. Include functional requirements, data requirements, and user stories."
3. Iterate with the HC developer team to validate and refine
4. Identify what's in-scope for the hackathon PoC vs. future work

### Outputs
- `NewApp/docs/requirements.md` — Functional and non-functional requirements
- Prioritized backlog (what to build in the hackathon vs. later)

---

## Phase 3: Create a Conversion Plan

**Goal:** Define the technical architecture and step-by-step build plan.

### Process
1. Feed requirements + data schema into Copilot
2. Prompt: "Given these requirements and this data schema, propose a modern application architecture using [.NET/Python]. Include database schema, API design, and UI components."
3. Have Copilot generate a step-by-step conversion plan
4. Review architecture decisions with the team
5. Generate dummy/randomized data matching the schema

### Outputs
- `NewApp/docs/architecture.md` — Technical architecture
- `NewApp/docs/conversion-plan.md` — Ordered build steps
- `NewApp/dummy-data/` — Generated test data

---

## Phase 4: Execute the Build

**Goal:** Build the modern application with AI-assisted coding.

### Process
1. Follow the conversion plan step by step
2. Use Copilot Agent Mode (Ctrl+I / Cmd+I) to generate code:
   - Database models/migrations
   - API endpoints
   - Business logic
   - UI components
   - Tests
3. Use Copilot Chat for debugging and refinement
4. Iterate rapidly — AI generates, human validates

### Outputs
- Working PoC application in `NewApp/src/`
- Documentation of decisions made in `NewApp/docs/decisions.md`

---

## Prompting Tips for Each Phase

### Phase 1 — Documentation Prompts
```
"Look at this screenshot of a Lotus Notes form. Describe all the fields, their likely data types, 
and the business purpose of this form."

"Given this list of database fields: [paste schema], describe the data model, 
relationships between entities, and likely validation rules."
```

### Phase 2 — Requirements Prompts
```
"Based on this application documentation, generate user stories in the format: 
As a [role], I want to [action], so that [benefit]."

"What are the key functional requirements to replicate this Lotus Notes application 
as a modern web app?"
```

### Phase 3 — Architecture Prompts
```
"Propose a .NET Web API + React architecture for this application. 
Include the database schema, API endpoints, and component breakdown."

"Generate a SQL schema based on this Lotus Notes field definition: [paste schema]"

"Create a seed data script with 50 randomized records matching this schema."
```

### Phase 4 — Coding Prompts
```
"Generate an Entity Framework model for this database schema."

"Create a REST API controller for CRUD operations on [entity]."

"Build a React component that displays this data in a table with filtering and sorting."

"Write unit tests for this business logic."
```

---

## Time Allocation (7-hour hackathon day)

| Time | Phase | Activity |
|------|-------|----------|
| 9:00–9:30 | Setup | Intros, repo walkthrough, environment check |
| 9:30–10:30 | Phase 1 | Document existing apps (screenshots → AI docs) |
| 10:30–11:00 | Phase 2 | Generate requirements from documentation |
| 11:00–11:30 | Phase 3 | Architecture & conversion plan |
| 11:30–12:00 | Lunch break | |
| 12:00–3:00 | Phase 4 | Build! AI-assisted coding sprint |
| 3:00–3:30 | Demo | Show what was built |
| 3:30–4:00 | Wrap-up | Next steps, learnings, knowledge transfer |

# Developer Methodology Playbook

This is the delivery-team companion to the executive pages in `docs/`.  
Principle: **AI accelerates, humans decide**.

## Who this is for

- Developers implementing app modernization in `App1/` to `App4/`
- Technical leads running quality gates and architecture decisions
- Coaches supporting Copilot adoption during execution

## Delivery model (same four phases as executive docs)

| Phase | Purpose | Primary outputs | Human checkpoint |
|---|---|---|---|
| **1. Discover & Document** | Capture legacy context clearly | `LotusApp/documentation/*` + schema notes | Team confirms baseline is accurate |
| **2. Define Requirements** | Turn discovery into build scope | `NewApp/docs/requirements.md` + user stories | Team approves scope/priorities |
| **3. Plan Conversion** | Choose architecture and sequence | `NewApp/docs/architecture.md`, `conversion-plan.md` | Team approves implementation plan |
| **4. Execute & Deliver** | Build modern increments safely | Code + tests + decision log | Team approves quality before merge |

---

## Phase 1: Discover & Document

**Goal:** Remove ambiguity before coding starts.

### Inputs
- Anonymized screenshots (`LotusApp/screenshots/`)
- Field/type definitions (`LotusApp/data-schema/`)
- Business workflow notes and role context

### Copilot usage
- Use image + text prompts to extract UI elements and inferred rules
- Ask Copilot to produce structured docs (screens, workflows, validations, edge cases)
- Ask Copilot to highlight unknowns and assumptions explicitly

### Team responsibilities
- Correct incorrect assumptions
- Add domain context AI cannot infer
- Approve a shared baseline package before moving to Phase 2

### Definition of done
- Main forms/workflows are documented
- Data entities and relationships are captured
- Known gaps are listed as open questions

---

## Phase 2: Define Requirements

**Goal:** Convert context into implementation-ready scope.

### Copilot usage
- Generate first drafts of:
  - Functional requirements
  - User stories with acceptance criteria
  - Non-functional requirements (security, accessibility, performance)

### Team responsibilities
- Prioritize backlog for hackathon scope
- Mark out-of-scope items for follow-up
- Validate that requirements map to real operations

### Definition of done
- Approved requirements document in `NewApp/docs/requirements.md`
- Prioritized scope list and acceptance criteria
- Explicit in-scope vs. future-scope boundaries

---

## Phase 3: Plan Conversion

**Goal:** Commit to a practical architecture and sequencing plan.

### Copilot usage
- Propose architecture options with tradeoffs
- Draft API boundaries, data model, and UI component breakdown
- Generate an ordered implementation plan

### Team responsibilities
- Select architecture and reject unsafe/unfit options
- Align plan to timeline and team capacity
- Validate test-data strategy (dummy/synthetic only)

### Definition of done
- `NewApp/docs/architecture.md` and `NewApp/docs/conversion-plan.md` approved
- Dependency/order of build tasks is explicit
- Risk and mitigation notes are documented

---

## Phase 4: Execute & Deliver

**Goal:** Build working increments with safe AI-assisted velocity.

### Copilot usage
- Generate code and tests incrementally (small reviewable chunks)
- Refactor, explain, and tighten code based on reviewer feedback
- Help draft docs for design decisions and tradeoffs

### Team responsibilities
- Enforce code review and security checks
- Verify tests and maintainability
- Decide merge readiness

### Definition of done
- Working increment in `NewApp/src/`
- Test coverage for critical business paths
- Decisions captured in `NewApp/docs/decisions.md`

---

## Quality gates by phase

1. **Gate 1 (after Phase 1):** "This represents the current system correctly."
2. **Gate 2 (after Phase 2):** "This is the scope we agree to build."
3. **Gate 3 (after Phase 3):** "This architecture and sequence are approved."
4. **Gate 4 (during Phase 4):** "This increment is secure, tested, and maintainable."

No gate pass = no phase progression.

---

## Practical prompt templates

### Discovery
```text
Based on these screenshots and schema notes, produce:
1) screen-by-screen workflow,
2) field-level data model mapping,
3) inferred business rules,
4) open questions requiring human confirmation.
```

### Requirements
```text
Generate prioritized user stories with acceptance criteria from this baseline.
Separate must-have, should-have, and future items.
```

### Planning
```text
Propose two architecture options for this scope.
For each: data model, API shape, frontend structure, risks, and why/when to choose it.
```

### Execution
```text
Implement [feature] in small commits:
1) model changes,
2) API endpoint,
3) UI binding,
4) tests.
Explain assumptions and list follow-up tasks.
```

---

## Suggested hackathon pacing (reference)

| Time | Focus |
|---|---|
| 9:00–9:15 | Setup and scope alignment |
| 9:15–10:00 | Phase 1 discovery package |
| 10:00–11:00 | Phase 2 requirement refinement |
| 11:00–12:00 | Phase 3 architecture and plan |
| 1:00–3:30 | Phase 4 build/test/review |
| 3:30–4:30 | Demo + handoff + follow-up actions |

Use this as a guide; adapt by app complexity.

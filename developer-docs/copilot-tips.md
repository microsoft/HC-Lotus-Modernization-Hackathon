# GitHub Copilot Guide for Project LotusLift

Use this guide with `developer-docs/methodology.md` and `developer-docs/data-safeguards.md`.

Core rule: **AI drafts, humans decide**.

---

## Which Copilot mode to use

| Mode | Best use in this project |
|---|---|
| **Inline Suggestions** | Fast boilerplate, repetitive mappings, test setup scaffolding |
| **Copilot Chat** | Requirement clarification, architecture options, debugging strategy |
| **Agent / Workspace Context** | Multi-file implementation tasks and refactors spanning `NewApp/` |
| **Inline Chat** | Focused edits to selected functions/components |

---

## High-value prompting pattern

Use a 5-part structure for better output quality:

1. **Context**: app + phase + relevant files  
2. **Task**: exact deliverable  
3. **Constraints**: stack, style, security rules  
4. **Output shape**: file(s), format, test expectations  
5. **Acceptance checks**: what must be true when done

Template:

```text
Context: App2 modernization, Phase 3. Use LotusApp/documentation and NewApp/docs/requirements.md.
Task: Propose API endpoint set for the top 3 user workflows.
Constraints: Keep naming consistent with existing models; no production data assumptions.
Output: Markdown table with endpoint, verb, request schema, response schema, error cases.
Acceptance: Covers all must-have stories and includes validation rules.
```

---

## Project-specific prompt library

### Phase 1: Discovery and documentation
```text
From these anonymized screenshots and schema notes, produce:
1) screens and navigation map,
2) field catalog with inferred types,
3) business rules inferred from UI behavior,
4) open questions requiring human confirmation.
```

### Phase 2: Requirements
```text
Using LotusApp/documentation, generate prioritized user stories with acceptance criteria.
Split into must-have, should-have, and future scope.
Flag assumptions where requirements are ambiguous.
```

### Phase 3: Architecture and planning
```text
Propose two implementation approaches for NewApp:
- architecture components
- API boundaries
- data model approach
- tradeoffs and risk controls
Recommend one approach for hackathon timeline and explain why.
```

### Phase 4: Implementation
```text
Implement [feature] in reviewable steps:
1) model changes,
2) endpoint/controller,
3) UI component integration,
4) tests.
After each step, list assumptions and potential follow-ups.
```

### Review and hardening
```text
Review this pull request diff for:
1) correctness issues,
2) security risks,
3) missing test coverage,
4) maintainability concerns.
Return findings ordered by severity with concrete fixes.
```

---

## Prompting anti-patterns to avoid

- "Build the whole app" (too broad)
- Missing file context (Copilot cannot infer full architecture)
- No output format requirement (results become hard to reuse)
- No constraints (naming/security drift)
- Blind acceptance of generated code

---

## Practical iteration loop

1. Start with a narrow task (one endpoint, one screen, one workflow).
2. Ask Copilot for first pass.
3. Review output, then refine with explicit corrections.
4. Ask Copilot to add tests and edge cases.
5. Capture reusable prompt patterns in project docs.

This keeps output high quality and merge-ready.

---

## Security-aware prompting reminders

- Never paste sensitive values into prompts.
- Use synthetic examples (`Example User`, fake IDs, fake emails).
- Ask Copilot to use placeholders for secrets and environment settings.
- Treat generated code as untrusted until reviewed.

---

## Fast troubleshooting prompts

```text
Explain why this test fails using only the error output and this function.
Propose the minimal fix and show updated test assertions.
```

```text
Refactor this method for readability without changing behavior.
Keep signatures unchanged and preserve current validation logic.
```

```text
Generate edge-case tests for null/empty/invalid inputs for this service method.
Use the existing test framework and naming conventions in this folder.
```

---

## Keyboard shortcuts

| Action | Windows | Mac |
|---|---|---|
| Open Copilot Chat | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Inline Chat | `Ctrl+I` | `Cmd+I` |
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |

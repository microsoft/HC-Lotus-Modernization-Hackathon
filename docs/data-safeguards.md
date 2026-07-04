# Security & Data Safeguards

## ⚠️ CRITICAL: No Private or Protected Information

This repository is used for a collaborative hackathon between Microsoft and Health Canada. **Absolutely no private, protected, or production data may be committed to this repository.**

---

## Principles

### What This Project Will NOT Do

1. **No production data will be used** — All data in this repo is dummy/randomized
2. **No system data will be altered or extracted** from Health Canada environments
3. **Existing Lotus Notes systems will NOT be modified** or accessed directly
4. **AI tools will NOT access internal Health Canada applications**
5. **No PII (Personally Identifiable Information)** will be stored in any form
6. **No credentials, tokens, or secrets** will be committed

### What This Project WILL Do

1. Use **anonymized screenshots** of Lotus Notes applications (with all real data redacted)
2. Use **data schemas** (field names/types only — no real values)
3. Generate **randomized/dummy datasets** for development and testing
4. Build modern application code based on **visual inputs and AI-assisted generation**
5. Store all documentation, code, and architecture decisions

---

## Before You Commit — Checklist

Ask yourself before every commit:

- [ ] Does this file contain any real user data? → **DO NOT COMMIT**
- [ ] Does this screenshot show real names, emails, or case numbers? → **REDACT FIRST**
- [ ] Does this contain any Health Canada system credentials? → **DO NOT COMMIT**
- [ ] Does this reference internal network addresses or endpoints? → **REMOVE**
- [ ] Is this data schema populated with real values? → **REPLACE WITH DUMMY DATA**

---

## Acceptable Content

| Type | Rules |
|------|-------|
| Screenshots | Must be anonymized — redact/blur any real data visible |
| Data schemas | Field names and types only — no real record values |
| Sample data | Must be obviously fake (e.g., "Jane Doe", "test@example.com") |
| Code | Application code, configs (no secrets), tests |
| Documentation | Business rules, workflows, architecture (no internal URLs/IPs) |

## Prohibited Content

| Type | Action |
|------|--------|
| Production database exports | Never commit — delete immediately if found |
| Real user names/emails | Redact before committing |
| HC internal URLs or IPs | Remove before committing |
| API keys, passwords, tokens | Use environment variables; add to .gitignore |
| Unredacted screenshots | Blur/redact all PII before committing |

---

## If You Accidentally Commit Sensitive Data

1. **Do NOT just delete the file** — it remains in git history
2. Notify the team immediately
3. Use `git filter-branch` or BFG Repo-Cleaner to purge from history
4. Rotate any exposed credentials immediately

---

## Contact

If you have questions about what's safe to commit, ask before committing. When in doubt, leave it out.

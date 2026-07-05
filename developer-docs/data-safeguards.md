# Security & Data Safeguards (Developer Policy)

This file is the developer-level implementation policy that aligns with `docs/security.html`.

## Non-negotiable baseline

**No private, protected, or production data may be committed to this repository.**

This includes direct values, screenshots, logs, exports, copied snippets, and any derived artifact that can identify real people, systems, or internal infrastructure.

---

## What is allowed vs prohibited

| Category | Allowed | Prohibited |
|---|---|---|
| Screenshots | Anonymized, redacted captures | Unredacted UI with names, emails, IDs, case data |
| Data | Synthetic/dummy records | Production or user-originated records |
| Schemas | Field names/types/relations | Real data values embedded in examples |
| Infrastructure | Generic architecture patterns | Internal hostnames, IP ranges, private endpoints |
| Secrets | Placeholders and mock values | API keys, passwords, tokens, live certs |

---

## Secure workflow by phase

### Phase 1 (Discovery)
- Redact screenshots before adding to `LotusApp/screenshots/`
- Keep only structural schema details in `LotusApp/data-schema/`
- Do not paste sensitive details into Copilot prompts

### Phase 2 (Requirements)
- Write requirements in business-functional language
- Exclude references to internal production systems and addresses
- Keep real case/user examples out of user stories

### Phase 3 (Planning)
- Use generic environment naming (e.g., `dev`, `test`, `prod`)
- Do not include tenant identifiers, secret names, or private URLs in architecture docs
- Document security assumptions explicitly

### Phase 4 (Execution)
- Keep secrets in environment variables or secure secret stores only
- Never hardcode credentials in code, tests, config, or markdown
- Prefer fake fixtures and synthetic test datasets

---

## Redaction standard

Before committing an image or copied snippet, verify:

- Names, emails, usernames, IDs, and case numbers are removed
- Dates/timestamps that can identify records are generalized if sensitive
- Internal URL bars, hostnames, and environment labels are hidden
- Any browser tab/title that reveals internal systems is masked

If unsure, do not commit until reviewed by a teammate.

---

## Commit-time checklist (required)

- [ ] No real user or production data in staged files
- [ ] No credentials or tokens in staged files
- [ ] No internal endpoints/IPs/hostnames in staged files
- [ ] Screenshots are redacted
- [ ] Dummy/test data is clearly synthetic
- [ ] AI-generated code was reviewed by a human before commit

---

## If sensitive content is discovered

1. Stop sharing and stop further commits that propagate exposure.
2. Notify project owners/security contacts immediately.
3. Rotate any potentially exposed credentials immediately.
4. Remove exposure from history using approved org process/tooling.
5. Document what happened and the corrective action taken.

Do not treat file deletion alone as remediation; history must be addressed.

---

## Developer operating principle

Use AI to accelerate implementation, not to relax controls.  
When in doubt: **leave it out and ask before committing**.

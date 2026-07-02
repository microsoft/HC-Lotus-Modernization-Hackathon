# GitHub Copilot Tips & Tricks

Quick reference for the hackathon team on getting the most out of GitHub Copilot.

---

## Copilot Modes

| Mode | How to Access | Best For |
|------|---------------|----------|
| **Inline Suggestions** | Just start typing | Autocomplete, boilerplate, patterns |
| **Copilot Chat** | Ctrl+Shift+I (sidebar) | Questions, explanations, planning |
| **Agent Mode** | `@workspace` in Chat | Multi-file generation, refactoring |
| **Inline Chat** | Ctrl+I on selected code | Edit specific code blocks |

---

## Key Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Open Copilot Chat | Ctrl+Shift+I | Cmd+Shift+I |
| Inline Chat (edit code) | Ctrl+I | Cmd+I |
| Accept suggestion | Tab | Tab |
| Reject suggestion | Esc | Esc |
| Next suggestion | Alt+] | Option+] |
| Previous suggestion | Alt+[ | Option+[ |

---

## Working with Screenshots & Images

Copilot Chat supports image inputs. Drag and drop screenshots directly into the chat:

1. Take an anonymized screenshot of the Lotus Notes form
2. Drag it into Copilot Chat
3. Ask: "Describe this application form — list all fields, their types, and the purpose of this screen"
4. Copilot will analyze the image and generate documentation

---

## Effective Prompting Patterns

### Be Specific About Output Format
```
❌ "Create a database"
✅ "Create a PostgreSQL schema with tables for [entities], including primary keys, 
   foreign keys, and appropriate indexes. Output as a .sql migration file."
```

### Provide Context
```
❌ "Build an API"
✅ "Based on the data model in @data-schema.md, generate a .NET 8 Web API with 
   controllers for CRUD operations on each entity. Use Entity Framework Core."
```

### Use @workspace for Multi-File Context
```
"@workspace Looking at the existing app documentation in LotusApp/, 
generate the equivalent modern API in NewApp/src/"
```

### Iterate and Refine
```
"This is close but the validation rules should also check [X]. Update the model."
"Add error handling for the case where [Y] is null."
"Refactor this to use the repository pattern."
```

---

## Copilot for Documentation (Phase 1)

```
"Analyze this screenshot and document:
1. What type of form/view is this?
2. What fields are visible and their likely data types?
3. What actions/buttons are available?
4. What business rules can you infer?"
```

## Copilot for Requirements (Phase 2)

```
"Given this documentation of an existing application, generate:
1. A list of functional requirements
2. User stories in format: As a [role], I want [action], so that [benefit]
3. Data requirements (what needs to be stored/retrieved)
4. Non-functional requirements (performance, security, accessibility)"
```

## Copilot for Architecture (Phase 3)

```
"Design a modern replacement for this application using .NET 8:
1. Propose the project structure
2. Define the database schema (Entity Framework models)
3. List the API endpoints needed
4. Suggest the frontend component breakdown
5. Identify any integration points"
```

## Copilot for Code Generation (Phase 4)

```
"Generate the Entity Framework DbContext and entity models based on this schema."
"Create the API controller for [Entity] with full CRUD + validation."
"Build a React component that renders this form with the same fields as the Lotus Notes version."
"Generate seed data with 25 realistic but fake records."
"Write xUnit tests for the [Service] class covering happy path and edge cases."
```

---

## Common Gotchas

1. **Copilot doesn't have context unless you give it** — Reference files with `@filename` or use `@workspace`
2. **Long outputs may get truncated** — Ask for one piece at a time if output is cut off
3. **Validate generated code** — AI is fast but not infallible; review before committing
4. **Use iterative prompts** — Start broad, then refine with follow-up prompts
5. **Copilot respects your open files** — Keep relevant files open for better suggestions

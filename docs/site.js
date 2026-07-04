const appTracks = [
  {
    name: "Phase 1: Discover",
    status: "AI synth + human verify",
    focus: "Capture legacy workflows, constraints, and data boundaries to establish modernization context.",
    summary: "Creates a reliable foundation that improves quality and reduces downstream rework.",
    outputs: ["Context package", "Workflow inventory", "Validated baseline"],
    links: [
      { label: "Method Phase", href: "method.html#phase-discovery" },
      { label: "Detailed Method", href: "methodology.html" },
    ],
  },
  {
    name: "Phase 2: Define",
    status: "AI draft + human prioritize",
    focus: "Translate business intent into target architecture, implementation slices, and quality criteria.",
    summary: "Standardizes how teams move from documentation into executable modernization plans.",
    outputs: ["Prioritized requirements", "User stories", "Acceptance criteria"],
    links: [
      { label: "Method Phase", href: "method.html#phase-requirements" },
      { label: "Prompt Guidance", href: "copilot-tips.html" },
    ],
  },
  {
    name: "Phase 3: Plan",
    status: "AI propose + human decide",
    focus: "Define architecture, migration sequencing, and implementation boundaries before coding begins.",
    summary: "Creates an executable modernization plan that balances speed, risk, and maintainability.",
    outputs: ["Target architecture", "Conversion sequence", "Risk controls"],
    links: [
      { label: "Method Phase", href: "method.html#phase-plan" },
      { label: "Full Methodology", href: "methodology.html" },
    ],
  },
  {
    name: "Phase 4: Execute",
    status: "AI build + human assure",
    focus: "Implement modernization increments using AI-assisted coding with mandatory human review checkpoints.",
    summary: "Accelerates delivery while preserving governance, maintainability, and engineering standards.",
    outputs: ["Refactored modules", "Validation tests", "Reusable AI prompt patterns"],
    links: [
      { label: "Method Phase", href: "method.html#phase-execute" },
      { label: "Execution Guide", href: "methodology.html" },
    ],
  },
];

function renderAppGrid() {
  const root = document.getElementById("appGrid");
  if (!root) {
    return;
  }

  const html = appTracks
    .map((app, idx) => {
      const links = app.links
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join("");
      const outputs = app.outputs.map((item) => `<li>${item}</li>`).join("");
      const delayClass = `delay-${Math.min(3, (idx % 3) + 1)}`;

      return `
        <article class="app-card reveal ${delayClass}">
          <div class="app-card-head">
            <h2>${app.name}</h2>
            <span class="status-chip">${app.status}</span>
          </div>
          <p class="app-focus">${app.focus}</p>
          <p>${app.summary}</p>
          <h3>Current Outputs</h3>
          <ul class="clean-list app-output-list">${outputs}</ul>
          <div class="app-links">${links}</div>
        </article>
      `;
    })
    .join("");

  root.innerHTML = html;
}

renderAppGrid();
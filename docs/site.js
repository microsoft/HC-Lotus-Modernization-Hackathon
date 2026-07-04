const appTracks = [
  {
    name: "Workstream: Discovery",
    status: "Context + Baseline",
    focus: "Capture legacy workflows, constraints, and data boundaries to establish modernization context.",
    summary: "Creates a reliable foundation that improves quality and reduces downstream rework.",
    outputs: ["Anonymized system views", "Baseline workflows", "Current-state constraints"],
    links: [
      { label: "Method Overview", href: "method.html" },
      { label: "Security Center", href: "security.html" },
    ],
  },
  {
    name: "Workstream: Design",
    status: "Requirements + Architecture",
    focus: "Translate business intent into target architecture, implementation slices, and quality criteria.",
    summary: "Standardizes how teams move from documentation into executable modernization plans.",
    outputs: ["Prioritized requirements", "Reference architecture", "Delivery roadmap"],
    links: [
      { label: "Method Detail", href: "methodology.html" },
      { label: "Copilot Guidance", href: "copilot-tips.html" },
    ],
  },
  {
    name: "Workstream: Build",
    status: "AI-Assisted Delivery",
    focus: "Implement modernization increments using AI-assisted coding with mandatory human review checkpoints.",
    summary: "Accelerates delivery while preserving governance, maintainability, and engineering standards.",
    outputs: ["Refactored modules", "Validation tests", "Reusable AI prompt patterns"],
    links: [
      { label: "Security Controls", href: "safeguards.html" },
      { label: "Data Policy", href: "data-safeguards.html" },
    ],
  },
  {
    name: "Workstream: Enable",
    status: "Scale + Capability",
    focus: "Enable DTB teams with repeatable methods, playbooks, and coaching for self-sufficient modernization.",
    summary: "Turns PoC outcomes into enterprise patterns that scale across future projects and technology stacks.",
    outputs: ["Reusable delivery playbooks", "Team onboarding packs", "Tech debt reduction patterns"],
    links: [
      { label: "Executive Overview", href: "index.html#for-executives" },
      { label: "Program Method", href: "method.html" },
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
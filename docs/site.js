const appTracks = [
  {
    name: "App 1",
    status: "Discovery + Capture",
    focus: "Document legacy workflows and data boundaries with anonymized artifacts.",
    summary: "Establishes the baseline pattern for evidence capture and requirements quality.",
    outputs: ["Lotus screenshots", "Schema inventory", "Initial requirements"],
    links: [
      { label: "Lotus Docs", href: "../App1/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App1/NewApp/docs/" },
      { label: "NewApp Source", href: "../App1/NewApp/src/" },
    ],
  },
  {
    name: "App 2",
    status: "Requirements + Design",
    focus: "Translate documented workflows into clear user stories and architecture choices.",
    summary: "Validates that one repeatable method can support a second modernization lane.",
    outputs: ["User stories", "Target architecture", "Delivery backlog"],
    links: [
      { label: "Lotus Docs", href: "../App2/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App2/NewApp/docs/" },
      { label: "NewApp Source", href: "../App2/NewApp/src/" },
    ],
  },
  {
    name: "App 3",
    status: "Build + Iterate",
    focus: "Use Copilot-assisted implementation with human review gates and test-first habits.",
    summary: "Proves acceleration without sacrificing quality or governance controls.",
    outputs: ["Working modules", "Test cases", "Refined prompts"],
    links: [
      { label: "Lotus Docs", href: "../App3/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App3/NewApp/docs/" },
      { label: "NewApp Source", href: "../App3/NewApp/src/" },
    ],
  },
  {
    name: "App 4",
    status: "Scale + Reuse",
    focus: "Apply lessons from the first three lanes to prove a scalable modernization playbook.",
    summary: "Confirms repeatability across teams and prepares handoff-ready guidance.",
    outputs: ["Reusable templates", "Handoff notes", "Team enablement assets"],
    links: [
      { label: "Lotus Docs", href: "../App4/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App4/NewApp/docs/" },
      { label: "NewApp Source", href: "../App4/NewApp/src/" },
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
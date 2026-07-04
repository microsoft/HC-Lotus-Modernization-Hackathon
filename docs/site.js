const appTracks = [
  {
    name: "App 1",
    summary: "Modernization lane for the first Lotus Notes application.",
    links: [
      { label: "Lotus Docs", href: "../App1/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App1/NewApp/docs/" },
      { label: "NewApp Source", href: "../App1/NewApp/src/" },
    ],
  },
  {
    name: "App 2",
    summary: "Parallel delivery lane with the same capture-to-build workflow.",
    links: [
      { label: "Lotus Docs", href: "../App2/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App2/NewApp/docs/" },
      { label: "NewApp Source", href: "../App2/NewApp/src/" },
    ],
  },
  {
    name: "App 3",
    summary: "Track focused on reusable architecture and migration patterns.",
    links: [
      { label: "Lotus Docs", href: "../App3/LotusApp/README.md" },
      { label: "NewApp Docs", href: "../App3/NewApp/docs/" },
      { label: "NewApp Source", href: "../App3/NewApp/src/" },
    ],
  },
  {
    name: "App 4",
    summary: "Final lane used to validate repeatability of the modernization method.",
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
      const delayClass = `delay-${Math.min(3, (idx % 3) + 1)}`;

      return `
        <article class="app-card reveal ${delayClass}">
          <h2>${app.name}</h2>
          <p>${app.summary}</p>
          <div class="app-links">${links}</div>
        </article>
      `;
    })
    .join("");

  root.innerHTML = html;
}

renderAppGrid();
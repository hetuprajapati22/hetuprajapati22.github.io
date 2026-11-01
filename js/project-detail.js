/* Builds project.html from the data in projects.js. Example: project.html?id=study-nest */

/* ---- Theme toggle (same saved choice as the homepage) ---- */
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved === "dark" ? "dark" : "light");
themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Find the project from the address (?id=...) ---- */
const id = new URLSearchParams(window.location.search).get("id");
const index = PROJECTS.findIndex(p => p.id === id);
const mount = document.getElementById("projectRoot");

if (index === -1) {
  document.title = "Project not found | Hetu Prajapati";
  mount.innerHTML = `
    <section class="detail">
      <h1>Project not found</h1>
      <p class="lead">This project link is not valid. Pick a project from the list instead.</p>
      <p><a class="btn btn-primary" href="index.html#projects">See all projects</a></p>
    </section>`;
} else {
  const p = PROJECTS[index];
  document.title = p.name + " | Hetu Prajapati";

  const linkText = { "Deployed": "Visit deployed site", "Live website": "Visit live website", "Live demo": "Open live demo" };
  const statusClass = p.status === "In development" ? "status in-development" : "status";
  const list = items => `<ul class="feature-list">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;

  let featuresHtml = "";
  if (p.features.length) featuresHtml += `<h2>Features seen on the live site</h2>${list(p.features)}`;
  if (p.plannedFeatures) featuresHtml += `<h2>Planned features (not built yet)</h2>${list(p.plannedFeatures)}`;

  const techHtml = p.tech.length
    ? `<ul class="tags" aria-label="Technologies">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>`
    : `<p>Technologies are not decided yet.</p>`;

  const liveBtn = p.liveUrl
    ? `<a class="btn btn-primary" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="${linkText[p.status]} for ${p.name} (opens in a new tab)">${linkText[p.status]}</a>`
    : "";
  const repoBtn = p.repoUrl
    ? `<a class="btn btn-secondary" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">View source code</a>`
    : `<a class="btn btn-secondary" href="https://github.com/hetuprajapati22" target="_blank" rel="noopener noreferrer">GitHub profile</a>`;
  const missing = [];
  if (!p.liveUrl) missing.push("There is no live link for this project yet.");
  if (!p.repoUrl) missing.push("A direct source code link has not been added yet.");

  const prev = PROJECTS[index - 1], next = PROJECTS[index + 1];

  mount.innerHTML = `
    <article class="detail">
      <div class="status-row">
        <span class="${statusClass}">${p.status}</span>
        ${p.team ? '<span class="tag">Team project</span>' : ""}
      </div>
      <h1>${p.name}</h1>
      <p class="category">${p.category}</p>
      <p class="lead">${p.summary}</p>
      ${p.highlight ? `<p>${p.highlight}</p>` : ""}
      <h2>My contribution</h2>
      <p>${p.contribution}</p>
      <h2>Technologies</h2>
      ${techHtml}
      ${featuresHtml}
      <div class="note"><p><strong>How this was checked:</strong> ${p.checked}</p></div>
      <div class="link-row">${liveBtn}${repoBtn}</div>
      ${p.liveNote ? `<p class="missing">${p.liveNote}</p>` : ""}
      <p class="missing">${missing.join(" ")}</p>
      <nav class="nav-pair" aria-label="Other projects">
        ${prev ? `<a href="project.html?id=${prev.id}">Previous: ${prev.name}</a>` : "<span></span>"}
        ${next ? `<a href="project.html?id=${next.id}">Next: ${next.name}</a>` : "<span></span>"}
      </nav>
    </article>`;
}

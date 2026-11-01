/* ===== Settings you can edit ===== */
const CONFIG = {
  resumeReady: true,    // change to true after you put your PDF at assets/resume.pdf
  whatsappNumber: "",   // international format, digits only, e.g. "919XXXXXXXXX"
  formEndpoint: "https://formspree.io/f/xbggzynl"      // your form service link (see README), leave empty until set up
};

/* ---- Theme toggle (remembers your choice) ---- */
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

/* ---- Mobile menu ---- */
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  siteNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

/* ---- Resume buttons: disabled until the real PDF exists ---- */
if (!CONFIG.resumeReady) {
  document.querySelectorAll(".resume-link").forEach(btn => {
    btn.removeAttribute("href");
    btn.removeAttribute("download");
    btn.removeAttribute("target");
    btn.setAttribute("aria-disabled", "true");
    btn.addEventListener("click", e => e.preventDefault());
  });
  document.getElementById("resumeHint").hidden = false;
}

/* ---- Project cards ---- */
function projectCard(p) {
  const statusClass = p.status === "In development" ? "status in-development" : "status";
  const team = p.team ? "<li>Team project</li>" : "";
  const tags = p.tech.map(t => `<li>${t}</li>`).join("") + team;
  return `
    <article class="card project-card">
      <span class="${statusClass}">${p.status}</span>
      <h3>${p.name}</h3>
      <p class="category">${p.category}</p>
      <p>${p.summary}</p>
      ${tags ? `<ul class="tags" aria-label="Technologies">${tags}</ul>` : ""}
      <a class="more" href="project.html?id=${p.id}" aria-label="View details of ${p.name}">View details</a>
    </article>`;
}
document.getElementById("featuredProjects").innerHTML = PROJECTS.filter(p => p.featured).map(projectCard).join("");
document.getElementById("moreProjects").innerHTML = PROJECTS.filter(p => !p.featured).map(projectCard).join("");

document.getElementById("year").textContent = new Date().getFullYear();

/* ---- WhatsApp: stays hidden until a real number is set in CONFIG ---- */
if (/^\d{10,15}$/.test(CONFIG.whatsappNumber)) {
  const wa = document.getElementById("whatsappLink");
  wa.href = "https://wa.me/" + CONFIG.whatsappNumber;
  wa.parentElement.hidden = false;
}

/* ---- Contact form ---- */
const form = document.getElementById("contactForm");
const statusBox = document.getElementById("formStatus");
const fieldNames = ["name", "email", "subject", "message"];
const errorText = {
  name: "Enter your name.",
  email: "Enter a valid email address, like name@example.com.",
  subject: "Enter a subject.",
  message: "Write a short message."
};

function validateForm() {
  let firstBad = null;
  fieldNames.forEach(f => {
    const input = form.elements[f];
    const value = input.value.trim();
    const bad = !value || (f === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    document.getElementById(f + "Error").textContent = bad ? errorText[f] : "";
    input.setAttribute("aria-invalid", String(bad));
    if (bad && !firstBad) firstBad = input;
  });
  if (firstBad) firstBad.focus();
  return !firstBad;
}

function showStatus(html, type) {
  statusBox.className = "form-status " + type;
  statusBox.innerHTML = html;
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!validateForm()) { showStatus("Please fix the fields marked above.", "error"); return; }

  const data = {};
  fieldNames.forEach(f => data[f] = form.elements[f].value.trim());

  // No form service connected: be honest, never pretend the message was sent.
  if (!CONFIG.formEndpoint) {
    const mail = "mailto:hetu2286@gmail.com?subject=" + encodeURIComponent(data.subject) +
      "&body=" + encodeURIComponent(data.message + "\n\nFrom: " + data.name + " (" + data.email + ")");
    showStatus('The contact form is not connected yet, so nothing was sent. <a href="' + mail + '">Send this message from your email app</a> instead.', "info");
    return;
  }

  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.textContent = "Sending...";
  showStatus("Sending your message...", "info");
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Request failed");
    form.reset();
    showStatus("Thanks, your message was sent.", "success");
  } catch (err) {
    showStatus('The message could not be sent. Please email me at <a href="mailto:hetu2286@gmail.com">hetu2286@gmail.com</a>.', "error");
  } finally {
    btn.disabled = false;
    btn.textContent = "Send message";
  }
});

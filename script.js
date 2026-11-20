/* ============================================================
   EDIT YOUR CONTENT HERE. Everything below the "ENGINE" line
   just displays this data, so you rarely need to touch it.

   - Screenshots: save the image in the /images folder using the
     exact filename shown in `shots`. Missing files show an amber
     placeholder with the filename to use.
   - Links: an empty url ("") shows an amber "add link" button.
     Paste the real URL between the quotes and it becomes a link.
   - To add a project, copy one PROJECTS entry and change it.
   ============================================================ */

const PROJECTS = [
{
  id: "civictrack",
  title: "CivicTrack Analytics: NIST RMF, end to end",
  tag: "NIST RMF · SP 800-53 · Simulation",
  summary: "Took a fictional cloud system from a blank slate to an Authorization to Operate, working as the security assessor through all seven RMF steps.",
  what: "A simulated end-to-end Risk Management Framework project for CivicTrack Analytics, an internal incident analytics tool hosted in AWS. I acted as the security assessor and GRC analyst, and took the system all the way to an official go-live decision. Completed 13 November 2026 in GRC Playground.",
  why: "To move from reading about NIST frameworks to applying them, and to build practical, visible proof that I understand how controls are selected, tested and authorized.",
  objective: "Work out how much security the system needs based on its data, select and test the right controls, and give the Authorizing Official enough clear evidence to make an informed decision about going live.",
  tools: ["GRC Playground", "NIST RMF (7 steps)", "NIST SP 800-53B (Moderate baseline)", "FIPS 199", "YAML (config and evidence review)"],
  did: [
    "<b>Prepare:</b> placed eight components into three groups: five in the boundary, two inherited (identity provider, logging platform) and one external (reporting tool).",
    "<b>Categorize:</b> judged three bad days with the CIA triad and rated five information types. The high-water mark gave an overall Moderate.",
    "<b>Select:</b> started from the Moderate baseline, matched four risks to control families, and tailored out AC-18 Wireless access with a written reason, since the system runs in AWS with no wireless network.",
    "<b>Implement:</b> asked for technical evidence (identity provider export, logging records, role configuration, storage configuration) instead of accepting policy documents.",
    "<b>Assess:</b> found <code>skip_mfa_on_trusted_network: true</code> in the MFA configuration, confirmed it with a test admin sign-in from the office network, and recorded it as F-001. When the system owner asked me to remove it from the report, I kept it in.",
    "<b>Authorize:</b> briefed the Authorizing Official and recommended an ATO with conditions, because both open findings were Moderate with an owner and a due date.",
    "<b>Monitor:</b> traced four days of missing audit events to a logging token rotation (F-003), then wrote a risk memo for a Critical vulnerability (F-004) with a POA&amp;M entry, an interim mitigation and a risk acceptance request."
  ],
  skills: ["Risk analysis", "Control selection and tailoring", "Evidence-based assessment", "Independent reporting under pressure", "Log analysis and root cause tracing", "Risk memo writing for decision-makers"],
  outcome: [
    "Completed all 7 RMF steps for the system.",
    "Authorization to Operate with conditions, signed by the Authorizing Official.",
    "Four documented findings: F-001 MFA bypass (Moderate), F-002 baseline configuration not documented (Moderate), F-003 audit events stopped after a token rotation (Moderate), F-004 critical vulnerability in the reporting framework (Critical).",
    "Showed that authorization is not a finish line: monitoring found a logging failure after go-live."
  ],
  relevance: "Any organization that handles data, especially in the cloud, has to approve software through a process like this. The project covers day-to-day GRC analyst work: evaluating risk, checking technical evidence, writing memos, and making sure a system does not go live with unmanaged vulnerabilities.",
  evidence: [
    { label: "Full report (PDF)", url: "evidence/CivicTrack_Report_Md_Zahid_Bin_Alam.pdf" },
    { label: "RMF package (technical documentation)", url: "evidence/civictrack-rmf-package.md" },
    { label: "GitHub repository", url: "" },
    { label: "Demo", url: "" }
  ],
  shots: [
    { src: "images/civictrack-1-boundary.png", cap: "Step 1: placing components inside, inherited or external" },
    { src: "images/civictrack-2-categorize.png", cap: "Step 2: CIA triad and the high-water mark table" },
    { src: "images/civictrack-3-tailoring.png", cap: "Step 3: tailoring out AC-18 with a written reason" },
    { src: "images/civictrack-4-evidence-request.png", cap: "Step 4: evidence request to the system owner" },
    { src: "images/civictrack-5-mfa-bypass.png", cap: "Step 5: bypass line found in identity-config.yaml" },
    { src: "images/civictrack-6-authorize.png", cap: "Step 6: ATO with conditions recommendation" },
    { src: "images/civictrack-7-monitor.png", cap: "Step 7: missing log events traced to a token rotation" }
  ]
},
{
  id: "fips199",
  title: "FIPS 199 Security Categorization",
  tag: "FIPS 199 · FIPS 200 · SP 800-60 · Simulation",
  summary: "Categorized three government systems, reviewed four teammate drafts, and held my ratings against pressure until the Authorizing Official signed the memo.",
  what: "A risk assessment and compliance project on three simulated government systems: BenefitPortal, InternalScheduler and EmergencyAlertSystem. For each I set the impact level (Low, Moderate or High) from the data it holds and the real harm if it were leaked, changed or taken offline. The final memo was reviewed and signed by the Authorizing Official. Completed 15 November 2026 in GRC Playground.",
  why: "Federal agencies must categorize systems with FIPS 199 before choosing controls. Rate too high and money goes to controls that are not needed; rate too low and data or even lives can be at risk. I also wanted practice at disagreeing politely, with facts, with a system owner and a colleague.",
  objective: "Rate Confidentiality, Integrity and Availability separately, apply the high-water mark rule from FIPS 200, and defend each rating with evidence instead of opinion, including in peer review.",
  tools: ["GRC Playground", "FIPS 199", "FIPS 200", "NIST SP 800-60", "Markdown (categorization memo)"],
  did: [
    "<b>Scoped the information:</b> picked only the data each system really holds, for example leaving benefit payments out of BenefitPortal because a separate system moves the money.",
    "<b>Rated each objective:</b> raised applicant records to High for confidentiality because about two million SSNs and incomes in one place would cause severe harm. Rated EmergencyAlertSystem High for integrity and availability because a false or late alert could put a hazmat crew in danger.",
    "<b>Corrected an assumption:</b> a colleague wanted InternalScheduler at Moderate because it holds names. I compared it with an HR system and rated it Low, since leaked room bookings do limited harm.",
    "<b>Held the line on a deadline:</b> the BenefitPortal owner asked for Moderate to avoid extra controls before a March launch. I kept High and recorded his request and my reason in the memo.",
    "<b>Reviewed four peer drafts:</b> sent three back (one used a firewall to lower a rating, one gave a single level for everything, one applied the wrong rating basis) and passed one on."
  ],
  skills: ["Applying FIPS 199 and FIPS 200", "Separating likelihood from impact", "Professional pushback and communication", "Quality assurance against a standard", "Writing short, checkable justifications"],
  outcome: [
    "Memo signed and approved by the Authorizing Official.",
    "Final ratings: BenefitPortal High, InternalScheduler Low, EmergencyAlertSystem High.",
    "Three of four peer drafts returned with a stated reason; one passed on.",
    "InternalScheduler kept at Low, so a simple room-booking tool does not take on high-level controls it does not need."
  ],
  relevance: "Categorization is the first RMF step, so every later decision depends on it. Auditors look for clear, defensible reasoning behind each rating, and the memo gives a reason for every line. The project also shows how to answer business pressure without changing the facts.",
  evidence: [
    { label: "Step-by-step report (PDF)", url: "evidence/FIPS_199_Report.pdf" },
    { label: "Signed categorization memo (.md)", url: "evidence/FIPS_199_Report.md" },
    { label: "GitHub repository", url: "" },
    { label: "Demo", url: "" }
  ],
  shots: [
    { src: "images/fips199-1-final-screen.png", cap: "Final screen: three systems categorized, memo signed" },
    { src: "images/fips199-2-benefitportal.png", cap: "BenefitPortal: the cell that decides the overall level" },
    { src: "images/fips199-3-internalscheduler.png", cap: "InternalScheduler: same names, different harm" },
    { src: "images/fips199-4-emergency-alerts.png", cap: "EmergencyAlertSystem: running the three failures" },
    { src: "images/fips199-5-peer-review.png", cap: "Peer review queue: three drafts returned, one passed" },
    { src: "images/fips199-6-signoff.png", cap: "Authorizing Official signs all three systems" }
  ]
}
];

/* Competitions: replace the placeholder with real entries (copy the block for more). */
const COMPETITIONS = [
  { placeholder: true, name: "Add competition name", result: "Add result or placement", involved: "Add what the competition involved", areas: "Add challenge areas (e.g. web, crypto, forensics)", learned: "Add what you learned", evidence: { label: "Write-up or scoreboard", url: "" } }
];

/* Practical learning: set rooms to a number, add areas, and paste your profile URL. */
const PRACTICAL = {
  platform: "TryHackMe",
  rooms: null,          // e.g. 45
  paths: null,          // e.g. 2
  areas: [],            // e.g. ["Network security", "Linux", "SIEM basics"]
  profile: "",          // e.g. "https://tryhackme.com/p/yourname"
  writeups: [ { label: "Selected write-up", url: "" } ]
};

const CERTS = [
  { name: "Google Cybersecurity Certificate", status: "Completed", why: "To build a structured foundation in security practice before specializing in GRC.", areas: ["Security domains and risk", "Incident response", "Linux and SQL", "Python for security"], url: "" },
  { name: "CompTIA Security+ (SY0-701)", status: "In progress", why: "A widely recognized baseline for security roles in Canada, and the framework knowledge behind my GRC projects.", areas: ["General security concepts", "Threats and vulnerabilities", "Security architecture", "Security operations", "Security program oversight"], url: "" }
];
const SIMULATIONS = [
  { name: "TCS Cybersecurity Job Simulation", status: "Completed (job simulation, not a certification)", why: "To see how security work is handled in a professional consulting setting.", areas: [], url: "" }
];

const COMMUNITY = [
  { name: "Volunteer, Sudbury Food Bank (BDSFB)", detail: "Add what you did and the impact (for example people served, hours, or a process you improved).", url: "" },
  { name: "Volunteer, Laurentian University Computer Science Club", detail: "Add what you did and the impact (for example events organized, students helped, or a talk you gave).", url: "" }
];

/* ======================= ENGINE (no edits needed) ======================= */
const $ = (s, r = document) => r.querySelector(s);
const toast = (m) => { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("on"), 2800); };
const btn = (l) => l.url
  ? `<a class="btn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
  : `<button type="button" class="btn pending" data-pending="${l.label}">${l.label} <small>add link</small></button>`;
const chips = (a, ph) => `<ul class="chips">${a.length ? a.map(x => `<li>${x}</li>`).join("") : `<li class="ph">${ph}</li>`}</ul>`;
const list = (a) => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;

function renderProjects() {
  $("#project-grid").innerHTML = PROJECTS.map(p => `
    <button type="button" class="card" data-open="${p.id}">
      <span class="tag">${p.tag}</span><h3>${p.title}</h3><p>${p.summary}</p>
      <span class="go">View project details</span>
    </button>`).join("") + `
    <div class="card ph"><span class="tag warn">Next project</span><h3>Add another project</h3>
    <p>Copy a block in the PROJECTS list in script.js and it appears here automatically.</p></div>`;
}

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  const sec = (t, body) => `<section><h3>${t}</h3>${body}</section>`;
  const shots = p.shots.map((s, i) => `<figure><img src="${s.src}" alt="${s.cap}" loading="lazy" data-cap="${s.cap}"><figcaption>${s.cap}</figcaption></figure>`).join("");
  const d = $("#project-dialog");
  d.innerHTML = `<div class="dh"><div><span class="tag">${p.tag}</span><h2>${p.title}</h2></div><button class="x" type="button" data-close>Close</button></div>
  <div class="db">
    ${sec("What was the project?", `<p>${p.what}</p>`)}
    ${sec("Why I did it", `<p>${p.why}</p>`)}
    ${sec("Objective", `<p>${p.objective}</p>`)}
    ${sec("Tools and technologies", chips(p.tools))}
    ${sec("What I actually did", list(p.did))}
    ${sec("Skills developed", chips(p.skills))}
    ${sec("Outcome", list(p.outcome))}
    ${sec("Real-world relevance", `<p>${p.relevance}</p>`)}
    ${sec("Evidence", `<div class="actions">${p.evidence.map(btn).join("")}<a class="btn" href="#shots-${p.id}" data-jump>Screenshots</a></div>`)}
    <section id="shots-${p.id}"><h3>Screenshots</h3><div class="shots">${shots}</div></section>
  </div>`;
  d.querySelectorAll(".shots img").forEach(im => im.addEventListener("error", () => {
    const src = im.getAttribute("src"), cap = im.closest("figure").querySelector("figcaption");
    im.outerHTML = `<div class="shot-ph"><span>Add screenshot</span><code>${src}</code></div>`; cap.style.display = "";
  }));
  if (!d.open) d.showModal();
  d.scrollTop = 0;
  history.replaceState(null, "", "#project-" + id);
}

function renderCompetitions() {
  $("#comp-grid").innerHTML = COMPETITIONS.map(c => `
    <div class="card ${c.placeholder ? "ph" : ""}">
      ${c.placeholder ? `<span class="tag warn">Placeholder: edit COMPETITIONS in script.js</span>` : ""}
      <h3>${c.name}</h3>
      <dl class="f"><div><dt>Result</dt><dd>${c.result}</dd></div><div><dt>What it involved</dt><dd>${c.involved}</dd></div>
      <div><dt>Challenges covered</dt><dd>${c.areas}</dd></div><div><dt>What I learned</dt><dd>${c.learned}</dd></div></dl>
      <div class="actions" style="margin:0">${btn(c.evidence)}</div>
    </div>`).join("");
}

function renderLearning() {
  const n = (v, l) => `<div class="stat ${v == null ? "ph" : ""}"><strong>${v == null ? "—" : v}</strong><span>${v == null ? l + " (add in script.js)" : l}</span></div>`;
  $("#learning-box").innerHTML = `
    <div class="stats">${n(PRACTICAL.rooms, PRACTICAL.platform + " rooms completed")}${n(PRACTICAL.paths, "Learning paths")}</div>
    <div class="card"><h3>Areas covered</h3>${chips(PRACTICAL.areas, "Add areas covered")}
    <div class="actions" style="margin:6px 0 0">${btn({ label: PRACTICAL.platform + " profile", url: PRACTICAL.profile })}${PRACTICAL.writeups.map(btn).join("")}</div></div>`;
}

function renderCerts() {
  const card = (c) => `<div class="card"><span class="tag ${/progress/.test(c.status) ? "warn" : ""}">${c.status}</span><h3>${c.name}</h3>
    <p>${c.why}</p>${c.areas.length ? chips(c.areas) : ""}<div class="actions" style="margin:4px 0 0">${btn({ label: "Certificate", url: c.url })}</div></div>`;
  $("#cert-grid").innerHTML = CERTS.concat(SIMULATIONS).map(card).join("");
}

function renderCommunity() {
  $("#community-grid").innerHTML = COMMUNITY.map(c => `<div class="card ph"><span class="tag warn">Add your impact</span><h3>${c.name}</h3><p>${c.detail}</p>
    <div class="actions" style="margin:4px 0 0">${btn({ label: "Evidence", url: c.url })}</div></div>`).join("");
}

renderProjects(); renderCompetitions(); renderLearning(); renderCerts(); renderCommunity();

document.addEventListener("click", (e) => {
  const t = e.target;
  const o = t.closest("[data-open]"); if (o) return openProject(o.dataset.open);
  const pend = t.closest("[data-pending]"); if (pend) return toast(`"${pend.dataset.pending}" is a placeholder. Add the URL in script.js.`);
  if (t.closest("[data-close]")) { t.closest("dialog").close(); history.replaceState(null, "", location.pathname); return; }
  const j = t.closest("[data-jump]"); if (j) { e.preventDefault(); $(j.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); return; }
  const im = t.closest(".shots img");
  if (im) { const lb = $("#lightbox"); lb.innerHTML = `<img src="${im.src}" alt="${im.alt}"><p>${im.dataset.cap} (click anywhere or press Esc to close)</p>`; lb.showModal(); return; }
  if (t.id === "lightbox" || t.closest("#lightbox")) return $("#lightbox").close();
  if (t.tagName === "DIALOG") t.close();              // click on backdrop
  if (t.closest(".nav nav a")) { $(".nav nav").classList.remove("open"); $(".menu").setAttribute("aria-expanded", "false"); }
});

$(".menu").addEventListener("click", (e) => { const o = $(".nav nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });

$("#copy-email").addEventListener("click", async () => {
  const mail = "zahidbinalam005@gmail.com";
  try { await navigator.clipboard.writeText(mail); toast("Email address copied"); }
  catch { toast("Copy failed. Email: " + mail); }
});

$("#project-dialog").addEventListener("close", () => { if (location.hash.startsWith("#project-")) history.replaceState(null, "", location.pathname); });
if (location.hash.startsWith("#project-")) openProject(location.hash.slice(9));

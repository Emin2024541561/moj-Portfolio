/* =========================================================
   app.js — FULL FILE (desktop unchanged in feel, mobile fixed)
   - Vanilla JS only
   - Desktop: hover on 5-card strip updates hero + meta + CTA
   - Click/tap active card opens project detail view
   - Mobile: no scroll, swipe slider snaps card-by-card, text updates on snap
   - Text animation: letter-to-letter morph ONLY (no binary, no random chars)
   ========================================================= */

/* -----------------------------
   EDIT THIS DATA ONLY
----------------------------- */
const projects = [
  {
    id: "p1",
    title: "WEB DESIGN",
    year: "2024",
    servicesLines: ["BRANDING", "DESIGN", "DEVELOPMENT"],
    thumbSrc: "picture1.png",
    link: "#",
    liveSiteLabel: "eminetik.com",
    liveSiteUrl: "https://eminetik.com",
    description: "Kompletan proces dizajna i razvoja lične web stranice, uključujući definisanje vizuelnog identiteta, UX strukture, UI dizajn i implementaciju responzivnog, dinamičnog front-enda.",
    images: [
      "pivture1.1.png",
      "picture1a.png",
      "picture1b.png",
      "picture1c.png",
      "picture1d.png",
      "picture1f.png",
      "picture1e.png"

    ]
  },
  {
    id: "p2",
    title: "FULL STACK DEVELOPMENT",
    year: "2025",
    servicesLines: ["UI/UX", "FRONTEND", "BACKEND"],
    thumbSrc: "picture2.png",
    link: "#",
    liveSiteLabel: "remont24bih.com",
    liveSiteUrl: "https://www.remont24bih.com",
    description: "Kompletan full-stack razvoj web stranice za enterijere i sisteme grijanih plafona, uključujući vizuelni identitet, UX/UI dizajn, front-end i back-end implementaciju, integraciju baze podataka te potpunu lokalizaciju sadržaja na engleski i njemački jezik.",
    images: [
  "picture2.png",
  "picture2b.png",
  "picture2c.png",
  "picture2d.png",
  "picture2e.png",
  "picture2f.png",
   { type: "video", src: "video2a.mp4" }

]

  },
  {
    id: "p3",
    title: "REVERSE ENGINEERING PROJECT",
    year: "2023",
    servicesLines: ["DESIGN", "UI/UX", "PRACTICAL"],
    thumbSrc: "picture3.png",
    link: "#",
    liveSiteLabel: "https://emin2024541561.github.io/moj-Centrotrans-Projekat/index.html",
    liveSiteUrl: "https://emin2024541561.github.io/moj-Centrotrans-Projekat/index.html",
description: "Zadatak je bio izraditi potpunu repliku postojeće web stranice. Kao referenca odabrana je zvanična web stranica Centrotransa, koja je u potpunosti rekonstruisana u omjeru 1:1. Struktura, layout, tipografija i ponašanje elemenata identični su originalu, a isti nivo preciznosti primijenjen je na sve podstranice.",
    images: [
  "picture3.png",
  "picture3a.png",
  "picture3b.png",
  "picture3c.png",
  "picture3d.png",
  "picture3e.png"
  ]

  },
  {
    id: "p4",
    title: "GRAPHIC DESIGN",
    year: "2025",
    servicesLines: ["PRODUCT", "INTERFACE", "DESIGN"],
    thumbSrc: "slika1a.png",
    link: "#",
description: "Dizajn ambalažnih naljepnica i razvoj vizuelnih sistema za više brendova u oblasti hrane, pića i dodataka prehrani. Rad obuhvata kreiranje konzistentnog identiteta, tipografsku hijerarhiju, kolor-kodiranje proizvoda i prilagođavanje dizajna različitim formatima ambalaže, uz fokus na jasnoću komunikacije, prepoznatljivost brenda i snažan nastup na polici.",
    images: [
"slika1a.png",
    "slika1b.png",
    "slika1c.png",
    "slika1d.png",
    "slika2a.png",
    "slika2b.png",
    "slika3a.png",
    "slika3b.png",
  ]
  },
  {
    id: "p5",
    title: "BRAND IDENTITY",
    year: "2018-2026",
    servicesLines: ["VISUAL", "IDENTITY", "DIRECTION"],
    thumbSrc: "picture5.jpeg",
    link: "#",
    description: "Kolekcija odabranih ključnih projekata iz oblasti grafičkog dizajna i razvoja vizuelnog identiteta, realizovanih u periodu od 2018. godine do danas. Radovi obuhvataju različite brendove i industrije te prate moj razvoj od samostalnog freelancera do formiranja jasnog dizajnerskog pristupa i profesionalnog studijskog rada.",

    images: [
     "123.png",
  "321.png",
  "741.png",
  "852.png",
  "963.png",
  "456654.png",
  "3.jpg",
  "5.jpg",
  "4.jpg",
"end_1a.png",
  "end_1b.png",
    "vizitkarta1.png",
"slika1.png",
"slika2.png",
"slika4.png",
"slika6.png",
"slika7.png",
"slika8.png",
"slika11.png",
"slika12.png",
"slika13.png",
"slika15.png",
  
  "logo3.png",
  "logo4.png",
  "logo7.png",
  "logo8.png",
  "logo20.jpg",
  "logo22.jpg",
  "baner1.png",
  "baner11.png",
  "baner20.png",
  "baner21.png",
  "baner7.png"
  ]
  }
];

const archiveItems = [
  {
    index: 1,
    title: "WEB DESIGN",
    category: "DESIGN / DEVELOPMENT",
    year: "2024",
    imageSrc: "picture1.png"
  },
  {
    index: 2,
    title: "FULL STACK DEVELOPMENT",
    category: "UI / FRONTEND / BACKEND",
    year: "2025",
    imageSrc: "picture2.png"
  },
  {
    index: 3,
    title: "REVERSE ENGINEERING PROJECT",
    category: "UI / UX / PRACTICAL",
    year: "2023",
    imageSrc: "picture3.png"
  },
  {
    index: 4,
    title: "GRAPHIC DESIGN",
    category: "PRODUCT / INTERFACE",
    year: "2023",
    imageSrc: "slika1a.png"
  },
  {
    index: 5,
    title: "BRAND IDENTITY",
    category: "VISUAL / DIRECTION",
    year: "2022",
    imageSrc: "picture5.jpeg"
  }
];


/* -----------------------------
   STATE
----------------------------- */
const state = {
  view: "work", // work | info | archive
  mode: "home", // home | project
  activeProjectId: null,

  // desktop hover
  hoverActive: false,
  hoveredProjectId: null,

  // mobile
  isMobile: false,
  mobileSlider: null,
  mobileActiveIndex: 0,

  // text animation cancellations
  _animToken: new WeakMap()
};

/* -----------------------------
   DOM (robust selectors: won’t break if some elements absent)
----------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const body = document.body;

// Views
const viewWork = $("#view-work") || $("#work") || $("[data-view='work']");
const viewInfo = $("#view-info") || $("#info") || $("[data-view='info']");
const viewArchive = $("#view-archive") || $("#archive") || $("[data-view='archive']");

// Nav
const navLinks =
  $$("[data-nav]")
  .concat($$("[data-viewtarget]"))
  .concat($$(".nav a"))
  .concat($$(".header-right a"))
  .filter((v, i, a) => a.indexOf(v) === i);

// Hero title lines
const hero = $(".hero") || $(".hero-title")?.closest(".hero") || $(".work-hero");
const heroTitle = $(".hero-title") || $(".hero h1") || $(".hero .title") || $("h1");
const heroLineEls = heroTitle ? $$("span", heroTitle) : []; // if spans exist
// If no spans, we will set heroTitle.textContent with \n and CSS should preserve lines if it did before

// Micro blocks
const microServices = $("#microServices") || $(".micro--services") || $(".services-block") || $(".micro-services");
const microLocation = $("#microLocation") || $(".micro--location") || $(".location-block") || $(".micro-location");

let microServicesLines = microServices ? $$("div, span, p", microServices).filter(n => n.childElementCount === 0) : [];
let microLocationLines = microLocation ? $$("div, span, p", microLocation).filter(n => n.childElementCount === 0) : [];

// Ensure at least 2 lines exist for desktop-style blocks
function ensureMinLines(container, min) {
  if (!container) return [];
  const get = () => $$(":scope > div, :scope > span, :scope > p", container);
  let lines = get();
  while (lines.length < min) {
    const d = document.createElement("div");
    d.textContent = "";
    container.appendChild(d);
    lines = get();
  }
  return lines;
}
if (microServices) microServicesLines = ensureMinLines(microServices, 2);
if (microLocation) microLocationLines = ensureMinLines(microLocation, 2);

// Optional: project meta area used in detail view (keep wherever it is)
const projectMeta = $(".project-meta") || $("#projectMeta");
const projectMetaService = projectMeta ? $(".meta-services", projectMeta) : null;
const projectMetaYear = projectMeta ? $(".meta-year", projectMeta) : null;

// Thumb strip / slider
const thumbStrip = $(".thumb-strip-inner") || $(".thumb-strip .thumb-strip-inner") || $(".thumbs") || $(".thumb-strip");
const thumbViewport = $(".thumb-viewport") || (thumbStrip ? thumbStrip.parentElement : null);
const thumbs = thumbStrip ? $$(".thumb", thumbStrip) : [];
const thumbCTA = $(".thumb-cta") || $("#thumbCTA");
const ctaText = $("#ctaText") || (thumbCTA ? $(".cta-text", thumbCTA) : null);

// Mobile HUD (optional)
let mobileHud = $(".mobile-hud");
let mobileIndexEl = $(".mobile-index");
let mobileHintEl = $(".mobile-hint");
const mobileCountEl = document.getElementById("mobileCount");
const mobileTotalEl = document.getElementById("mobileTotal");


// Archive list
const archiveList = $(".archive-list") || $("#archiveList") || $(".archive-scroll");

/* -----------------------------
   UTIL: detect mobile
----------------------------- */
function computeIsMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

/* -----------------------------
   TIME (Sarajevo)
----------------------------- */
function getSarajevoTimeString() {
  // Sarajevo is typically Europe/Sarajevo (CET/CEST). Use Intl.
  try {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Sarajevo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    return fmt.format(new Date());
  } catch {
    // fallback local
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
}

let clockInterval = null;
function startClock() {
  if (clockInterval) clearInterval(clockInterval);

  const tick = () => {
    // Kad si u WORK view:
    // - Desktop: pauziraj kad hover drži projekat (godina)
    // - Mobile: pauziraj kad je aktivan projekat (slider index nije 0) ili kad si u project modu
    const mobileProjectActive =
      state.isMobile && (
        state.view === "work" &&
        (state.mode === "project" || state.mobileActiveIndex !== 0)
      );

    const desktopProjectHover =
      !state.isMobile && state.view === "work" && state.hoverActive;

    if (desktopProjectHover || mobileProjectActive) return;

    // uvijek prikazuj city + vrijeme kad nije pauzirano
    if (microLocationLines[0]) microLocationLines[0].textContent = "SARAJEVO, BA";
    if (microLocationLines[1]) microLocationLines[1].textContent = getSarajevoTimeString();
  };

  tick();
  clockInterval = setInterval(tick, 1000);
}


/* -----------------------------
   TEXT MORPH (NO RANDOM / NO BINARY)
   - letter-to-letter only
   - never shows fillers
   - per-frame: some characters resolved to new, rest stay old
----------------------------- */
function morphTo(el, target, opts = {}) {
  if (!el) return Promise.resolve();
  const duration = typeof opts.duration === "number" ? opts.duration : 330;
  const stagger = typeof opts.stagger === "number" ? opts.stagger : 10;

  const token = { cancelled: false };
  state._animToken.set(el, token);

  const startText = (el.textContent || "").replace(/\r/g, "");
  const endText = (target || "").replace(/\r/g, "");

  // Keep layout stable: pad both to same length with spaces
  const maxLen = Math.max(startText.length, endText.length);
  const a = startText.padEnd(maxLen, " ");
  const b = endText.padEnd(maxLen, " ");

  const start = performance.now();

  // resolve schedule per character (but shows ONLY old->new, no random)
  // Each char flips once when its time comes.
  const flipAt = new Array(maxLen).fill(0).map((_, i) => {
    const base = (i / Math.max(1, maxLen - 1)) * duration;
    return base + i * stagger * 0.15;
  });

  return new Promise((resolve) => {
    const frame = (t) => {
      const currentToken = state._animToken.get(el);
      if (currentToken !== token || token.cancelled) return resolve();

      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);

      let out = "";
      for (let i = 0; i < maxLen; i++) {
        const shouldFlip = elapsed >= flipAt[i];
        out += shouldFlip ? b[i] : a[i];
      }

      // Trim end spaces but keep internal spaces
      el.textContent = out.replace(/\s+$/g, "");

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = endText;
        resolve();
      }
    };
    requestAnimationFrame(frame);
  });
}

function morphLines(els, lines, opts) {
  const a = els?.[0];
  const b = els?.[1];
  const l1 = lines?.[0] ?? "";
  const l2 = lines?.[1] ?? "";
  return Promise.all([morphTo(a, l1, opts), morphTo(b, l2, opts)]);
}

/* -----------------------------
   HERO TITLE helpers
----------------------------- */
const DEFAULT_HERO_LINES = ["EMIN", "SOLAK"];
function setHeroLines(lines, animate = true) {
  if (!heroTitle) return;

  // If hero title uses spans per line, animate each span
  if (heroLineEls.length >= 2) {
    const l1 = lines[0] ?? "";
    const l2 = lines[1] ?? "";
    if (animate) {
      morphTo(heroLineEls[0], l1);
      morphTo(heroLineEls[1], l2);
    } else {
      heroLineEls[0].textContent = l1;
      heroLineEls[1].textContent = l2;
    }
    return;
  }

  // Otherwise, preserve line breaks by joining with \n (your CSS likely uses white-space: pre-line)
  const text = (lines || []).join("\n");
  if (animate) return morphTo(heroTitle, text);
  heroTitle.textContent = text;
}

function splitTitleToTwoLines(title) {
  const t = (title || "").trim().toUpperCase();
  if (!t) return ["", ""];
  if (t.includes(" ")) {
    // Split into 2 lines with balanced break
    const parts = t.split(/\s+/);
    if (parts.length === 2) return [parts[0], parts[1]];
    const mid = Math.ceil(parts.length / 2);
    return [parts.slice(0, mid).join(" "), parts.slice(mid).join(" ")];
  }
  return [t, ""];
}

/* -----------------------------
   APPLY PROJECT TEXT (hero + micro blocks)
   - Desktop hover wants 2-line services + year shown in location block
   - Mobile wants 3-line services + year on right; main title = project title
----------------------------- */
function ensureMobileServicesLines() {
  if (!state.isMobile || !microServices) return;
  // Ensure exactly 3 lines in services block on mobile
  while (microServices.children.length < 3) {
    const d = document.createElement("div");
    d.textContent = "";
    microServices.appendChild(d);
  }
  while (microServices.children.length > 3) {
    microServices.removeChild(microServices.lastElementChild);
  }
}

function getMobileServiceEls() {
  return microServices ? Array.from(microServices.children) : [];
}

function updateLocationBlockForYear(year, animate = true) {
  if (!microLocation) return;
  microLocationLines = ensureMinLines(microLocation, 2);

  // line1 = year, line2 = (blank)
  if (animate) {
    morphTo(microLocationLines[0], String(year || ""));
    morphTo(microLocationLines[1], "");
  } else {
    microLocationLines[0].textContent = String(year || "");
    microLocationLines[1].textContent = "";
  }
}

function restoreLocationBlockDefault(animate = true) {
  if (!microLocation) return;
  microLocationLines = ensureMinLines(microLocation, 2);

  const line1 = "SARAJEVO, BA";
  const line2 = getSarajevoTimeString();

  if (animate) {
    morphTo(microLocationLines[0], line1);
    morphTo(microLocationLines[1], line2);
  } else {
    microLocationLines[0].textContent = line1;
    microLocationLines[1].textContent = line2;
  }
}

function applyProjectText(projectId, animate = true) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  // HERO title
  const heroLines = splitTitleToTwoLines(p.title);
  setHeroLines(heroLines, animate);

  // SERVICES
  let services = (p.servicesLines && p.servicesLines.length) ? p.servicesLines : ["DESIGN", "DEVELOPMENT"];
  if (state.isMobile) {
    // mobile wants 3 lines exactly
    let services3 = services.slice(0, 3);
    if (services3.length === 2) services3.push("DEVELOPMENT");
    if (services3.length === 1) services3.push("DESIGN", "DEVELOPMENT");
    if (services3.length === 0) services3 = ["BRANDING", "DESIGN", "DEVELOPMENT"];

    ensureMobileServicesLines();
    const els = getMobileServiceEls();
    if (animate) {
      morphTo(els[0], services3[0] || "");
      morphTo(els[1], services3[1] || "");
      morphTo(els[2], services3[2] || "");
    } else {
      els[0].textContent = services3[0] || "";
      els[1].textContent = services3[1] || "";
      els[2].textContent = services3[2] || "";
    }

    // YEAR on right (location block line1 used as year in your mobile CSS)
    updateLocationBlockForYear(p.year, animate);
  } else {
    // desktop keeps your two-line micro block
    microServicesLines = ensureMinLines(microServices, 2);
    const l1 = services[0] || "";
    const l2 = services[1] || "";
    if (animate) morphLines(microServicesLines, [l1, l2]);
    else {
      microServicesLines[0].textContent = l1;
      microServicesLines[1].textContent = l2;
    }

    // desktop hover shows year in location block
    updateLocationBlockForYear(p.year, animate);
  }

  // Detail meta if present (do NOT move it; only fill)
  if (projectMetaService && projectMetaYear) {
    const metaServices = (p.servicesLines && p.servicesLines.length) ? p.servicesLines : [];
    const s1 = metaServices[0] || "";
    const s2 = metaServices[1] || "";
    if (animate) {
      morphTo(projectMetaService, `${s1}\n${s2}`.trim());
      morphTo(projectMetaYear, p.year || "");
    } else {
      projectMetaService.textContent = `${s1}\n${s2}`.trim();
      projectMetaYear.textContent = p.year || "";
    }
  }
}

function restoreDefaultText(animate = true) {
  // HERO default
  setHeroLines(DEFAULT_HERO_LINES, animate);

  // Services default
  if (microServices) {
    if (state.isMobile) {
      ensureMobileServicesLines();
      const els = getMobileServiceEls();
      const defaults3 = ["BRANDING", "DESIGN", "DEVELOPMENT"]; // matches your mobile image baseline
      if (animate) {
        morphTo(els[0], defaults3[0]);
        morphTo(els[1], defaults3[1]);
        morphTo(els[2], defaults3[2]);
      } else {
        els[0].textContent = defaults3[0];
        els[1].textContent = defaults3[1];
        els[2].textContent = defaults3[2];
      }
    } else {
      microServicesLines = ensureMinLines(microServices, 2);
      if (animate) morphLines(microServicesLines, ["DESIGNER &", "DEVELOPER"]);
      else {
        microServicesLines[0].textContent = "DESIGNER &";
        microServicesLines[1].textContent = "DEVELOPER";
      }
    }
  }

  // Location default
  restoreLocationBlockDefault(animate);
}

/* -----------------------------
   DESKTOP HOVER HANDLERS (unchanged behavior)
----------------------------- */
function setupDesktopThumbHover() {
  if (!thumbStrip || thumbs.length === 0) return;

  // Add dataset project id if missing
  thumbs.forEach((t, i) => {
    if (!t.dataset.projectId) t.dataset.projectId = projects[i]?.id || "";
    t.style.cursor = "pointer";
  });

  const enter = (thumb) => {
    if (state.isMobile) return; // desktop only
    const pid = thumb.dataset.projectId;
    state.hoverActive = true;
    state.hoveredProjectId = pid;

    thumbStrip.classList.add("is-hovering");
    thumbs.forEach(el => el.classList.toggle("is-hovered", el === thumb));

    // Update text immediately on hover
    applyProjectText(pid, true);

    // CTA
    if (thumbCTA) thumbCTA.classList.add("show");
    if (ctaText) ctaText.textContent = "VIEW PROJECT →";
  };

  const leaveStrip = () => {
    if (state.isMobile) return;
    state.hoverActive = false;
    state.hoveredProjectId = null;

    thumbStrip.classList.remove("is-hovering");
    thumbs.forEach(el => el.classList.remove("is-hovered"));

    // Reset to default on leaving strip only (no flicker between cards)
    restoreDefaultText(true);

    if (thumbCTA) thumbCTA.classList.remove("show");
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener("pointerenter", () => enter(thumb));
    thumb.addEventListener("mouseenter", () => enter(thumb));
    thumb.addEventListener("click", () => openProject(thumb.dataset.projectId));
  });

  // leaving the entire strip resets
  const stripContainer = thumbStrip.closest(".thumb-strip") || thumbStrip.parentElement || thumbStrip;
  stripContainer.addEventListener("pointerleave", leaveStrip);
  stripContainer.addEventListener("mouseleave", leaveStrip);
}

/* -----------------------------
   PROJECT OPEN / CLOSE
   (Does NOT reposition anything; only switches view mode + fills text)
----------------------------- */
function openProject(projectId) {
  state.mode = "project";
  state.activeProjectId = projectId;

  // Keep view as work, but fill hero/meta with project
  applyProjectText(projectId, true);

  // Highlight active thumb
  thumbs.forEach(t => t.classList.toggle("is-active", t.dataset.projectId === projectId));
}

function closeProject() {
  state.mode = "home";
  state.activeProjectId = null;
  thumbs.forEach(t => t.classList.remove("is-active"));

  // On desktop: return to default
  // On mobile: you want project-driven layout, so we keep current activeIndex data
  if (state.isMobile) {
    const pid = projects[state.mobileActiveIndex]?.id;
    if (pid) applyProjectText(pid, true);
  } else {
    restoreDefaultText(true);
  }
}

/* -----------------------------
   NAV VIEW SWITCHING (works on mobile + desktop)
   Must not be blocked by slider touches.
----------------------------- */
function setActiveNav(viewName) {
  const buttons = document.querySelectorAll(".nav-item[data-nav]");
  buttons.forEach((btn) => {
    const isActive = btn.dataset.nav === viewName;

    // ovo je najbitnije jer ti HTML već koristi aria-current na WORK
    btn.setAttribute("aria-current", isActive ? "page" : "false");

    // dodatno (ne smeta, ali ne moraš imati u CSS-u)
    btn.classList.toggle("is-active", isActive);
  });
}


function showView(viewName) {
  state.view = viewName;

  const views = document.querySelectorAll(".view[data-view]");
  views.forEach((v) => {
    const isActive = v.dataset.view === viewName;

    // ✅ Tvoja prava klasa iz HTML-a:
    v.classList.toggle("view--active", isActive);

    // ✅ sigurni display (da nema "nevidljiv ali klikabilan")
    v.style.display = isActive ? "" : "none";
    v.style.pointerEvents = isActive ? "auto" : "none";
    v.setAttribute("aria-hidden", isActive ? "false" : "true");
  });

  setActiveNav(viewName);

  // kad se vrati na WORK, vrati text state kako si već zamislio
  if (viewName === "work") {
    if (state.isMobile) {
      const pid = projects[state.mobileActiveIndex]?.id;
      if (pid) applyProjectText(pid, true);
    } else {
      if (state.mode === "project" && state.activeProjectId) applyProjectText(state.activeProjectId, true);
      else restoreDefaultText(true);
    }
  }

  // ✅ kad nisi na WORK, ugasi hover stanje da clock i text ne glitche
  if (viewName !== "work") {
    state.hoverActive = false;
    state.hoveredProjectId = null;
  }
}


function setupNav() {
  const buttons = document.querySelectorAll(".nav-item[data-nav]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showView(btn.dataset.nav);
    });
  });
}


/* -----------------------------
   MOBILE: NO SCROLL + SWIPE SLIDER (snap)
----------------------------- */
function preventMobileScroll(e) {
  if (!state.isMobile) return;

  // dozvoli scroll u INFO / ARCHIVE / PROJECT
  if (state.view !== "work") return;

  // dozvoli nav klikove
  const t = e.target;
  if (t && (t.closest(".header-right") || t.closest(".header-left"))) return;

  // blokiraj samo ako gesture kreće na slideru
  if (t && t.closest(".thumb-viewport")) {
    e.preventDefault();
  }
}


function updateMobileHUD(index) {
  // (Optional fallback) create HUD if missing
  if (!mobileHud) {
    if (!thumbCTA) return;

    mobileHud = document.createElement("div");
    mobileHud.className = "mobile-hud";

    mobileIndexEl = document.createElement("div");
    mobileIndexEl.className = "mobile-index";

    mobileHintEl = document.createElement("div");
    mobileHintEl.className = "mobile-hint";
    mobileHintEl.textContent = "FEATURED WORK (SWIPE)";

    mobileHud.appendChild(mobileIndexEl);
    mobileHud.appendChild(mobileHintEl);

    thumbCTA.appendChild(mobileHud);
  }

  // ✅ Update existing HTML counter (this is what you want)
  if (mobileCountEl) mobileCountEl.textContent = String(index + 1);
  if (mobileTotalEl) mobileTotalEl.textContent = String(projects.length);

  // (Optional) if you still use fallback HUD
  if (mobileIndexEl) mobileIndexEl.textContent = `${index + 1} / ${projects.length}`;
}


function updateMobileActiveVisuals(index) {
  if (!thumbStrip || thumbs.length === 0) return;
  thumbStrip.classList.add("is-hovering");
  thumbs.forEach((t, i) => t.classList.toggle("is-hovered", i === index));
}

function createSnapSlider({ track, items, onActiveIndexChange }) {
  // Requires mobile CSS to make viewport overflow hidden and cards fixed width
  let activeIndex = 0;

  // Compute snap points so that active card is perfectly centered
  function getSnapPoints() {
    const viewport = track.parentElement;
    const vw = viewport.clientWidth;
    return items.map((item) => {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const viewportCenter = vw / 2;
      return viewportCenter - itemCenter; // translateX
    });
  }

  let snapPoints = [];
  let currentX = 0;
  let startX = 0;
  let dragStart = 0;
  let isDragging = false;
  let pointerId = null;

  function applyTranslate(x, animate = true) {
    currentX = x;
    track.style.transition = animate ? "transform 420ms cubic-bezier(0.2,0.8,0.2,1)" : "none";
    track.style.transform = `translate3d(${x}px,0,0)`;
  }

  function nearestIndex(x) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < snapPoints.length; i++) {
      const d = Math.abs(snapPoints[i] - x);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    return best;
  }

  function refresh() {
    snapPoints = getSnapPoints();
    applyTranslate(snapPoints[activeIndex] ?? 0, false);
  }

  function snapTo(index, animate = true) {
    index = Math.max(0, Math.min(items.length - 1, index));
    activeIndex = index;

    // IMPORTANT: update text immediately on snap (no delay)
    onActiveIndexChange?.(index);
    applyTranslate(snapPoints[index], animate);
  }

  function onDown(e) {
    // Only swipe in work view on mobile
    if (!state.isMobile || state.view !== "work") return;

    // Don't steal taps on nav
    if (e.target.closest(".header-right") || e.target.closest(".header-left")) return;

    isDragging = true;
    pointerId = e.pointerId;
    track.setPointerCapture(pointerId);

    track.style.transition = "none";
    dragStart = e.clientX;
    startX = currentX;
  }

  function onMove(e) {
    if (!isDragging || e.pointerId !== pointerId) return;
    const dx = e.clientX - dragStart;
    applyTranslate(startX + dx, false);
  }

  function onUp(e) {
    if (!isDragging || e.pointerId !== pointerId) return;
    isDragging = false;
    pointerId = null;

    const idx = nearestIndex(currentX);
    snapTo(idx, true);
  }

  const viewport = track.parentElement;
  viewport.style.touchAction = "pan-x";
  viewport.addEventListener("pointerdown", onDown);
  viewport.addEventListener("pointermove", onMove);
  viewport.addEventListener("pointerup", onUp);
  viewport.addEventListener("pointercancel", onUp);

  window.addEventListener("resize", refresh);

  refresh();

  return {
    snapTo,
    refresh,
    destroy() {
      viewport.removeEventListener("pointerdown", onDown);
      viewport.removeEventListener("pointermove", onMove);
      viewport.removeEventListener("pointerup", onUp);
      viewport.removeEventListener("pointercancel", onUp);
      window.removeEventListener("resize", refresh);
    }
  };
}

function destroyMobileSlider() {
  if (state.mobileSlider) {
    state.mobileSlider.destroy();
    state.mobileSlider = null;
  }
}

/* -----------------------------
   ARCHIVE: distribute + reveal
   (CSS must have pos-left/pos-mid/pos-right and is-visible transitions)
----------------------------- */
function buildArchive() {
  if (!archiveList) return;
  // If items already exist, don’t duplicate
  if (archiveList.dataset.built === "1") return;

  archiveList.dataset.built = "1";
  archiveList.innerHTML = "";

  archiveItems.forEach((it, i) => {
    const card = document.createElement("a");
    card.href = it.link || "#";
    card.className = "archiveItem";
    // deterministic placement
    const pos = (i % 3 === 0) ? "pos-left" : (i % 3 === 1) ? "pos-mid" : "pos-right";
    card.classList.add(pos);

    card.innerHTML = `
      <div class="archiveLabel">[${String(it.index).padStart(2,"0")}] ${it.title} — ${it.category} (${it.year})</div>
      <div class="archiveMedia">
        <img src="${it.imageSrc}" alt="${it.title}" />
      </div>
    `;
    archiveList.appendChild(card);
  });

  // Reveal on enter
  const items = $$(".archiveItem", archiveList);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.classList.add("is-visible");
    });
  }, { root: null, threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

/* -----------------------------
   RESPONSIVE MODE SETUP
----------------------------- */
function setupResponsiveMode() {
  const nowMobile = computeIsMobile();
  const changed = nowMobile !== state.isMobile;
  state.isMobile = nowMobile;

  if (state.isMobile) {
    // mobile: no scroll anywhere
    document.addEventListener("touchmove", preventMobileScroll, { passive: false });

    // Force work view to be one-viewport experience
    body.classList.add("is-mobile");

    // Slider init
    if (thumbStrip && thumbs.length) {
      // Ensure project ids are set
      thumbs.forEach((t, i) => {
        if (!t.dataset.projectId) t.dataset.projectId = projects[i]?.id || "";
      });

      // Setup slider and make it project-driven immediately
      destroyMobileSlider();
      state.mobileActiveIndex = 0;

      // Blur system on mobile uses the same classes
      thumbStrip.classList.add("is-hovering");

      // HUD
      updateMobileHUD(state.mobileActiveIndex);

      // Make slider
      state.mobileSlider = createSnapSlider({
        track: thumbStrip,
        items: thumbs,
        onActiveIndexChange: (index) => {
          state.mobileActiveIndex = index;
          updateMobileHUD(index);
          updateMobileActiveVisuals(index);

          const pid = projects[index]?.id;
          if (pid) applyProjectText(pid, true);
        }
      });

      // Snap to first and apply text immediately (matches your reference image behavior)
      state.mobileSlider.snapTo(0, false);
      updateMobileActiveVisuals(0);
      applyProjectText(projects[0].id, false);

      // Tap active card opens project
      thumbs.forEach((t, i) => {
        t.onclick = () => {
          if (i !== state.mobileActiveIndex) return; // only active opens
          openProject(t.dataset.projectId);
        };
      });
    }

  } else {
    // desktop restore defaults
    document.removeEventListener("touchmove", preventMobileScroll);
    body.classList.remove("is-mobile");

    // destroy slider (desktop uses hover)
    destroyMobileSlider();

    // restore click behavior for all cards (open project)
    thumbs.forEach((t) => {
      t.onclick = () => openProject(t.dataset.projectId);
    });

    // restore default text if not in project mode
    if (state.mode === "home") restoreDefaultText(false);
  }

  if (changed) {
    // Ensure view is applied properly
    showView(state.view);
  }
}

/* -----------------------------
   INIT
----------------------------- */
function init() {
  // Build archive once (safe on desktop & mobile)
  buildArchive();

  // Nav
  setupNav();

  // Desktop hover
  setupDesktopThumbHover();

  // Default text on load
  // Desktop: default hero + meta
  // Mobile: immediately show first card’s data (your screenshot behavior)
  setupResponsiveMode();

  // Start clock (desktop only updates)
  startClock();

  // Recompute on resize/orientation changes
  window.addEventListener("resize", () => {
    setupResponsiveMode();
  }, { passive: true });

  // Start on WORK by default
  showView("work");
}

// Run
document.addEventListener("DOMContentLoaded", init);


/* =========================================================
   NEW: PROJECT DETAIL VIEW (APPENDED ONLY — existing code untouched)
   - Adds dedicated #view-project page rendering
   - Keeps top nav accessible
   - Back + WORK click + ESC closes to WORK
========================================================= */

/* ---- Project detail DOM ---- */
const viewProject = $("#view-project") || $("[data-view='project']");

const projectTitleEl = $("#projectTitle");
const projectYearEl = $("#projectYear");
const projectServicesEl = $("#projectServices");
const projectLiveSiteEl = $("#projectLiveSite");
const projectLiveLabelEl = $("#projectLiveLabel");

const projectCarbonScoreEl = $("#projectCarbonScore");
const projectCarbonGradeEl = $("#projectCarbonGrade");
const projectCarbonCleanerEl = $("#projectCarbonCleaner");
const projectCarbonSourceEl = $("#projectCarbonSource");

const projectDescriptionEl = $("#projectDescription");
const projectImagesEl = $("#projectImages");

const projectBackBtn = $("[data-project-back]");

/* ---- Render from data model ---- */
function renderProjectDetail(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  // Title
  if (projectTitleEl) projectTitleEl.textContent = (p.title || "").toUpperCase();

  // Year
  if (projectYearEl) projectYearEl.textContent = p.year || "—";

  // Services (multi-line)
  if (projectServicesEl) {
    projectServicesEl.innerHTML = "";
    const list =
      Array.isArray(p.services) ? p.services :
      Array.isArray(p.servicesLines) ? p.servicesLines :
      [];
    list.forEach((s) => {
      const div = document.createElement("div");
      div.textContent = String(s || "").toUpperCase();
      projectServicesEl.appendChild(div);
    });
  }

  // Live site link
  if (projectLiveSiteEl) {
    const url = p.liveSiteUrl || p.link || "#";
    projectLiveSiteEl.href = url;
    projectLiveSiteEl.style.pointerEvents = (url && url !== "#") ? "auto" : "none";
  }
  if (projectLiveLabelEl) projectLiveLabelEl.textContent = p.liveSiteLabel || p.link || "—";

  // Carbon (optional)
  const c = p.carbon || null;
  const carbonBlock = $("#view-project .meta-block--carbon");
  const hasCarbon = !!(c && (c.score || c.grade || c.cleanerThan || c.sourceUrl));
  if (carbonBlock) carbonBlock.style.display = hasCarbon ? "" : "none";

  if (projectCarbonScoreEl) projectCarbonScoreEl.textContent = c?.score || "—";
  if (projectCarbonGradeEl) projectCarbonGradeEl.textContent = c?.grade || "—";
  if (projectCarbonCleanerEl) projectCarbonCleanerEl.textContent = c?.cleanerThan || "—";
  if (projectCarbonSourceEl) {
    const su = c?.sourceUrl || "#";
    projectCarbonSourceEl.href = su;
    projectCarbonSourceEl.style.pointerEvents = (su && su !== "#") ? "auto" : "none";
  }

  // Description
  if (projectDescriptionEl) projectDescriptionEl.textContent = p.description || "";

  // Images
  if (projectImagesEl) {
    projectImagesEl.innerHTML = "";
    const imgs =
      Array.isArray(p.images) ? p.images :
      []; // keep empty if not provided

 imgs.forEach((item, i) => {
  const wrap = document.createElement("div");
  wrap.className = "project-image" + (i === 0 ? " is-hero" : "");

  if (typeof item === "string") {
    const img = document.createElement("img");
    img.src = item;
    img.loading = i === 0 ? "eager" : "lazy";
    wrap.appendChild(img);

  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    if (item.poster) video.poster = item.poster;

    wrap.appendChild(video);
  }

  projectImagesEl.appendChild(wrap);
});

  }

  // Reset right scroll to top when opened
  const rightPanel = $("#view-project .project-right");
  if (rightPanel) rightPanel.scrollTop = 0;
}

/* ---- Override ONLY by redefining (no edits to existing lines above) ---- */
function showView(viewName) {
  state.view = viewName;

  const views = document.querySelectorAll(".view[data-view]");
  views.forEach((v) => {
    const isActive = v.dataset.view === viewName;

    // ✅ Tvoja prava klasa iz HTML-a:
    v.classList.toggle("view--active", isActive);

    // ✅ sigurni display (da nema "nevidljiv ali klikabilan")
    v.style.display = isActive ? "" : "none";
    v.style.pointerEvents = isActive ? "auto" : "none";
    v.setAttribute("aria-hidden", isActive ? "false" : "true");
  });

  // Project view should keep WORK highlighted
  if (viewName === "project") setActiveNav("work");
  else setActiveNav(viewName);

  // Render on entry (if project open)
  if (viewName === "project") {
    if (state.activeProjectId) renderProjectDetail(state.activeProjectId);
  }

  // kad se vrati na WORK, vrati text state kako si već zamislio
  if (viewName === "work") {
    if (state.isMobile) {
      const pid = projects[state.mobileActiveIndex]?.id;
      if (pid) applyProjectText(pid, true);
    } else {
      if (state.mode === "project" && state.activeProjectId) applyProjectText(state.activeProjectId, true);
      else restoreDefaultText(true);
    }
  }

  // ✅ kad nisi na WORK, ugasi hover stanje da clock i text ne glitche
  if (viewName !== "work") {
    state.hoverActive = false;
    state.hoveredProjectId = null;
  }
}

function openProject(projectId) {
  state.mode = "project";
  state.activeProjectId = projectId;

  // Fill project page content (new dedicated view)
  renderProjectDetail(projectId);

  // Switch to dedicated project view
  showView("project");

  // Keep active thumb highlighted
  thumbs.forEach(t => t.classList.toggle("is-active", t.dataset.projectId === projectId));
}

function closeProject() {
  state.mode = "home";
  state.activeProjectId = null;
  thumbs.forEach(t => t.classList.remove("is-active"));

  // Return to WORK (homepage)
  showView("work");

  // Restore text state
  if (state.isMobile) {
    const pid = projects[state.mobileActiveIndex]?.id;
    if (pid) applyProjectText(pid, true);
  } else {
    restoreDefaultText(true);
  }
}

/* ---- Back + ESC + WORK behavior ---- */
function setupProjectDetailControls() {
  if (projectBackBtn) {
    projectBackBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeProject();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.view === "project") {
      closeProject();
    }
  });

  const workBtn = document.querySelector(".nav-item[data-nav='work']");
  if (workBtn) {
    workBtn.addEventListener("click", () => {
      if (state.view === "project") closeProject();
    });
  }
}

document.addEventListener("DOMContentLoaded", setupProjectDetailControls);

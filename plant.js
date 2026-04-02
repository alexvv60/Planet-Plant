// ── DETAIL PAGE SCRIPT ────────────────────────────────
// Reads plant data from plants-data.js and builds
// the full detail page for one plant.
// You don't need to edit this file.
// ─────────────────────────────────────────────────────

const container = document.getElementById("detail-container");

// Read the ?id= number from the URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// If the ID is invalid, show an error
if (isNaN(id) || !plants[id]) {
    container.innerHTML = `
        <div class="empty-state">
            <p>Plant not found. <a href="index.html">Go back home.</a></p>
        </div>
    `;
} else {
    const p = plants[id];

    container.innerHTML = `
        <div class="detail-page">

            <a href="index.html" class="back-button">← Back to all plants</a>

            <h2>${p.name}</h2>
            ${p.scientificName ? `<p class="scientific-name">${p.scientificName}</p>` : ""}

            ${photoSection(p)}
            ${identitySection(p)}
            ${setupSection(p)}
            ${wishlistSection(p)}
            ${growthSection(p)}
            ${wateringSection(p)}
            ${fertilizerSection(p)}
            ${repottingSection(p)}
            ${pestSection(p)}
            ${environmentSection(p)}
            ${diagnosticSection(p)}

        </div>
    `;
}


// ── SECTION BUILDERS ──────────────────────────────────
// Each function below builds one section of the page.
// ─────────────────────────────────────────────────────

function photoSection(p) {
    if (!p.photos || p.photos.length === 0) return "";
    const imgs = p.photos.map(src =>
        `<div class="gallery-photo">
            <img src="${src}" alt="${p.name}">
        </div>`
    ).join("");
    return section("Photos", `<div class="gallery-grid">${imgs}</div>`);
}

function identitySection(p) {
    return section("Profile", table([
        ["Species",         p.species],
        ["Variegation",     p.variegation],
        ["Acquired",        p.acquired],
        ["Acquired from",   p.acquiredFrom]
    ]));
}

function setupSection(p) {
    return section("Setup & Light", table([
        ["Pot size",        p.potSize],
        ["Pot type",        p.potType],
        ["Soil mix",        p.soilMix],
        ["Drainage",        p.drainage],
        ["Location",        p.location],
        ["Light type",      p.lightType],
        ["Light intensity", p.lightIntensity],
        ["Light hours/day", p.lightHours],
        ["Distance from light", p.lightDistance]
    ]));
}

function wishlistSection(p) {
    return section("Wishlist & Plans", table([
        ["Propagation goals",   p.propagationGoals],
        ["Planned repot",       p.plannedRepot],
        ["Desired shape/size",  p.desiredShape]
    ]));
}

function growthSection(p) {
    if (!p.growthLog || p.growthLog.length === 0) return "";
    const rows = p.growthLog.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Height", e.height)}
            ${logRow("Leaf count", e.leafCount)}
            ${logRow("New growth", e.newGrowth)}
            ${logRow("Health", e.healthStatus)}
            ${logRow("Color", e.color)}
            ${logRow("Texture", e.texture)}
            ${logRow("Notes", e.notes)}
        </div>
    `).join("");
    return section("Growth Log", rows);
}

function wateringSection(p) {
    if (!p.wateringLog || p.wateringLog.length === 0) return "";
    const rows = p.wateringLog.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Amount", e.amount)}
            ${logRow("Soil moisture before", e.soilMoisture)}
            ${logRow("Notes", e.notes)}
        </div>
    `).join("");
    return section("Watering Log", rows);
}

function fertilizerSection(p) {
    if (!p.fertilizerLog || p.fertilizerLog.length === 0) return "";
    const rows = p.fertilizerLog.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Type", e.type)}
            ${logRow("Dilution", e.dilution)}
            ${logRow("Notes", e.notes)}
        </div>
    `).join("");
    return section("Fertilizer Log", rows);
}

function repottingSection(p) {
    if (!p.repottingHistory || p.repottingHistory.length === 0) return "";
    const rows = p.repottingHistory.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Reason", e.reason)}
            ${logRow("New pot size", e.newPotSize)}
            ${logRow("New soil mix", e.newSoilMix)}
            ${logRow("Notes", e.notes)}
        </div>
    `).join("");
    return section("Repotting History", rows);
}

function pestSection(p) {
    if (!p.pestLog || p.pestLog.length === 0 || !p.pestLog[0].date) return "";
    const rows = p.pestLog.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Symptoms", e.symptoms)}
            ${logRow("Treatment", e.treatment)}
            ${logRow("Follow-up", e.followUp)}
        </div>
    `).join("");
    return section("Pest & Disease Log", rows);
}

function environmentSection(p) {
    if (!p.environmentLog || p.environmentLog.length === 0) return "";
    const rows = p.environmentLog.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Change", e.change)}
            ${logRow("Reason", e.reason)}
            ${logRow("Notes", e.notes)}
        </div>
    `).join("");
    return section("Environmental Changes", rows);
}

function diagnosticSection(p) {
    if (!p.diagnosticNotes || p.diagnosticNotes.length === 0) return "";
    const rows = p.diagnosticNotes.map(e => `
        <div class="log-entry">
            <div class="log-date">${e.date}</div>
            ${logRow("Observation", e.observation)}
            ${logRow("Hypothesis", e.hypothesis)}
            ${logRow("Correction", e.correction)}
            ${logRow("Outcome", e.outcome)}
        </div>
    `).join("");
    return section("Diagnostic Notes", rows);
}


// ── HELPERS ───────────────────────────────────────────

// Wraps content in a labeled section box
function section(title, content) {
    return `
        <div class="detail-section">
            <h3>${title}</h3>
            <div class="section-body">${content}</div>
        </div>
    `;
}

// Builds a simple two-column info table, skips blank rows
function table(rows) {
    const filtered = rows.filter(([, val]) => val);
    if (filtered.length === 0) return "<p class='empty-note'>Nothing recorded yet.</p>";
    return `<table class="info-table">` +
        filtered.map(([label, val]) =>
            `<tr><td class="info-label">${label}</td><td>${val}</td></tr>`
        ).join("") +
    `</table>`;
}

// Builds a single row inside a log entry, skips if blank
function logRow(label, val) {
    if (!val) return "";
    return `<div class="log-row"><span class="log-label">${label}:</span> ${val}</div>`;
}

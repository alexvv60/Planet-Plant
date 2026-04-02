// ── DETAIL PAGE SCRIPT ────────────────────────────────
// Reads the plant ID from the URL, finds that plant in
// plants-data.js, and builds the detail page.
// You don't need to edit this file.
// ─────────────────────────────────────────────────────

const container = document.getElementById("detail-container");

// Read the ?id= number from the URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// If the ID is invalid or plant doesn't exist, show an error
if (isNaN(id) || !plants[id]) {
    container.innerHTML = `
        <div class="empty-state">
            <p>Plant not found. <a href="index.html">Go back home.</a></p>
        </div>
    `;
} else {
    const plant = plants[id];

    // Build the photo gallery
    // Shows all photos listed in the plant's photos array
    const galleryHTML = plant.photos && plant.photos.length > 0
        ? plant.photos.map(src => `
            <div class="gallery-photo">
                <img src="${src}" alt="${plant.name}">
            </div>
          `).join("")
        : `<div class="img-placeholder large">🌱<span>No photos yet</span></div>`;

    // Build the full detail page
    container.innerHTML = `
        <div class="detail-page">

            <!-- Back button -->
            <a href="index.html" class="back-button">← Back to all plants</a>

            <!-- Plant name -->
            <h2>${plant.name}</h2>

            <!-- Notes section -->
            <div class="detail-notes">
                <h3>Notes</h3>
                <p>${plant.notes || "No notes yet."}</p>
            </div>

            <!-- Photo gallery -->
            <div class="detail-gallery">
                <h3>Photos</h3>
                <div class="gallery-grid">
                    ${galleryHTML}
                </div>
            </div>

        </div>
    `;
}

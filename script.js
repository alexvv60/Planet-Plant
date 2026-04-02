// ── MAIN PAGE SCRIPT ──────────────────────────────────
// Reads the plants list from plants-data.js and builds
// a card for each plant on the main grid.
// Clicking a card goes to that plant's detail page.
// You don't need to edit this file.
// ─────────────────────────────────────────────────────

const container = document.getElementById("plant-container");

// If the plants list is empty, show a message
if (plants.length === 0) {
    container.innerHTML = `
        <div class="empty-state">
            <p>No plants yet — add your first one in plants-data.js!</p>
        </div>
    `;
}

// Loop through each plant and build its card
plants.forEach((plant, index) => {
    const card = document.createElement("div");
    card.className = "plant-card";

    // Use the thumb photo if provided, otherwise show a placeholder
    const imageHTML = plant.thumb
       ? `<div class="img-wrap"><? `<div class="img-wrap"><img src="${plant.thumb}" alt="${plant.name}" onerror="this.parentElement.outerHTML = getPlaceholder()"></div>`
        : getPlaceholder();

    card.innerHTML = `
        ${imageHTML}
        <h3>${plant.name}</h3>
        <button>View Plant</button>
    `;

    // Clicking anywhere on the card goes to the detail page
    // The index is passed in the URL so plant.js knows which plant to show
    card.addEventListener("click", () => {
        window.location.href = `plant.html?id=${index}`;
    });

    container.appendChild(card);
});

// Returns a placeholder box when a photo is missing or broken
function getPlaceholder() {
    return `
        <div class="img-placeholder">
            🌱
            <span>No photo yet</span>
        </div>
    `;
}

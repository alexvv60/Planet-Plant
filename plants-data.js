// ══════════════════════════════════════════════════════
// YOUR PLANT DATA
// ══════════════════════════════════════════════════════
//
// Each plant is one big block between { and }.
// Blocks are separated by commas.
// The LAST block has no comma after it.
//
// You only need to fill in the sections you care about.
// Leave anything blank like this: ""
// Leave any list empty like this: []
//
// ══════════════════════════════════════════════════════

const plants = [

    // ── PLANT 1 ───────────────────────────────────────
    // Copy this entire block to add a new plant
    {

        // ── IDENTITY ──────────────────────────────────
        name: "Monstera",                   // your nickname for the plant
        scientificName: "Monstera deliciosa",
        species: "",                        // cultivar or variety if known
        variegation: "",                    // e.g. "Thai Constellation", "Albo", or leave blank
        acquired: "2024-01-15",             // date you got it (YYYY-MM-DD)
        acquiredFrom: "Local nursery",      // where you bought it

        // ── PHOTOS ────────────────────────────────────
        // thumb: the photo shown on the main grid card
        // photos: all photos shown on the detail page
        // Add as many photos as you want inside the [ ]
        thumb: "images/monstera1.jpg",
        photos: [
            "images/monstera1.jpg",
            "images/monstera2.jpg"
        ],

        // ── PHYSICAL SETUP ────────────────────────────
        potSize: "10 inch",                 // e.g. "6 inch", "10 inch"
        potType: "Terracotta",              // Plastic, Terracotta, Ceramic
        soilMix: "Perlite, bark, potting mix",
        drainage: "Good",                   // Good, Poor, Needs work
        location: "Living room, 3ft from south window",

        // ── LIGHT ─────────────────────────────────────
        lightType: "Natural",               // Natural, Grow light, Both
        lightIntensity: "Medium",           // Low, Medium, High
        lightHours: "6",                    // hours of light per day
        lightDistance: "3 feet",            // distance from light source

        // ── WISHLIST / FUTURE PLANS ───────────────────
        propagationGoals: "Take stem cutting in spring",
        plannedRepot: "March 2025",
        desiredShape: "Tall, single stem with aerial roots",

        // ── WATERING LOG ──────────────────────────────
        // Add a new entry each time you water.
        // Newest entry at the TOP of the list.
        wateringLog: [
            {
                date: "2024-03-10",
                amount: "Moderate",         // Light, Moderate, Heavy
                soilMoisture: "Dry",        // Dry, Slightly dry, Moist
                notes: "Soil dried faster than usual this week"
            },
            {
                date: "2024-02-25",
                amount: "Moderate",
                soilMoisture: "Slightly dry",
                notes: ""
            }
            // Paste new watering entries above this line
        ],

        // ── FERTILIZER LOG ────────────────────────────
        fertilizerLog: [
            {
                date: "2024-03-01",
                type: "Balanced liquid 20-20-20",
                dilution: "Half strength",
                notes: "No visible reaction yet"
            }
            // Paste new fertilizer entries above this line
        ],

        // ── REPOTTING HISTORY ─────────────────────────
        repottingHistory: [
            {
                date: "2024-01-20",
                reason: "Rootbound",
                newPotSize: "10 inch",
                newSoilMix: "Perlite, bark, potting mix",
                notes: "Roots were circling the bottom"
            }
            // Paste new repotting entries above this line
        ],

        // ── PEST & DISEASE LOG ────────────────────────
        pestLog: [
            {
                date: "",
                symptoms: "",
                treatment: "",
                followUp: ""
            }
            // Paste new pest entries above this line
        ],

        // ── ENVIRONMENTAL CHANGES ─────────────────────
        environmentLog: [
            {
                date: "2024-02-01",
                change: "Moved 1ft closer to window",
                reason: "Growth was slow",
                notes: "New leaf appeared 3 weeks later"
            }
            // Paste new environment entries above this line
        ],

        // ── GROWTH TRACKING ───────────────────────────
        growthLog: [
            {
                date: "2024-03-01",
                height: "24 inches",
                leafCount: "8",
                newGrowth: "1 new leaf unfurling",
                healthStatus: "Good",       // Great, Good, Fair, Poor
                color: "Deep green",
                texture: "Firm and glossy",
                notes: "Fenestrations appearing on new leaves"
            }
            // Paste new growth entries above this line
        ],

        // ── DIAGNOSTIC NOTES ──────────────────────────
        // A running log of observations, guesses, and what you learned
        diagnosticNotes: [
            {
                date: "2024-02-10",
                observation: "Leaves yellowed slightly on the lower stem",
                hypothesis: "Possibly overwatered in January",
                correction: "Reduced watering frequency",
                outcome: "Yellowing stopped after 2 weeks"
            }
            // Paste new diagnostic entries above this line
        ]

    }
    // ── END OF PLANT 1 ────────────────────────────────
    // To add Plant 2, paste a comma after the } above,
    // then paste a new copy of the entire block below it.

];

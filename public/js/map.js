// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Initial map position and zoom level

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom marker icon settings
const customIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [23, 56],
    popupAnchor: [0, -56]
});

let marker; // Variable to hold the map marker

// Function to update map with new location
function updateMap(lat, lng) {
    if (!lat || !lng) {
        return;
    }

    if (marker) {
        map.removeLayer(marker); // Remove existing marker if present
    }

    // Add new marker and set map view to the new coordinates
    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    map.setView([lat, lng], 13); // Zoom in to the new location
}

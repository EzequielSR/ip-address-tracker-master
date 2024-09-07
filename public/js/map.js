
// Inicializa o mapa
const map = L.map('map').setView([0, 0], 2); // Posição inicial do mapa

// Adiciona o layer de tiles ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

// Função para atualizar o mapa com a nova localização
function updateMap(lat, lng) {
    if (!lat || !lng) {
        return;
    }

    if(marker){
        map.removeLayer(marker)
    }
    marker = L.marker([lat,lng]).addTo(map)
    map.setView([lat, lng], 13);
}

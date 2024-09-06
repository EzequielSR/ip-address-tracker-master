var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: '/public/images/icon-location.svg',
    iconSize: [38, 90],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

L.marker([51.5, -0.09], {icon: myIcon}).addTo(map);
var locations = [
  ["Skórzewo - parking Szkoła Podstawowa nr 1", 52.39223, 16.793983],
  ["Skórzewo - parking Galeria Malwowa", 52.396693, 16.802882],
  ["Plewiska - parking stacja ORLEN", 52.366856, 16.80976],
  ["Przeźmierowo - parking stacja Orlen", 52.419812, 16.78941],
  ["Batorowo - parking stacja BP Bukowska", 52.413252, 16.764589],
  ["Ławica - parking Netto", 52.4121785, 16.8325941],
  ["Ławica - parking siłownia Atlantis", 52.407597, 16.819891],
  ["Junikowo - parking przystanek Cmentarna", 52.385418, 16.838946],
  ["Ogrody - parking kościoła ul. Nowina", 52.416835, 16.878214],
  ["Os.Kwiatowe - parking Netto", 52.378642, 16.823928],
  ["Os.Kwiatowe - parking kościół", 52.383611, 16.820688],
  [
    "Biuro i Sala Wykładowa AUTO-S ul.Jesienna 18, Skórzewo",
    52.400547,
    16.784312,
  ],
  ["Dąbrówka - parking stacja Orlen", 52.381938, 16.744593],
  ["Poznań - parking stacja Orlen ul. Wichrowa", 52.431087, 16.808318],
  ["Dąbrowa - parking Chata Polska", 52.396823, 16.757426],
];

var osm = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var map = L.map("map", {
  sleep: true,
  sleepTime: 750,
  wakeTime: 750,
  sleepNote: true,
  sleepNoteStyle: { color: "red" },
  hoverToWake: false,
  sleepOpacity: 0.7,
}).setView([52.402651, 16.826466], 12);

L.tileLayer(osm, {
  attribution: "&copy; OpenStreetMap Contributors",
  maxZoom: 18,
  updateWhenIdle: false, // Load tiles on demand
}).addTo(map);

// Function to add markers to the map
function addMarkers() {
  for (var i = 0; i < locations.length; i++) {
    L.marker([locations[i][1], locations[i][2]])
      .bindPopup(locations[i][0])
      .addTo(map);
  }
}

// Load markers when the map is clicked (example, you can change the event)
map.on("click", function () {
  addMarkers();
});

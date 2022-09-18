var earth;
function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 15
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
earth.setView([60.1781383,24.920187,17]); 
}
function showCoords() {
    alert(earth.getCenter());
}

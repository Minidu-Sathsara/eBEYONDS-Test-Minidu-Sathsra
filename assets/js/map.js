  document.addEventListener("DOMContentLoaded", function () {
   
    var map = L.map("leafletMap", {
      center: [40.326505, -3.777218],
      zoom: 15,
      scrollWheelZoom: false 
    });

    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    var marker = L.marker([40.326505, -3.777218]).addTo(map);
    marker.bindPopup("<b>Valdepelayo</b>").openPopup();
  });
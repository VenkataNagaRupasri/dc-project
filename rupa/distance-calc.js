// distance-calc.js

document.addEventListener('DOMContentLoaded', () => {
  const eventLat = 39.4601;
  const eventLon = -84.0300;

  function update() {
    const cam = document.querySelector('#userCam');
    const gps = cam.components['gps-new-camera'];

    if (!gps || !gps.currentCoords) return;

    const userLat = gps.currentCoords.latitude;
    const userLon = gps.currentCoords.longitude;

    const dist = computeDistanceKm(userLat, userLon, eventLat, eventLon);

    const display = document.getElementById('rangeDisplay');
    const floatText = document.getElementById('floatingDistance');

    if (display) display.setAttribute('value', ` Distance: ${dist} km`);
    if (floatText) floatText.setAttribute('value', `${dist} km away`);
  }

  setInterval(update, 1500);
});



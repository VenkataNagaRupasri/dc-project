// arrow-pointer.js

AFRAME.registerComponent('arrow-control', {
  tick: function () {
    const camera = document.querySelector('#userCam');
    const eventEl = document.querySelector('#eventTarget');

    if (!camera || !eventEl) return;

    const camPos = new THREE.Vector3();
    const evtPos = new THREE.Vector3();

    camera.object3D.getWorldPosition(camPos);
    eventEl.object3D.getWorldPosition(evtPos);

    const dx = evtPos.x - camPos.x;
    const dz = evtPos.z - camPos.z;
    const angle = Math.atan2(dx, dz) * (180 / Math.PI);

    this.el.setAttribute('rotation', { x: 0, y: angle, z: 0 });
  }
});

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HIRO Marker AR with 3D Animation</title>

    <!-- A-Frame & AR.js -->
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://rawcdn.githack.com/AR-js-org/AR.js/3.4.5/aframe/build/aframe-ar.js"></script>

    <!-- Optional glow & animation -->
    <script src="https://cdn.jsdelivr.net/gh/ngokevin/kframe@master/components/animation/animation.js"></script>
  </head>

  <body style="margin: 0; overflow: hidden">
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="antialias: true; alpha: true"
    >
      <!-- AR Marker -->
      <a-marker type="pattern" url="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/data/patt.hiro">

        <!-- 3D Model Box -->
        <a-box
          position="0 0.5 0"
          rotation="0 45 45"
          color="#4CC3D9"
          scale="0.5 0.5 0.5"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"
          material="shader: standard; metalness: 1; roughness: 0; emissive: #00ffff"
        ></a-box>

        <!-- Text above -->
        <a-text
          value="Welcome to Wright State Event!"
          position="0 1.5 0"
          align="center"
          color="#FFD700"
          width="3"
        ></a-text>
      </a-marker>

      <!-- AR Camera -->
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>

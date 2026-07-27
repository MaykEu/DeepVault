// exercises-3d.js — Three.js 3D coordinate graph renderer
// Exposes window.render3DScene() for exercises-dashboard.js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

window._threeCleanup = null;  // stores dispose function

window.render3DScene = function(containerEl, points, arrows) {
  // Clean up previous scene
  if (window._threeCleanup) {
    window._threeCleanup();
    window._threeCleanup = null;
  }
  
  // Clear container
  containerEl.innerHTML = '';
  
  var W = containerEl.clientWidth || 520;
  var H = 380;
  
  // ── Scene, Camera, Renderer ──────────────────────────────────
  var scene = new THREE.Scene();
  scene.background = null; // transparent — inherits page background
  
  var camera = new THREE.PerspectiveCamera(45, W / H, 0.5, 200);
  camera.position.set(22, 14, 22);
  camera.lookAt(0, 0, 0);
  
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerEl.appendChild(renderer.domElement);
  
  // ── Orbit Controls (rotate, zoom, pan) ──────────────────────
  var controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 8;
  controls.maxDistance = 60;
  controls.maxPolarAngle = Math.PI * 0.8;
  controls.update();
  
  // ── Lighting ─────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  var dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.position.set(10, 20, 10);
  scene.add(dirLight);
  
  // ── AxesHelper (X=red, Y=green, Z=blue) — scale 14 ──────────
  var axes = new THREE.AxesHelper(14);
  scene.add(axes);
  
  // ── GridHelper (XZ ground plane) ─────────────────────────────
  var grid = new THREE.GridHelper(28, 14, 0x444444, 0x222222);
  scene.add(grid);
  
  // ── Axis tick labels (sprites) ───────────────────────────────
  function makeLabel(text, position, color) {
    var canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 32;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color || '#ffffff';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 32, 16);
    
    var texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    var material = new THREE.SpriteMaterial({ map: texture, depthTest: false, depthWrite: false });
    var sprite = new THREE.Sprite(material);
    sprite.position.copy(position);
    sprite.scale.set(2, 1, 1);
    return sprite;
  }
  
  // Tick labels on axes
  for (var t = 2; t <= 14; t += 2) {
    scene.add(makeLabel(String(t), new THREE.Vector3(t + 0.5, -0.3, 0), '#ff4444'));
    scene.add(makeLabel(String(t), new THREE.Vector3(-0.5, t + 0.3, 0), '#44ff44'));
    scene.add(makeLabel(String(t), new THREE.Vector3(-0.5, 0, t + 0.3), '#4488ff'));
  }
  
  // ── Point spheres ────────────────────────────────────────────
  var pointMeshes = [];
  var sphereGeo = new THREE.SphereGeometry(0.3, 16, 16);
  
  for (var pi = 0; pi < points.length; pi++) {
    var pt = points[pi];
    var isB = pi === 1;
    var color = isB ? 0xd2991d : 0xffffff;
    
    var mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.4, metalness: 0.1 });
    var sphere = new THREE.Mesh(sphereGeo, mat);
    sphere.position.set(pt.x, pt.z, pt.y); // Three.js: X=right, Y=up, Z=forward — our Z→Y
    scene.add(sphere);
    pointMeshes.push(sphere);
    
    // Drop line to ground (if Z ≠ 0)
    if (Math.abs(pt.z) > 0.1) {
      var lineGeo = new THREE.BufferGeometry();
      var lineVerts = new Float32Array([
        pt.x, pt.z, pt.y,
        pt.x, 0, pt.y
      ]);
      lineGeo.setAttribute('position', new THREE.BufferAttribute(lineVerts, 3));
      var lineMat = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.4 });
      scene.add(new THREE.Line(lineGeo, lineMat));
      
      // Small dot on ground
      var dotGeo = new THREE.SphereGeometry(0.12, 8, 8);
      var dotMat = new THREE.MeshBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.4 });
      var dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(pt.x, 0, pt.y);
      scene.add(dot);
    }
    
    // Label sprite
    if (pt.label) {
      scene.add(makeLabel(pt.label, new THREE.Vector3(pt.x + 0.6, pt.z + 0.4, pt.y), isB ? '#d2991d' : '#ffffff'));
    }
    
    // Coordinate annotation
    var coordText = '(' + pt.x.toFixed(0) + ', ' + pt.y.toFixed(0) + ', ' + pt.z.toFixed(0) + ')';
    var coordLabel = makeLabel(coordText, new THREE.Vector3(pt.x + 0.6, pt.z - 0.5, pt.y), '#999999');
    coordLabel.scale.set(3, 1, 1);
    scene.add(coordLabel);
  }
  
  // ── Arrows between points ────────────────────────────────────
  for (var ai = 0; ai < arrows.length; ai++) {
    var arr = arrows[ai];
    var from = points[arr.from];
    var to = points[arr.to];
    if (!from || !to) continue;
    
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var dz = to.z - from.z;
    var len = Math.sqrt(dx*dx + dy*dy + dz*dz);
    if (len < 0.01) continue;
    
    // Direction
    var ux = dx / len, uy = dy / len, uz = dz / len;
    
    // Arrow shaft (thin cylinder)
    var shaftGeo = new THREE.CylinderGeometry(0.08, 0.08, len - 0.8, 8);
    var shaftMat = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
    var shaft = new THREE.Mesh(shaftGeo, shaftMat);
    
    // Position shaft at midpoint between from and to
    shaft.position.set(
      from.x + dx * 0.5,
      from.z + dz * 0.5,
      from.y + dy * 0.5
    );
    
    // Orient shaft along the direction
    var shaftQuat = new THREE.Quaternion();
    shaftQuat.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(ux, uz, uy) // Three.js: our Z→Y
    );
    shaft.setRotationFromQuaternion(shaftQuat);
    scene.add(shaft);
    
    // Arrowhead (cone)
    var headGeo = new THREE.ConeGeometry(0.2, 0.8, 8);
    var headMat = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
    var head = new THREE.Mesh(headGeo, headMat);
    head.position.set(to.x - ux * 0.5, to.z - uz * 0.5, to.y - uy * 0.5);
    head.setRotationFromQuaternion(shaftQuat);
    scene.add(head);
    
    // Arrow label
    if (arr.label) {
      var midX = from.x + dx * 0.5 + ux * 0.8;
      var midY = from.y + dy * 0.5 + uy * 0.8;
      var midZ = from.z + dz * 0.5 + uz * 0.8;
      scene.add(makeLabel(arr.label, new THREE.Vector3(midX, midZ + 0.6, midY), '#d2991d'));
    }
  }
  
  // ── Render loop ──────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
  // ── Cleanup function ─────────────────────────────────────────
  window._threeCleanup = function() {
    // Dispose everything
    scene.traverse(function(obj) {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(function(m) { m.dispose(); });
        } else {
          obj.material.dispose();
        }
      }
    });
    renderer.dispose();
    controls.dispose();
    if (containerEl.contains(renderer.domElement)) {
      containerEl.removeChild(renderer.domElement);
    }
  };
};

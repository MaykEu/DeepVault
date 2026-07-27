// exercises-3d.js — Three.js 3D coordinate graph renderer (UMD build)
// Uses global THREE and THREE.OrbitControls (loaded via CDN)
// Exposes window.render3DScene() for exercises-dashboard.js

window._threeCleanup = null;

window.render3DScene = function(containerEl, points, arrows) {
  // Clean up previous scene
  if (window._threeCleanup) {
    try { window._threeCleanup(); } catch(e) {}
    window._threeCleanup = null;
  }
  
  containerEl.innerHTML = '';
  
  var W = Math.max(containerEl.clientWidth || 520, 520);
  var H = 420;
  
  // ── Scene, Camera, Renderer ──────────────────────────────────
  var scene = new THREE.Scene();
  
  var camera = new THREE.PerspectiveCamera(45, W / H, 0.3, 200);
  camera.position.set(20, 16, 20);
  camera.lookAt(0, 0, 0);
  
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.margin = '0 auto';
  containerEl.appendChild(renderer.domElement);
  
  // ── Orbit Controls ───────────────────────────────────────────
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.minDistance = 5;
  controls.maxDistance = 50;
  controls.maxPolarAngle = Math.PI * 0.78;
  controls.update();
  
  // ── Lighting ─────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  var dLight = new THREE.DirectionalLight(0xffffff, 0.4);
  dLight.position.set(10, 20, 10);
  scene.add(dLight);
  
  // ── AxesHelper (X=red, Y=green, Z=blue) ─────────────────────
  var axes = new THREE.AxesHelper(15);
  scene.add(axes);
  
  // ── GridHelper (XZ ground plane, 30x30 with 15 divisions) ────
  var grid = new THREE.GridHelper(30, 15, 0x444444, 0x1a1a1a);
  scene.add(grid);
  
  // ── Label sprites ────────────────────────────────────────────
  function makeLabel(text, pos, color, scaleX) {
    var canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 64;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color || '#ffffff';
    ctx.font = 'bold 32px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 64, 32);
    
    var tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    var mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, depthWrite: false, transparent: true });
    var sprite = new THREE.Sprite(mat);
    sprite.position.copy(pos);
    sprite.scale.set(scaleX || 2.5, 1.25, 1);
    return sprite;
  }
  
  // Tick labels at 2, 4, 6, 8, 10, 12, 14 along each positive axis
  for (var t = 2; t <= 14; t += 2) {
    scene.add(makeLabel(String(t), new THREE.Vector3(t + 0.5, -0.3, 0), '#ff5555', 1.8));
    scene.add(makeLabel(String(t), new THREE.Vector3(-0.4, t + 0.3, 0), '#55ff55', 1.8));
    scene.add(makeLabel(String(t), new THREE.Vector3(-0.4, 0, t + 0.3), '#5588ff', 1.8));
  }
  
  // ── Point spheres ────────────────────────────────────────────
  var sphereGeo = new THREE.SphereGeometry(0.28, 20, 20);
  
  for (var pi = 0; pi < points.length; pi++) {
    var pt = points[pi];
    var isB = pi === 1;
    var pColor = isB ? 0xd2991d : 0xffffff;
    
    var mat = new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.35, metalness: 0.15 });
    var sphere = new THREE.Mesh(sphereGeo, mat);
    sphere.position.set(pt.x, pt.z, pt.y);
    scene.add(sphere);
    
    // Drop line to ground plane
    if (Math.abs(pt.z) > 0.05) {
      var lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(
        new Float32Array([pt.x, pt.z, pt.y, pt.x, 0, pt.y]), 3));
      var lineMat = new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.35 });
      scene.add(new THREE.Line(lineGeo, lineMat));
      
      var dotGeo = new THREE.SphereGeometry(0.1, 6, 6);
      var dotMat = new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.35 });
      var dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(pt.x, 0, pt.y);
      scene.add(dot);
    }
    
    // Point label
    if (pt.label) {
      scene.add(makeLabel(pt.label,
        new THREE.Vector3(pt.x + 0.6, pt.z + 0.5, pt.y),
        isB ? '#d2991d' : '#ffffff', 2.0));
    }
    
    // Coordinate annotation
    var coord = '(' + pt.x.toFixed(0) + ', ' + pt.y.toFixed(0) + ', ' + pt.z.toFixed(0) + ')';
    scene.add(makeLabel(coord,
      new THREE.Vector3(pt.x + 0.6, pt.z - 0.6, pt.y),
      '#777777', 3.5));
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
    if (len < 0.02) continue;
    
    var ux = dx / len, uy = dy / len, uz = dz / len;
    
    // Shaft (cylinder)
    var shaftLen = len - 0.7;
    if (shaftLen > 0.05) {
      var sGeo = new THREE.CylinderGeometry(0.07, 0.07, shaftLen, 8);
      var sMat = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
      var shaft = new THREE.Mesh(sGeo, sMat);
      shaft.position.set(from.x + dx * 0.5, from.z + dz * 0.5, from.y + dy * 0.5);
      var quat = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(ux, uz, uy));
      shaft.setRotationFromQuaternion(quat);
      scene.add(shaft);
    }
    
    // Arrowhead (cone)
    var hGeo = new THREE.ConeGeometry(0.18, 0.7, 8);
    var hMat = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
    var head = new THREE.Mesh(hGeo, hMat);
    head.position.set(to.x - ux * 0.35, to.z - uz * 0.35, to.y - uy * 0.35);
    head.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(ux, uz, uy)));
    scene.add(head);
    
    if (arr.label) {
      scene.add(makeLabel(arr.label,
        new THREE.Vector3(from.x + dx * 0.5, from.z + dz * 0.5 + 0.7, from.y + dy * 0.5),
        '#d2991d', 2.0));
    }
  }
  
  // ── Render loop ──────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
  // ── Cleanup ──────────────────────────────────────────────────
  window._threeCleanup = function() {
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
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
};

// exercises-3d.js — Three.js renderers for DeepVault exercise visuals
// Uses global THREE and THREE.OrbitControls (loaded via CDN — r128)
// Exposes: render3DGraph(), render3DFOVCone()

window._threeCleanup = null;

// ── Shared helpers ──────────────────────────────────────────────
function _makeSpriteLabel(text, color, scaleX) {
  var canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 64;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color || '#ffffff';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 32);
  var tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  var mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, depthWrite: false, transparent: true });
  var sprite = new THREE.Sprite(mat);
  sprite.scale.set(scaleX || 2.5, 1.25, 1);
  sprite.renderOrder = 999;
  return sprite;
}

function _makeScene(cameraPos) {
  var scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  var dl = new THREE.DirectionalLight(0xffffff, 0.4);
  dl.position.set(10, 20, 10);
  scene.add(dl);
  return scene;
}

function _makeRenderer(containerEl, W, H) {
  var r = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  r.setSize(W, H);
  r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  r.domElement.style.display = 'block';
  r.domElement.style.margin = '0 auto';
  containerEl.appendChild(r.domElement);
  return r;
}

function _makeControls(camera, domElement) {
  var ctrl = new THREE.OrbitControls(camera, domElement);
  ctrl.target.set(0, 0, 0);
  ctrl.enableDamping = true;
  ctrl.dampingFactor = 0.1;
  ctrl.minDistance = 5;
  ctrl.maxDistance = 50;
  ctrl.maxPolarAngle = Math.PI * 0.78;
  ctrl.update();
  return ctrl;
}

function _startLoop(renderer, scene, camera, controls) {
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

function _cleanupScene(scene, renderer) {
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
  if (renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 3D Coordinate Graph  —  X/Y/Z axes + grid + points + arrows
// ═══════════════════════════════════════════════════════════════════
window.render3DGraph = function(containerEl, points, arrows) {
  if (window._threeCleanup) { try { window._threeCleanup(); } catch(e) {} }
  containerEl.innerHTML = '';
  
  var W = Math.max(containerEl.clientWidth || 520, 520);
  var H = 420;
  
  var scene = _makeScene();
  var camera = new THREE.PerspectiveCamera(45, W / H, 0.3, 200);
  camera.position.set(20, 16, 20);
  camera.lookAt(0, 0, 0);
  var renderer = _makeRenderer(containerEl, W, H);
  var controls = _makeControls(camera, renderer.domElement);
  
  // Axes + grid
  scene.add(new THREE.AxesHelper(15));
  scene.add(new THREE.GridHelper(30, 15, 0x444444, 0x1a1a1a));
  
  // Tick labels
  function tl(text, pos, color) {
    var s = _makeSpriteLabel(text, color, 1.6);
    s.position.copy(pos);
    scene.add(s);
  }
  for (var t = 2; t <= 14; t += 2) {
    tl(String(t), new THREE.Vector3(t + 0.5, -0.3, 0), '#ff5555');
    tl(String(t), new THREE.Vector3(-0.4, t + 0.3, 0), '#55ff55');
    tl(String(t), new THREE.Vector3(-0.4, 0, t + 0.3), '#5588ff');
  }
  
  // Point spheres
  var sphereGeo = new THREE.SphereGeometry(0.32, 20, 20);
  
  for (var pi = 0; pi < points.length; pi++) {
    var pt = points[pi];
    var isB = pi === 1;
    var pColor = isB ? 0xd2991d : 0xffffff;
    
    var mat = new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.3, metalness: 0.2 });
    var sphere = new THREE.Mesh(sphereGeo, mat);
    sphere.position.set(pt.x, pt.z, pt.y);
    scene.add(sphere);
    
    // Drop line to ground
    if (Math.abs(pt.z) > 0.05) {
      var lg = new THREE.BufferGeometry();
      lg.setAttribute('position', new THREE.BufferAttribute(
        new Float32Array([pt.x, pt.z, pt.y, pt.x, 0, pt.y]), 3));
      scene.add(new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.3 })));
      var dg = new THREE.SphereGeometry(0.08, 6, 6);
      var dm = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.3 }));
      dm.position.set(pt.x, 0, pt.y);
      scene.add(dm);
    }
    
    // Point label (A, B, Start, End, etc.)
    if (pt.label) {
      var labelSprite = _makeSpriteLabel(pt.label, isB ? '#d2991d' : '#ffffff', 3.0);
      labelSprite.position.set(pt.x + 0.8, pt.z + 0.7, pt.y);
      scene.add(labelSprite);
    }
  }
  
  // Arrows
  for (var ai = 0; ai < arrows.length; ai++) {
    var arr = arrows[ai];
    var from = points[arr.from], to = points[arr.to];
    if (!from || !to) continue;
    
    var dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
    var len = Math.sqrt(dx*dx + dy*dy + dz*dz);
    if (len < 0.02) continue;
    var ux = dx/len, uy = dy/len, uz = dz/len;
    
    // Shaft
    var sl = len - 0.7;
    if (sl > 0.05) {
      var sg = new THREE.CylinderGeometry(0.08, 0.08, sl, 8);
      var sm = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
      var shaft = new THREE.Mesh(sg, sm);
      shaft.position.set(from.x + dx*0.5, from.z + dz*0.5, from.y + dy*0.5);
      shaft.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0), new THREE.Vector3(ux, uz, uy)));
      scene.add(shaft);
    }
    
    // Head
    var hg = new THREE.ConeGeometry(0.2, 0.7, 8);
    var hm = new THREE.MeshStandardMaterial({ color: 0xd2991d, roughness: 0.3, metalness: 0.3 });
    var head = new THREE.Mesh(hg, hm);
    head.position.set(to.x - ux*0.35, to.z - uz*0.35, to.y - uy*0.35);
    head.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0), new THREE.Vector3(ux, uz, uy)));
    scene.add(head);
    
    if (arr.label) {
      var al = _makeSpriteLabel(arr.label, '#d2991d', 2.5);
      al.position.set(from.x + dx*0.5, from.z + dz*0.5 + 0.8, from.y + dy*0.5);
      scene.add(al);
    }
  }
  
  _startLoop(renderer, scene, camera, controls);
  
  window._threeCleanup = function() { _cleanupScene(scene, renderer); };
};

// ═══════════════════════════════════════════════════════════════════
// 3D FOV Cone  —  guard + forward cone + target
// ═══════════════════════════════════════════════════════════════════
window.render3DFOVCone = function(containerEl, opts) {
  if (window._threeCleanup) { try { window._threeCleanup(); } catch(e) {} }
  containerEl.innerHTML = '';
  
  var W = Math.max(containerEl.clientWidth || 520, 520);
  var H = 380;
  
  var scene = _makeScene();
  var camera = new THREE.PerspectiveCamera(45, W / H, 0.3, 100);
  camera.position.set(8, 10, 14);
  camera.lookAt(0, 0, 0);
  var renderer = _makeRenderer(containerEl, W, H);
  var controls = _makeControls(camera, renderer.domElement);
  
  // Ground grid (smaller)
  scene.add(new THREE.GridHelper(20, 10, 0x333333, 0x1a1a1a));
  
  var guardPos = new THREE.Vector3(opts.gx || 0, opts.gz || 0, opts.gy || 0);
  var fwd = new THREE.Vector3(opts.fx || 0, opts.fz || 0, opts.fy || 0).normalize();
  var targetPos = new THREE.Vector3(opts.tx || 0, opts.tz || 0, opts.ty || 0);
  var coneHalfAngle = (parseFloat(opts.coneAngle) || 60) * Math.PI / 360;
  var coneRadius = 10;
  
  // Guard sphere
  var gGeo = new THREE.SphereGeometry(0.35, 20, 20);
  var gMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
  var guard = new THREE.Mesh(gGeo, gMat);
  guard.position.copy(guardPos);
  scene.add(guard);
  
  // Forward arrow (from guard along forward direction)
  var fwdLen = 4;
  var fwdEnd = guardPos.clone().add(fwd.clone().multiplyScalar(fwdLen));
  var fwdShaftGeo = new THREE.CylinderGeometry(0.05, 0.05, fwdLen - 0.5, 8);
  var fwdShaft = new THREE.Mesh(fwdShaftGeo, new THREE.MeshStandardMaterial({ color: 0x58a6ff, roughness: 0.3 }));
  fwdShaft.position.copy(guardPos.clone().add(fwd.clone().multiplyScalar((fwdLen - 0.5) / 2)));
  fwdShaft.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), fwd));
  scene.add(fwdShaft);
  
  // Forward arrowhead
  var fHeadGeo = new THREE.ConeGeometry(0.15, 0.5, 8);
  var fHead = new THREE.Mesh(fHeadGeo, new THREE.MeshStandardMaterial({ color: 0x58a6ff, roughness: 0.3 }));
  fHead.position.copy(fwdEnd);
  fHead.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), fwd));
  scene.add(fHead);
  
  // FOV cone (semi-transparent)
  var coneGeo = new THREE.ConeGeometry(
    coneRadius * Math.tan(coneHalfAngle),  // radius at base
    coneRadius,                             // height
    32, 1, true);                           // open-ended
  var coneMat = new THREE.MeshBasicMaterial({
    color: 0x58a6ff,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  var cone = new THREE.Mesh(coneGeo, coneMat);
  cone.position.copy(guardPos.clone().add(fwd.clone().multiplyScalar(coneRadius * 0.5)));
  cone.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), fwd));
  cone.renderOrder = 1;
  scene.add(cone);
  
  // Cone wireframe outline
  var wireGeo = new THREE.ConeGeometry(
    coneRadius * Math.tan(coneHalfAngle), coneRadius, 24, 1, true);
  var wireMat = new THREE.MeshBasicMaterial({
    color: 0x58a6ff, wireframe: true, transparent: true, opacity: 0.3, depthWrite: false
  });
  var wire = new THREE.Mesh(wireGeo, wireMat);
  wire.position.copy(cone.position);
  wire.setRotationFromQuaternion(cone.quaternion);
  wire.renderOrder = 2;
  scene.add(wire);
  
  // Target sphere
  var dirToTarget = targetPos.clone().sub(guardPos).normalize();
  var dotFwd = fwd.dot(dirToTarget);
  var inCone = dotFwd > Math.cos(coneHalfAngle);
  var tColor = inCone ? 0x3fb950 : 0xf85149;
  
  var tGeo = new THREE.SphereGeometry(0.3, 16, 16);
  var tSphere = new THREE.Mesh(tGeo, new THREE.MeshStandardMaterial({ color: tColor, roughness: 0.4 }));
  tSphere.position.copy(targetPos);
  scene.add(tSphere);
  
  // Labels
  var gl = _makeSpriteLabel(opts.guardLabel || 'Guard', '#ffffff', 2.5);
  gl.position.copy(guardPos.clone().add(new THREE.Vector3(0.6, 0.5, 0)));
  scene.add(gl);
  
  var tl = _makeSpriteLabel(opts.targetLabel || 'E', inCone ? '#3fb950' : '#f85149', 2.5);
  tl.position.copy(targetPos.clone().add(new THREE.Vector3(0.6, 0.5, 0)));
  scene.add(tl);
  
  _startLoop(renderer, scene, camera, controls);
  window._threeCleanup = function() { _cleanupScene(scene, renderer); };
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const zPos = 5;
const radius = 2;
const segment = 64;
const rings = 64;
const color = 0x83c5be;

const geometry = new THREE.SphereGeometry(radius, segment, rings);
const material = new THREE.MeshBasicMaterial({
  color,
  wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
camera.position.z = zPos;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', animate());

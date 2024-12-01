// Importation via ES6 (assurez-vous que vous utilisez un environnement compatible)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.154.0/build/three.module.js';

const scene = new THREE.Scene(); // Création de la scène
scene.background = new THREE.Color(0x1a1a1a); // Couleur de fond

// Caméra
const camera = new THREE.PerspectiveCamera(
  75, // Champ de vision (Field of View)
  window.innerWidth / window.innerHeight, // Ratio
  0.1, // Plan proche
  1000 // Plan lointain
);
camera.position.z = 5; // Position de la caméra

// Rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Ajouter le rendu à la page

// Géométrie + Matériau = Mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // Matériau vert
const cube = new THREE.Mesh(geometry, material); // Création du cube
scene.add(cube); // Ajout du cube à la scène

// Animation
function animate() {
  requestAnimationFrame(animate);

  // Rotation du cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera); // Rendu
}

animate(); // Lancer l'animation

// Redimensionnement dynamique
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

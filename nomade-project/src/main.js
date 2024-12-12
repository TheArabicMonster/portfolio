import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as THREE from 'three'

createApp(App).use(router).mount('#app')

// Three.js background animation
let camera, scene, renderer, plane

function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  scene = new THREE.Scene()

  const geometry = new THREE.PlaneGeometry(10, 10, 32, 32)
  const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true })

  plane = new THREE.Mesh(geometry, material)
  scene.add(plane)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize, false)

  animate()
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)

  plane.rotation.x += 0.01
  plane.rotation.y += 0.01

  renderer.render(scene, camera)
}

init()
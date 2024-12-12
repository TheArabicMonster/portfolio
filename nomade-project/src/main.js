import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as THREE from 'three'

createApp(App).use(router).mount('#app')

// Three.js background animation
let camera, scene, renderer, particles

function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 400

  scene = new THREE.Scene()

  const geometry = new THREE.BufferGeometry()
  const vertices = []

  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000)
    const y = THREE.MathUtils.randFloatSpread(2000)
    const z = THREE.MathUtils.randFloatSpread(2000)

    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  const material = new THREE.PointsMaterial({ color: 0x888888 })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

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

  particles.rotation.x += 0.0005
  particles.rotation.y += 0.001

  renderer.render(scene, camera)
}

init()
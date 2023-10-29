import * as thr from "./three.js-r145/build/three.module.js"

const scene = new thr.Scene()
const ratio = window.innerWidth / window.innerHeight
const camera = new thr.PerspectiveCamera(75, ratio, 0.1, 1000)
const renderer= new thr.WebGLRenderer()

renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function createSphere(radius) {
    const geoSphere = new thr.SphereGeometry(
    radius,
    360,
    360
    )

    const texture = new thr.TextureLoader().load( "./assets/bowling-ball.png")
    const materialSphere = new thr.MeshStandardMaterial({map : texture})
    texture.wrapS = thr.RepeatWrapping
    texture.wrapT = thr.RepeatWrapping
    const sphere = new thr.Mesh(geoSphere, materialSphere)
    return sphere
}

function createBox(width, height, depth){
    const geometry = new thr.BoxGeometry(width,height,depth)
    const material = new thr.MeshPhongMaterial()
    const box = new thr.Mesh(geometry, material)
    return box
}

camera.position.set(20, 60, 180)
camera.lookAt(0,0,0)

const sphere = createSphere(5)
sphere.castShadow = true
scene.add(sphere)


const floor = createBox(50, 1, 50)
floor.receiveShadow = true
floor.position.set(0, -3)
scene.add(floor)

// const ambientLight = new thr.AmbientLight()
// scene.add(ambientLight)

// const directionalLight = new thr.DirectionalLight()
// directionalLight.position.set(7,7,-7)
// directionalLight.castShadow = true
// scene.add(directionalLight)

// const pointLight = new thr.PointLight()
// pointLight.position.set(7, 15, -7)
// pointLight.castShadow = true
// pointLight.shadow.mapSize.width = 4096
// pointLight.shadow.mapSize.height = 4096
// scene.add(pointLight)
// const helper = new thr.PointLightHelper(pointLight, 2, "WHITE")
// scene.add(helper)

const spotLight = new thr.SpotLight(
    0xffffff,
    1,
    100,
    Math.PI / 6,
    0.5

)
spotLight.position.set(7,15,-7)
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 4096
spotLight.shadow.mapSize.height = 4096
scene.add(spotLight)
const helper = new thr.SpotLightHelper(spotLight)
scene.add(helper)


// const helper = new thr.DirectionalLightHelper(directionalLight, 2, 0xffffff)
// scene.add(helper)

window.onload = () => renderer.render(scene, camera);


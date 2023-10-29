import * as thr from "./Three JS/build/three.module.js"
console.log("Connected")

let scene, camera,renderer;
const textureLoader = new thr.TextureLoader()

function init(){

    scene = new thr.Scene()

    const fov = 75
    const width = window.innerWidth
    const height = window.innerHeight
    const aspect = width / height

    camera = new thr.PerspectiveCamera(fov,aspect, 0.1,1000)
    camera.position.set(3,10,5)
    camera.lookAt(0,0,0)

    renderer = new thr.WebGLRenderer({antialias : true})
    renderer.setSize(width,height)
    renderer.setClearColor("#555555")
    renderer.clear()
    document.body.appendChild(renderer.domElement)
}

function render(){
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
// mesti buat geometry, material, dan mesh
// camera.position.est(3,10,5)
function createBox(){
    const boxGeo = new thr.BoxGeometry(1,1,1)
    const boxMaterial = new thr.MeshNormalMaterial()
    const boxMesh = new thr.Mesh(boxGeo, boxMaterial)
    
    scene.add(boxMesh)
}

function createCone(){
    const coneGeo = new thr.ConeGeometry(2,2,1000)
    const coneMaterial = new thr.MeshBasicMaterial(
        {
        // color: "red"
        wireframe: true
    }
    )

    const coneMesh = new thr.Mesh(coneGeo, coneMaterial)
    coneMesh.position.z += 5

    coneMesh.castShadow = true

    scene.add(coneMesh)
}

function createSphere(){
    const sphereGeo = new thr.SphereGeometry(2,8,8)
    const sphereMaterial = new thr.MeshNormalMaterial({
        wireframe:true
    })
    const sphereMesh = new thr.Mesh(sphereGeo, sphereMaterial)
    sphereMesh.position.z -= 5
    scene.add(sphereMesh)
}

function createCylinder(){
    const cylinderGeo = new thr.CylinderGeometry(2, 4,5,8)
    const cylinderMaterial = new thr.MeshNormalMaterial()
    const cylinderMesh = new thr.Mesh(cylinderGeo, cylinderMaterial)
    cylinderMesh.position.x += 5
    scene.add(cylinderMesh)
}

function createPlane(){
    const planeGeo = new thr.PlaneGeometry(10,10)
    const texture = textureLoader.load("image.png")
    const planeMaterial = new thr.MeshBasicMaterial({
        map : texture
    })
    const planeMesh = new thr.Mesh(planeGeo,planeMaterial)
    scene.add(planeMesh)
    planeMesh.position.set(-5, 0,-5)
    planeMesh.setRotationFromAxisAngle.set(0,Math.PI/3,0)
    scene.add(planeMesh)

    // di cone function
    // coneMesh.castShadow = true
    planeMesh.receiveShadow = true
}


window.onload = () => {
    init()
    createBox()
    createCone()
    createSphere()
    createCylinder()
    createPlane()
    render()
}



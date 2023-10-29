import * as THR from "./Three JS/build/three.module.js"

let camera, scene, renderer, target

function initialize() {
    scene = new THR.Scene()

    const width = window.innerWidth
    const height = window.innerHeight
    const fov = 90
    const aspect = width/height

    camera = new THR.PerspectiveCamera(fov,aspect)
    camera.position.set(0, 0,5)

    renderer = new THR.WebGLRenderer()
    renderer.setSize(width,height)
    renderer.setClearColor("#CAE7D3")
    renderer.clear()

    document.body.appendChild(renderer.domElement)
    console.log("Done Initialize")

}

window.onload = () => {
    initialize()
    createCone(2,2,8)
    createLight()
    move()  
    render()
}

window.onresize = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    renderer.setSize(width,height)
    camera.aspect = width/height

    camera.updateProjectionMatrix()
}

function createBox(width,height, segment) {
    const boxGeo = new THR.BoxGeometry(width,height,360)
    const boxMaterial = new THR.MeshBasicMaterial(
    {
    // color: "#d49137"
    wireframe : true
    }
    )
    const boxMesh = new THR.Mesh(boxGeo, boxMaterial)
    // boxMesh.position.set(0,0,0)
    scene.add(boxMesh)
}

function createCone(width,height,segment) {
    const coneGeo = new THR.ConeGeometry(width,height,segment)
    const coneMaterial = new THR.MeshPhongMaterial(
    {
    color: "#d49137"
    // wireframe : true
    }
    )
    const coneMesh = new THR.Mesh(coneGeo, coneMaterial)
    // coneMesh.position.set(0,0,0)
    
    scene.add(coneMesh)
}

function createLight(){
    const light = new THR.PointLight("#ffffff", 2)
    light.position.set(0,0,5)
    scene.add(light)
}
function render() {
    renderer.render(scene,camera)
}

function move(){
    camera.position.set(10,0,0)
    camera.target.set(0,0,0a)
}


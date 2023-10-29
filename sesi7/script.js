import * as thr from "./Three JS/build/three.module.js"

let camera, scene, renderer

function init(){
    scene = new thr.Scene()

    const width = window.innerWidth
    const height = window.innerHeight
    const aspect = width / height
    const fov = 75

    camera = new thr.PerspectiveCamera(fov,aspect)
    camera.position.set(100,10,100)
    renderer = new thr.WebGLRenderer()
    renderer.setSize(width,height)
    renderer.setClearColor("#87CEEB")
    renderer.clear()

    document.body.appendChild(renderer.domElement)
}
function render(){
    move()
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
const x = 80, y = 60
let xspeed =1, yspeed = 1
let mesh
function move(){
    if(mesh){
            if(mesh.position.x < -x || mesh.position.x > x){
                xspeed = -xspeed
            }
            if(mesh.position.y < -y || mesh.position.y > y){
                yspeed = -yspeed
            }
            mesh.position.x += xspeed
            mesh.position.y += yspeed
        }
    }

function createText(text){
    const fontLoader = new thr.FontLoader()
    
    fontLoader.load("./Three JS/examples/fonts/helvetiker_bold.typeface.json", 
    font =>{
        const textGeo = new thr.TextGeometry(text,{
            font:font,
            size:10,
            height: 3
        })
        const fontMat = new thr.MeshBasicMaterial({color : "yellow"})
        mesh = new thr.Mesh(textGeo, fontMat)
        scene.add(mesh)
        camera.lookAt(mesh.position)
    })

}

window.onload= () => {
    init()
    createText("Hello")
    render()
}

window.onresize= () => {
    const width = window.innerWidth
    const height = window.innerHeight

    renderer.setSize(width,height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()
}
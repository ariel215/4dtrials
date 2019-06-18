import * as THREE from './three.js'; // this line doesn't work in Chrome, but helps development

var scene, camera, renderer, cube;

function buildScene(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75,
        window.innerWidth/window.innerHeight,
        0.1,1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial(
        {color: 0x00ff00}
    );
    var cube = new THREE.Mesh(geometry,material);
    scene.add( cube );
    camera.position.z = 5;
    }
buildScene();

// Rotate cube with WASD using persistent state
var keyPressed = {
    'w': false,
    'a': false,
    's': false,
    'd': false
};
var rotations = {
    'w': ()=> cube.rotation.x += 0.05,
    's': () => cube.rotation.x -= 0.05,
    'a': () => cube.rotation.y += 0.05,
    'd': () => cube.rotation.y -= 0.05
};

function onKeyDown(event){
    for (var key in keyPressed){
        if (event.key == key) {
            keyPressed[key] = true;
        }
    }
};
function onKeyUp(event){
    for (var key in keyPressed){
        if (event.key == key){
            keyPressed[key] = false;
        }
    }
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup',onKeyUp);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    for (let key in keyPressed){
        if (keyPressed[key]){
            rotations[key]();
        }
    }
};
animate();

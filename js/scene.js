import "./three.js";

var scene, camera, renderer, cube;

function makeScene(){
        scene = new three.Scene();
        camera = new three.PerspectiveCamera(75,
            window.innerWidth/window.innerHeight,
            0.1,1000);
        renderer = new three.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    };


function addCube(){
    var geometry = new BoxGeometry(
        1,1,1
    );
    var material = new three.MeshBasicMaterial(
        {color: 0x00ff00}
    );
    var cube = new three.Mesh(geometry,material);
    scene.add( cube );
    camera.position.z = 5;
    return cube
};

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};

makeScene();
addCube()
animate()

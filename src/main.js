import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var canvas = document.querySelector('#c');

var renderer = new THREE.WebGLRenderer({
  canvas, antialias: true
 });

renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

const stl = renderer.domElement.style;
stl.top = "0px";
stl.left = "0px";




const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;
camera.position.y = 3.6;
cube.position.y =7;

let tourn = true;

const loader = new GLTFLoader();

loader.load( '/models/sceneV2.gltf', function ( gltf ) {

  scene.add( gltf.scene );

}, undefined, function ( error ) {

  console.error( error );

} );


var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;


function animate() {
  controls.update();
  renderer.render(scene, camera);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  if(tourn){
    tourner();
  }

}

async function tourner() {
    console.log("Start");
    scene.rotation.y -= 0.01;
    await new Promise(resolve => setTimeout(resolve, 10000));
    tourn=false;
    console.log("End");
}


renderer.setAnimationLoop( animate );


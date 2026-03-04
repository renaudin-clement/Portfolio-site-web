import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var canvas = document.querySelector('#c');
var renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const stl = renderer.domElement.style;
let tourn = true;
const allobject = ["/models/sceneV2.gltf"];
let assetTotal = allobject.length;
const loaderimage= new THREE.ImageLoader();
const allImageURLs = ["/image/one.png", "/image/two.jpg", "/image/three.gif"];
const image = await loaderimage.loadAsync( '/image/one.png' );
let assetCount = 0;
const loader = new GLTFLoader();

let cube = null;


function init() {
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  stl.top = "0px";
  stl.left = "0px";

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 12;
  camera.position.y = 4.0;
  cube.position.y =7;
}


init();







function loadobject() {
	for (let i = 0; i < assetTotal; i++) {
		allobject[i] = loader.load(allobject[i], function(gltf) {
			checkProgress();
      scene.add( gltf.scene );

    }, undefined, function ( error ) {

      console.error( error );

    } );

	}
}

function checkProgress() {
	assetCount ++;

	if (assetCount >= assetTotal) {
		loadingComplete();
	}
}

// Called when all assets have finished loading
function loadingComplete() {
	console.log("All object are loaded!");
	console.log(allobject);

	// ... Hide preloader bar
	// ... Start rendering scene with new assets
}

loadobject();





function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            var width = window.innerWidth;
            var height = window.innerHeight;
            var canvasPixelWidth = canvas.width / window.devicePixelRatio;
            var canvasPixelHeight = canvas.height / window.devicePixelRatio;
const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
            if (needResize) {
renderer.setSize(width, height, false);
            }
            return needResize;
}


var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;


function animate() {
  controls.update();
  renderer.render(scene, camera);

  if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
  }

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


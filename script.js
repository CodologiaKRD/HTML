let scene1, camera1, renderer1, model1;
let scene2, camera2, renderer2, model2;

function init1(){
    scene1 = new THREE.Scene();

    camera1 = new THREE.PerspectiveCamera(75, window.innerWidth/2/window.innerHeight, 0.1, 1000);
    camera1.position.set(2,2,5);
    camera1.lookAt(0,0,0);

    renderer1 = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer1.setSize(window.innerWidth/2, window.innerHeight);
    document.getElementById('model-container1').appendChild(renderer1.domElement);

    controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
    controls1.enableDamping = true;
    controls1.damingFactor = 0.05;
    controls1.screenSpacePanning = false;
    controls1.minDistance = 1;
    controls1.maxDistance = 20;

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1,1,1).normalize();
    scene1.add(light1);

    const loader1 = new THREE.GLTFLoader();
    loader1.load(
        'models/model.glb', (gltf) => {
            model1 = gltf.scene;
            scene1.add(model1);
            model1.scale.set(1,1,1);
        }, undefined,
        (error) => {
            console.log(error)
        }
    );
    animate1();
}

function animate1(){
    requestAnimationFrame(animate1);
    if(controls1){
        controls1.update();
    }
    if(model1){
        model1.rotation.y += 0.002;
    }
    renderer1.render(scene1, camera1);
}

function init2(){
    scene2 = new THREE.Scene();

    camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/2/window.innerHeight, 0.1, 1000);
    camera2.position.set(2,2,5);
    camera2.lookAt(0,0,0);

    renderer2 = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer2.setSize(window.innerWidth/2, window.innerHeight);
    document.getElementById('model-container2').appendChild(renderer2.domElement);

    controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
    controls2.enableDamping = true;
    controls2.damingFactor = 0.05;
    controls2.screenSpacePanning = false;
    controls2.minDistance = 1;
    controls2.maxDistance = 20;

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(1,1,1).normalize();
    scene2.add(light2);

    const loader2 = new THREE.GLTFLoader();
    loader2.load(
        'models/model2.glb', (gltf) => {
            model2 = gltf.scene;
            scene2.add(model2);
            model2.scale.set(1,1,1);
        }, undefined,
        (error) => {
            console.log(error)
        }
    );
    animate2();
}

function animate2(){
    requestAnimationFrame(animate2);
    if(controls2){
        controls2.update();
    }
    if(model2){
        model2.rotation.y += 0.002;
    }
    renderer2.render(scene2, camera2);
}

window.addEventListener('load', () => {
    init1();
    init2();
})

window.addEventListener('resize', () => {
    camera1.aspect = window.innerWidth / 2 / window.innerHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth / 2, window.innerHeight)
})
window.addEventListener('resize', () => {
    camera2.aspect = window.innerWidth / 2 / window.innerHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth / 2, window.innerHeight)
})
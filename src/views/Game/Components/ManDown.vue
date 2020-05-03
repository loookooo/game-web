<template>
    <div :class="['mandown wow animated',gameactive?'slideOutRight':'slideInRight']" data-wow-duration="0.5s">
        <div class="rules">
           <game-tab game="模型操作"></game-tab>
           
        </div>
        <div id="mandown"></div>
    </div>
</template>
<script>
import GameTab from '@/components/GameTab.vue';
//--------------------
// import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// let container = null;
// let width = null;
// let height = null;
// let k = null;
// let s = null;
// let scene = null;
// let camera = null;
// let geometry = null;
// let material = null;
// let mesh = null;
// let geometry2 = null;
// let material2 = null;
//  let mesh2 = null;
//  let point = null;
//  let ambient = null;
//  let axisHelper = null;
//  let renderer = null;
// let controls = null;
// let animate = null;
// let id =null;


import { computed, onMounted, onBeforeUnmount, reactive } from '@vue/composition-api';
export default {
    name:'mandown',
    components:{
        GameTab
    },
    setup(props,{root}){
        const gameactive = computed(()=> root.$store.state.gamechangeActive); 
        return {
            gameactive
        }  
        //-----------
        // onMounted(() => {
            
        //     container = document.getElementById('mandown');
        //      width = container.clientWidth;
        //      height = container.clientHeight;
        //      k = width / height;
        //      s = 200;

        //      scene = new THREE.Scene();      //创建场景

        //      camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);   //创建相机
        //     camera.position.set(200, 300, 200);
        //     camera.lookAt(scene.position);

        //      geometry = new THREE.BoxGeometry(100, 100, 100);    //正方体
        //      material = new THREE.MeshPhongMaterial({     //添加材质和颜色
        //         color:'red',
        //         specular:'0x444444',
        //         shininess:30
        //     });    
        //      mesh = new THREE.Mesh(geometry, material);      //网格模型
        //     scene.add(mesh);

        //      geometry2 = new THREE.BoxGeometry(50, 50, 50);        //正方体2
        //      material2 = new THREE.MeshNormalMaterial({color: 0x0ffff});
        //      mesh2 = new THREE.Mesh(geometry2, material2);
        //     mesh2.translateX(75);
        //     scene.add(mesh2);

        //      point = new THREE.PointLight(0xffffff);     //点光
        //     point.position.set(400, 200, 300);
        //     scene.add(point);

        //      ambient = new THREE.AmbientLight(0x444444);     //环境光
        //     scene.add(ambient);

        //      axisHelper = new THREE.AxesHelper(250);
        //     scene.add(axisHelper);

        //      renderer = new THREE.WebGLRenderer({antialias: true});  //渲染器
        //     renderer.setSize(width, height);

        //      //controls = new OrbitControls(camera);   //鼠标控件
            

        //     container.appendChild(renderer.domElement);
            
        //     animate = function() {
        //         id = requestAnimationFrame(animate);
        //         mesh2.rotation.x += 0.04;
        //         renderer.render(scene, camera);
        //     };
        //     animate();
        // });
        // onBeforeUnmount(()=>{
        //     cancelAnimationFrame(id);
        //      container = null;
        //      width = null;
        //      height = null;
        //      k = null;
        //      s = null;
        //      scene = null;
        //      camera = null;
        //      geometry = null;
        //      material = null;
        //      mesh = null;
        //      geometry2 = null;
        //      material2 = null;
        //      mesh2 = null;
        //      point = null;
        //      ambient = null;
        //      axisHelper = null;
        //      renderer = null;
        //      controls = null;
        //      animate = null;
        //      id =null;
        // });
        //-----------   
        
    },
}
</script>
<style lang="scss" scoped>
 #mandown {
     position: absolute;
     right:0px;
     width:1043px;
    height: 564px;
}

.rules{
    position: absolute;
     left:0px;
    width:300px;
    height: 564px;
}
.mandown {
    position: relative;
    width: 100%;
    height:100%;
    background-color: rgba(255,255,255,0.5);
}
</style>
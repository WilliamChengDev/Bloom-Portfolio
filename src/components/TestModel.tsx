import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";
import { useThree } from '@react-three/fiber';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const TestModel = () => {
    gsap.registerPlugin(useGSAP);
    const camera = useThree(state => state.camera);
    camera.position.x = 2;
    camera.position.y = .6;
    camera.position.z = -.4;
    camera.lookAt(new THREE.Vector3(0,.7,0));


    return(
        <>
            <HomeModelBaked/>
            <ambientLight intensity={3}/>
            <fog attach="fog" color="#f4f0e8" near={2} far={7} />
        </>
    );
}
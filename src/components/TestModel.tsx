import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";
import { useThree } from '@react-three/fiber';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const TestModel = () => {
    gsap.registerPlugin(useGSAP);

    const camera = useThree(state => state.camera);
    camera.lookAt(new THREE.Vector3(0,.5,0));
    camera.position.x = 2;
    camera.position.y = 1;
    camera.position.z = -.3;

    useGSAP(() => {
        gsap.from(camera.position, {
            y:8,
            duration: 3,
            delay:13,
        });
    })

    return(
        <>
            {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
            <HomeModelBaked/>
            <ambientLight intensity={3}/>
            <fog attach="fog" color="#f4f0e8" near={2} far={7} />
        </>
    );
}
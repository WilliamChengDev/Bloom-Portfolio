import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";
import { useThree } from '@react-three/fiber';

export const TestModel = () => {

    const camera = useThree(state => state.camera);

    camera.position.x = 2;
    camera.position.y = .6;
    camera.position.z = -.3;
    camera.lookAt(new THREE.Vector3(0,.5,0));

    return(
        <>
            {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
            <HomeModelBaked/>
            <ambientLight intensity={3}/>
            <fog attach="fog" color="#f4f0e8" near={2} far={7} />
        </>
    );
}
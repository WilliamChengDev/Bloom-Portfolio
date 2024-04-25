import * as THREE from 'three'
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";
import { useThree } from '@react-three/fiber';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

export const TestModel = (props : {clientX : number, clientY: number}) => {
    gsap.registerPlugin(useGSAP);
    const [camera, setCamera] = useState(useThree(state => state.camera)) ;
    const[camX, setCamX] = useState(2); //front-back
    const[camY, setCamY] = useState(0.6); //height
    const[camZ, setCamZ] = useState(0); //left-right
    
    const calculateX = () => {
        var distance = (props.clientX - window.innerWidth/2)/window.innerWidth*2;
        return distance;
    }
    
    useEffect(() => {
        setCamZ(calculateX()*0.5);
        camera.position.set(camX, camY, camZ); //track camera position
        camera.lookAt(new THREE.Vector3(0,.7,0)); //look at flower        
    });

    return(
        <>
            <axesHelper/>
            <HomeModelBaked/>
            <ambientLight intensity={3}/>
            <fog attach="fog" color="#f4f0e8" near={2} far={7} />
        </>
    );
}
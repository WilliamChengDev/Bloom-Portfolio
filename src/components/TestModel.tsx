import * as THREE from 'three'
import { HomeModelBaked } from "./HomeModelBaked";
import { useThree } from '@react-three/fiber';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react';

export const TestModel = (props : {clientX : number, clientY: number}) => {
    gsap.registerPlugin(useGSAP);
    const [camera] = useState(useThree(state => state.camera)) ;
    const[camX] = useState(2); //front-back
    const[zTarget, setZTarget] = useState(0); //target to lerp to X
    const[yTarget, setYTarget] = useState(0); //target to lerp to Y
    
    const calculateX = () => {
        var distance = (props.clientX - window.innerWidth/2)/window.innerWidth*2;
        return distance;
    }

    const calculateY = () => {
        var distance = (props.clientY - window.innerHeight/2)/window.innerHeight*2;
        return distance;
    }

    useEffect(() => {
        setZTarget(calculateX()*0.5); //set target to lerp to horizontally
        setYTarget(calculateY()*0.3+.8); //set target to lerp to vertically
        camera.position.lerp(new THREE.Vector3(camX, yTarget, zTarget), 1);
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
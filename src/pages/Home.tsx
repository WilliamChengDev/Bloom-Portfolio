import './Home.css';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { Canvas } from '@react-three/fiber';
import { TestModel } from '../components/TestModel';

export default function Home(props : {page : number}){

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const trackMouse = (e:React.MouseEvent) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }

    useEffect(() => {
        if(props.page != 1){
            gsap.to(".home-page", {opacity:0, ease:"expo"})
            gsap.to(".home-page", {display:"none"});
        } else if(props.page == 1){
            gsap.to(".home-page", {display:"block"});
            gsap.to(".home-page", {opacity:1, ease:"expo", delay:.4});

        }
    }, [props.page]);

    return(
        <div className='home-page'>
            <div className='title'>
                <h1>BLOOM</h1>
            </div>
            <div className='flower-container' onMouseMove={trackMouse}>
                <Canvas style={{background: "rgba(255, 99, 71, 0)"}}>
                    <TestModel 
                        clientX = {mouseX}
                        clientY = {mouseY}
                    />
                </Canvas>
            </div>
        </div>
    )
}
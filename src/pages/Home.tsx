import './Home.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { TestModel } from '../components/TestModel';

export default function Home(){

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const trackMouse = (e:React.MouseEvent) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }

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
import './Home.css';
import { LoaderIconSmall } from '../components/loaderIconSmall';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from 'gsap-trial/all';
import { Canvas } from '@react-three/fiber';
import { TestModel } from '../components/TestModel';


export default function Home(){
    gsap.registerPlugin(useGSAP, DrawSVGPlugin);

    var iconI = gsap.timeline({paused: true});
    useGSAP(() => {
        iconI.to(".cls-s", {duration:.3,drawSVG: false, ease:"expo.in"});
        iconI.to("#circlesmall", {duration:.3, scale:3, transformOrigin: "center"});
    });
    
    
    const HomeIconIn = () => {
        iconI.play(0);
        console.log("home icon in");
    }

    const HomeIconOut = () => {
        // iconI.pause();
        iconI.reverse();
        // iconI.play();
        console.log("home icon out");
    }

    return(
        <div className='home-page'>
            <div className='flower-container'>
                <Canvas>
                    <TestModel/>
                </Canvas>
            </div>
            <div className='top-row'>
                <div className='icon-container' onMouseEnter={HomeIconIn} onMouseLeave={HomeIconOut}>
                    <LoaderIconSmall/>
                </div>
            </div>
            <div className='bloom-container'>
                <h1 className='bloom'>BLOOM</h1>
            </div>
        </div>
    )
}
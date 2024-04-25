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
        iconI.to("#circlesmall", {duration:.3, scale:4, transformOrigin: "center"});
        iconI.fromTo("#home", {opacity:0, scale:0.5, transformOrigin: "center"}, {opacity: 1, scale:.8, duration:.3, transformOrigin: "center", delay:.2}, '<');
    });
    
    
    const HomeIconIn = () => {
        iconI.play(0);
    }

    const HomeIconOut = () => {
        iconI.reverse();
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
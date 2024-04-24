import './Home.css';
import { LoaderIconSmall } from '../components/loaderIconSmall';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from 'gsap-trial/all';
import { Canvas } from '@react-three/fiber';
import { TestModel } from '../components/TestModel';
import * as THREE from 'three'



export default function Home(props: { fibercall: boolean; }){
    gsap.registerPlugin(useGSAP, DrawSVGPlugin);
    var tl = gsap.timeline({paused: true});
    tl.to(".cls-s", {duration:.8,drawSVG: false, stagger:0.1});

    const HomeIconIn = () => {
        console.log("home icon in");
        tl.play(0);
    }

    const HomeIconOut = () => {
        console.log("home icon out");
    }

    return(
        <div className='home-page'>
            <div className='flower-container'>
                <Canvas>
                    <TestModel fibercall = {props.fibercall}/>
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
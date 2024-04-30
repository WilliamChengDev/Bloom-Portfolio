import './TopRow.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from 'gsap-trial/all';
import { LoaderIconSmall } from "./loaderIconSmall";
import { useState } from "react";

export default function TopRow(){
    
    gsap.registerPlugin(useGSAP, DrawSVGPlugin);

    const [iconI, setIconI] = useState(gsap.timeline({paused: true})); //gotta store timeline in state so it doesn't reload on DOM rerender
    
    useGSAP(() => {
        iconI.to(".cls-s", {duration:.3,drawSVG: false, ease:"expo.in"});
        iconI.to("#circlesmall", {duration:.3, scale:4, transformOrigin: "center"});
        iconI.fromTo("#home", {opacity:0, scale:0.5, transformOrigin: "center"}, {opacity: 1, scale:.8, duration:.3, transformOrigin: "center", delay:.2}, '<');
    });
    const HomeIconIn = () => {
        iconI.play();
        console.log("running");
    }
    const HomeIconOut = () => {
        iconI.reverse();
    }

    return(
        <div className='top-row'>
            <div className='icon-container' onMouseEnter={HomeIconIn} onMouseLeave={HomeIconOut}>
                <LoaderIconSmall/>
            </div>
        </div>
    );
}
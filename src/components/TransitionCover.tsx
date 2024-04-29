import './TransitionCover.css';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { useState } from 'react';


export default function TransitionCover(){
    gsap.registerPlugin( useGSAP );

    const[transition, setTransition] = useState(gsap.timeline({paused:true}));

    useGSAP(() => {
        transition.fromTo(".transition-cover", {opacity:0}, {opacity:1, ease:"power1.in"});
        transition.fromTo(".transition-cover", {opacity:1}, {opacity:0, delay:.5, ease:"power2.out"});
    });

    return(
        <div className="transition-cover">

        </div>
    );
}
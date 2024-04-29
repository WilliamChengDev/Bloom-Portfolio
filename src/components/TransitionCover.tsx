import './TransitionCover.css';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { useEffect, useState } from 'react';


export default function TransitionCover(props: {page: number}){
    gsap.registerPlugin( useGSAP );

    const[transition, setTransition] = useState(gsap.timeline({paused:true}));

    useEffect(() => {
        transition.play(0);
        console.log("playing transition");
    }, [props.page]) //props in useEffect use "[]"

    useGSAP(() => {
        transition.fromTo(".transition-cover", {opacity:0}, {opacity:1, ease:"expo"});
        transition.fromTo(".transition-cover", {opacity:1}, {opacity:0, delay:.5, ease:"power2.out"});
    });

    return(
        <div className="transition-cover">
        </div>
    );
}
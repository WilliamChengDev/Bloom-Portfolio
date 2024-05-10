import './TransitionCover.css';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

export default function TransitionCover(props: {page: number, intro: boolean}){
    gsap.registerPlugin( useGSAP );

    const[transition] = useState(gsap.timeline({paused:true}));

    useEffect(() => {
        if(!props.intro){
            transition.play(0); //temporarily disable
            console.log("playing transition");
        }
    }, [props.page]) //props in useEffect use "[]"

    useGSAP(() => {
        transition.to(".transition-cover", {display: "unset", duration:0}); //set to unset to cover any pointer events during animation
        transition.fromTo(".transition-cover", {opacity:0}, {opacity:1, ease:"expo"});
        transition.fromTo(".transition-cover", {opacity:1}, {opacity:0, delay:.5, ease:"power2.out"});
        transition.to(".transition-cover", {display: "none", duration:0}); //remove after animation
    });

    return(
        <div className="transition-cover">
        </div>
    );
}
import "./Page2Journalism.css";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import SilencedSpeech from "../assets/Journalism/Silenced Speech.png"
import { useEffect, useState } from "react";

export default function Page1Blender(props : {page : number}){
    const[bannerTl] = useState(gsap.timeline({repeat: -1, paused: false}));
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        bannerTl.to(".banner-one-2", {marginLeft: '-100vw', duration: 6, ease: "none"});
        bannerTl.set(".banner-one-2", {padding: '.7em'});
    })

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const trackMouse = (e:React.MouseEvent) => {
        setMouseX((e.clientX - window.innerWidth/2)/window.innerWidth*2);
        setMouseY((e.clientY - window.innerHeight/2)/window.innerHeight*2);
    }

    useEffect(() => {
        gsap.to('.main-image-2 img', {rotationY: mouseX*15, rotationX: mouseY*-5});
    }, [mouseX]);

    useEffect(() => {
        if(props.page != 3){
            gsap.to(".journalism-page", {opacity:0, ease:"expo"})
            gsap.to(".journalism-page", {display:"none"});
        } else if(props.page == 3){
            gsap.to(".journalism-page", {display:"block"});
            gsap.to(".journalism-page", {opacity:1, ease:"expo", delay:.4});
        }
    }, [[props.page]]);
    
    return(
        <div className="journalism-page" onMouseMove={trackMouse}>
            <div className="page-2-background">
                <div className="main-image-2">
                    <img src={SilencedSpeech} alt="Silenced Speech Journalism Spread" />
                </div>
                <div className="running-banner-2">
                    <div className="banner-one-2">
                        <h1>Journalism</h1>
                    </div>
                    <div className="banner-two-2">
                        <h1>Journalism</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
import "./Page1Blender.css";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Room from "../assets/Blender/Compressed/My Room.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Page1Blender(props : {page : number}){

    const[bannerTl] = useState(gsap.timeline({repeat: -1, paused: false}));
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        bannerTl.to(".banner-one", {marginLeft: '-100vw', duration: 6, ease: "none"});
        bannerTl.to(".banner-one", {marginLeft: '.7em', duration: 0, ease: "none"});
    })

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const trackMouse = (e:React.MouseEvent) => {
        setMouseX((e.clientX - window.innerWidth/2)/window.innerWidth*2);
        setMouseY((e.clientY - window.innerHeight/2)/window.innerHeight*2);
    }

    useEffect(() => {
        gsap.to('.main-image-1 img', {rotationY: mouseX*15, rotationX: mouseY*-5});
    }, [mouseX]);

    useEffect(() => {
        if(props.page != 2){
            gsap.to(".blender-page", {opacity:0, ease:"expo"})
            gsap.to(".blender-page", {display:"none"});
        } else if(props.page == 2){
            gsap.to(".blender-page", {display:"block"});
            gsap.to(".blender-page", {opacity:1, ease:"expo", delay:.4});
        }
    }, [[props.page]]);

    return(
        <div className="blender-page" onMouseMove={trackMouse}>
            <div className="page-1-background">
                <a className="main-image-1" href="/Bloom-Portfolio/Blender">
                    <img src={Room} alt="My Room Render" />
                </a>
                <div className="running-banner">
                    <div className="banner-one">
                        <h1>BLENDER-3D</h1>
                    </div>
                    <div className="banner-two">
                        <h1>BLENDER-3D</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
import "./Page1Blender.css";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Room from "../assets/Blender/Compressed/My Room.png"
import { useEffect, useState } from "react";

export default function Page1Blender(props : {page : number, inPage : boolean, setInPage : React.Dispatch<React.SetStateAction<boolean>>}){
    const[bannerTl] = useState(gsap.timeline({repeat: -1, paused: false}));
    const[pageIntroTl] = useState(gsap.timeline({repeat: 0, paused: true}));
    // const[inPage, setInPage] = useState(false);
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        //Running banner animation
        bannerTl.to(".banner-one", {marginLeft: '-100vw', duration: 6, ease: "none"});
        bannerTl.to(".banner-one", {marginLeft: '.7em', duration: 0, ease: "none"});
        //Blender page loading animation
        // pageIntroTl.add(function(){props.setInPage(!props.inPage)})
        pageIntroTl.to(".main-image-1", {width:"100%", top:"100vh", duration:1, ease: "power3.out"})
        pageIntroTl.to(".page-contents", {marginTop: "-59em", duration:1, ease: "power3.out"})
    })

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const trackMouse = (e:React.MouseEvent) => { //mouse tracking function
        if(props.inPage){
            setMouseX(0);
            setMouseY(0);
        } else{
            setMouseX((e.clientX - window.innerWidth/2)/window.innerWidth*2);
            setMouseY((e.clientY - window.innerHeight/2)/window.innerHeight*2);
        }
    }
    useEffect(() => { //handle tracking of main image on mouse move
        gsap.to('.main-image-1 img', {rotationY: mouseX*15, rotationX: mouseY*-5});
    }, [mouseX]);

    useEffect(() => { //handle loading in and out of the page
        if(props.page != 2){
            props.setInPage(false)
            pageIntroTl.reverse();
            gsap.to(".blender-page", {opacity:0, ease:"expo"})
            gsap.to(".blender-page", {display:"none"});
        } else if(props.page == 2){
            gsap.to(".blender-page", {display:"block"});
            gsap.to(".blender-page", {opacity:1, ease:"expo", delay:.4});
        }
    }, [[props.page]]);

    const pageIntro = () => {
        props.setInPage(true);
        pageIntroTl.play();
    }

    const pageOutro = () => {
        pageIntroTl.reverse()
        props.setInPage(false);
    }

    return(
        <div className="blender-page" onMouseMove={trackMouse}>
            <div className="page-1-background">
                <div className="main-image-1" onClick={pageIntro}>
                    <img src={Room} alt="My Room Render" />
                </div>
                <div className="running-banner">
                    <div className="banner-one">
                        <h1>BLENDER-3D</h1>
                    </div>
                    <div className="banner-two">
                        <h1>BLENDER-3D</h1>
                    </div>
                </div>
            </div>
            <div className="page-contents">
                <div className="content-hero">
                    <img src={Room} alt="My Room Render" />
                </div>
                <div className="page-back">
                    <button onClick={pageOutro}>BACK</button>
                </div>
            </div>
        </div>
    );
}
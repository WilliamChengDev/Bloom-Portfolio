import "./Page.css";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from "react";

export default function Page1Blender(props : {
                name: string, 
                setPage: number, 
                setTitle: string, 
                mainImg: string, 
                content: JSX.Element, 
                page : number, 
                inPage : boolean, 
                setInPage : React.Dispatch<React.SetStateAction<boolean>>
        }){

    const[bannerTl] = useState(gsap.timeline({repeat: -1, paused: false}));
    const[pageIntroTl] = useState(gsap.timeline({repeat: 0, paused: true}));
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        //Running banner animation
        bannerTl.to(".banner-one", {marginLeft: '-100vw', duration: 6, ease: "none"});
        bannerTl.to(".banner-one", {marginLeft: '.7em', duration: 0, ease: "none"});
        //Blender page loading animation
        pageIntroTl.to(`#main-image-${props.name}`, {width:"100%", top:"120vh", duration:1, ease: "power2.out"})
        pageIntroTl.to(".page-contents", {marginTop: "-100vh", duration:1, ease: "power3.out"})
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
        gsap.to('.main-image img', {rotationY: mouseX*15, rotationX: mouseY*-5});
    }, [mouseX]);

    useEffect(() => { //handle loading in and out of the page
        if(props.page != props.setPage){
        //     props.setInPage(false)
            pageIntroTl.reverse();
            gsap.to(`#${props.name}`, {opacity:0, ease:"expo"})
            gsap.to(`#${props.name}`, {display:"none"});
        } else if(props.page == props.setPage){
            gsap.to(`#${props.name}`, {display:"block"});
            gsap.to(`#${props.name}`, {opacity:1, ease:"expo", delay:.4});
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

    const test = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e.target)
    }

    return(
        <div id={props.name} className="page" onMouseMove={trackMouse}>
            <div className="page-background">
                <div id={`main-image-${props.name}`} className="main-image" onClick={() => pageIntro()}>
                        <img src={props.mainImg} alt="My Room Render" />
                </div>
                <div className="running-banner">
                    <div className="banner-one">
                        <h1>{props.setTitle}</h1>
                    </div>
                    <div className="banner-two">
                        <h1>{props.setTitle}</h1>
                    </div>
                </div>
            </div>
            <div className="page-contents">
                <div className="inner-content" onClick={(e) => test(e)}>
                        {props.content}
                </div>
                <div className="page-back">
                        <button onClick={() => pageOutro()}>BACK</button>
                </div>
            </div>
        </div>
    );
}
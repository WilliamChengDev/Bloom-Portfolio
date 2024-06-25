import './TopRow.css';
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LoaderIconSmall } from "./loaderIconSmall";
import { MenuIcon } from './MenuIcon';
import GithubLogo from './GithubLogo';
import LinkedInLogo from './LinkedInLogo';

export default function TopRow(props : {setPage : any}){
    
    gsap.registerPlugin(useGSAP);

    const [iconI] = useState(gsap.timeline({paused: true})); //gotta store timeline in state so it doesn't reload on DOM rerender
    
    useGSAP(() => {
        iconI.to(".cls-s", {duration:.3, strokeDashoffset:60, ease:"expo.in"});
        iconI.to("#circlesmall", {duration:.3, scale:4, transformOrigin: "center"});
        iconI.fromTo("#home", {opacity:0, scale:0.5, transformOrigin: "center"}, {opacity: 1, scale:.8, duration:.3, transformOrigin: "center", delay:.2}, '<');

        menuTl.fromTo(".menu-contents", {display:"none"}, {display:"flex", duration:0})
        menuTl.fromTo(".menu",{backgroundColor:'#f4f0e8'}, {backgroundColor:'#34412c', height:'1000%', ease: "power3.out", duration:.5});
        menuTl.fromTo("#menu-icon .cls-5", {stroke: '#34412c'}, {stroke: '#f4f0e8', duration:.5}, '<');
        menuTl.fromTo(".menu-contents", {opacity:0}, {opacity:1}, "<")
        menuTl.set(".menu", {filter: 'drop-shadow(1px 1px 10px rgba(0,0,0,0.4)'});
    });
    const HomeIconIn = () => {
        iconI.play();
    }
    const HomeIconOut = () => {
        iconI.reverse();
    }

    const [openMenu, setOpenMenu] = useState(true);
    const [menuTl] = useState(gsap.timeline({paused: true}));
    const expandMenu = () => {
        if(openMenu){
            menuTl.play();
            setOpenMenu(false);
        } else{
            menuTl.reverse();
            setOpenMenu(true);
        }
    }

    return(
        <div className='top-row'>
            <div className='icon-container' onMouseEnter={HomeIconIn} onMouseLeave={HomeIconOut}>
                <LoaderIconSmall onClick={() => props.setPage(0)}/> {/*use prop to set page state to 0 on App.tsx*/}
            </div>
            <div className='menu'>
                <div className='menu-icon-container' onClick={expandMenu}>
                    <MenuIcon id='menu-icon'/>
                </div>
                <div className='menu-contents'>
                    <div className='row1'>
                        <a className='menu-compartment' href='https://www.linkedin.com/in/william-cheng-39a06027a' target='_blank'>
                            <LinkedInLogo/>
                            <h1>LinkedIn</h1>
                        </a>
                        <a className='menu-compartment' href='https://github.com/WilliamChengDev?tab=repositories' target='_blank'>
                            <GithubLogo/>
                            <h1>GitHub</h1>
                        </a>
                    </div>
                    <div className='row1'>

                    </div>
                </div>
            
            </div>
        </div>
    );
}
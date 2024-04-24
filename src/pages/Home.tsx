import './Home.css';
import HomeSubPage from '../components/HomeSubPage';
import { LoaderIconSmall } from '../components/loaderIconSmall';
import FlowerIMG from "../assets/Blue_Flower.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from 'gsap-trial/all';


export default function Home(){
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
                <img src={FlowerIMG} alt="" />
            </div>
            <div className='top-row'>
                <div className='icon-container' onMouseEnter={HomeIconIn} onMouseLeave={HomeIconOut}>
                    <LoaderIconSmall/>
                </div>
            </div>
            <div className='bloom-container'>
                <h1 className='bloom'>BLOOM</h1>
            </div>
            <HomeSubPage/>
        </div>
    )
}
import './HomeSubPage.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap-trial/all';
import Subpage1 from './subpage1';
import Subpage2 from './subpage2';


export default function HomeSubPage(){
    // ScrollTrigger.normalizeScroll({ target: ".home-page", allowNestedScroll: true, type: "touch,scroll,pointer" });
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    ScrollTrigger.normalizeScroll({ target: ".home-page", allowNestedScroll: true })
    // ScrollTrigger.addEventListener("scrollStart", () => gsap.ticker.add(ScrollTrigger.update));
    // ScrollTrigger.addEventListener("scrollEnd", () => gsap.ticker.remove(ScrollTrigger.update));

    useGSAP(() => {
        var page1pin = gsap.timeline({
            scrollTrigger:{
                anticipatePin: 1,
                scroller: ".home-page",
                trigger:"#subpage1",
                start: "top top+=120em",
                end: "1000% center",
                scrub:true,
                markers: true,
                pin:"#subpage1",
                pinType: "fixed",
              }
        })
        var page2pin = gsap.timeline({
            scrollTrigger:{
                scroller: ".home-page",
                trigger:"#subpage2",
                start: "top top+=120em",
                end: "612.7% center",
                scrub:true,
                markers: true,
                pin:"#subpage2",
                pinType: "fixed",
              }
        })
        var page3pin = gsap.timeline({
            scrollTrigger:{
                scroller: ".home-page",
                trigger:"#subpage3",
                start: "top top+=120em",
                end: "250% center",
                scrub:true,
                markers: true,
                pin:"#subpage3",
                pinType: "fixed",
              }
        })
    });

    return(
        // <div className='sub-page-scroller'>
        <div className='sub-page-container'>
                <div id='subpage1' className="home-sub-page">
                </div>
                <div id='subpage2' className="home-sub-page">
                </div>
                <div id='subpage3' className="home-sub-page">
                </div>
        </div>
        // </div>
    )
}
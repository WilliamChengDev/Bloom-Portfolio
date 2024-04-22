import "./subpage1.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap-trial/all';

export default function subpage1() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    var subpage1tl2 = gsap.timeline({
      scrollTrigger:{
        scroller: ".home-page",
        trigger:"#row2-1",
        start: "top+=700em top+=500em",
        end: "120% center",
        scrub:true,
        markers: false,
      }
    })
    subpage1tl2.fromTo("#row2-1",{marginTop: "-50em"}, {marginTop:"0em", ease:"none"});
    subpage1tl2.fromTo("#row2-2",{marginTop: "-20em"}, {marginTop:"-5em", ease:"none"}, '<');
    subpage1tl2.to("#row2-3", {marginTop:"-40em", ease:"none"}, '<');
  })

  return (
    <div className="subpage-content">
      <div className="row-scroller">
        <div id="row2-1" className="image-row">
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
        </div>
      </div>
      <div className="row-scroller">
        <div id="row2-2" className="image-row">
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
        </div>
      </div>
      <div className="row-scroller">
        <div id="row2-3" className="image-row">
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
          <div className="image-cell"></div>
        </div>
      </div>
      
    </div>
  )
}
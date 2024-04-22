import "./subpage1.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap-trial/all';
//IMAGES
import GUITAR from "../assets/Blender/Compressed/4k Guitar .05 threshold copy.png";
import GTR from "../assets/Blender/Front Left 4K render.jpg";
import LANTERN from "../assets/Blender/Compressed/Lanterns copy.png";
import ROOM from "../assets/Blender/Compressed/My Room.png";
import PHONE from "../assets/Blender/Compressed/Phone Booth HQ copy.png";
import FERRARI from "../assets/Blender/Compressed/Ferrari 458.png";
import ML from "../assets/Blender/Compressed/Mad Libs.png";
import PORSCHE from "../assets/Blender/Compressed/porsche composited2 copy.png";

export default function subpage1() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    var subpage1tl1 = gsap.timeline({
      scrollTrigger:{
        scroller: ".home-page",
        trigger:"#row1-1",
        start: "top top+=30em",
        end: "95% center",
        scrub:true,
        markers: false,
      }
    })
    var subpage1tl2 = gsap.timeline({
      scrollTrigger:{
        scroller: ".home-page",
        trigger:"#row1-2",
        start: "top+=373em top+=30em",
        end: "120% center",
        scrub:true,
        markers: false,
      }
    })
    subpage1tl1.to("#row1-1", {marginTop:"-33.3em", ease:"none"});
    subpage1tl1.to("#row1-2", {marginTop:"-1em", ease:"none"}, '<');
    subpage1tl1.to("#row1-3", {marginTop:"-50em", ease:"none"}, '<');
  })

  return (
    <div className="subpage-content">
      <div className="row-scroller">
        <div id="row1-1" className="image-row">
          <div className="image-cell"><img src={FERRARI} alt="Nissan GTR" /></div>
          <div className="image-cell"><img src={GTR} alt="" /></div>
          <div className="image-cell"><img src={LANTERN} alt="" /></div>
          <div className="image-cell"></div>
        </div>
      </div>
      <div className="row-scroller">
        <div id="row1-2" className="image-row">
          <div className="image-cell"><img src={ROOM} alt="" /></div>
          <div className="image-cell"><img src={PHONE} alt="" /></div>
          <div className="image-cell"><img src={GUITAR} alt="" /></div>
          <div className="image-cell"></div>
        </div>
      </div>
      <div className="row-scroller">
        <div id="row1-3" className="image-row">
          <div className="image-cell"></div>
          <div className="image-cell"><img src={ML} alt="" /></div>
          <div className="image-cell"><img src={PORSCHE} alt="" /></div>
          <div className="image-cell"></div>
        </div>
      </div>
      
    </div>
  )
}
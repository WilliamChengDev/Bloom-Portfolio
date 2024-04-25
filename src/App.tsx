import './App.css'
import Loader from './pages/Loader'
import Home from './pages/Home'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from 'gsap-trial/all';

export default function App() {
  gsap.registerPlugin(useGSAP, DrawSVGPlugin);

  useGSAP(() => { //main animation timeline
      console.log('page loaded')
      var loadertl = gsap.timeline({repeat:0});
      loadertl.to(".cls-1", {duration:.8,drawSVG: false, stagger:0.1});
      loadertl.to(".cls-1", {duration:1,drawSVG: true, stagger:0.1, ease: 'expo'});
      loadertl.to(".cls-1", {duration:.8,drawSVG: false, stagger:0.1, ease: 'expo'});
      loadertl.to("#circle", {duration:.5, opacity:0});
      loadertl.to(".loader-bg", {duration:.8, opacity:0, ease: 'power4.in'}, '<');
      loadertl.fromTo("#line1",{translateX: '-200%'}, {duration:5, translateX: '0%', ease: 'power3.out'}, '<90%');
      loadertl.from("#line2", {duration:5, translateX: '280em', ease: 'power2'}, '<');
      loadertl.from("#line3", {duration:5, translateX: '-400em', ease: 'power2.out'}, '<');
      loadertl.fromTo("#line4",{translateX: '-200%'}, {duration:4.4, translateX: '0%', ease: 'power4'}, '<');
      loadertl.fromTo("#line5",{translateX: '0%'}, {duration:4.5, translateX: '-285%', ease: 'power2'}, '<');
      loadertl.fromTo('#targetmaking',{opacity:.5}, {opacity:1}, '<75%');
      loadertl.fromTo('#targetideas',{opacity:.5}, {opacity:1}, '<75%');
      loadertl.to('.line', {opacity:0, delay: .5});
      loadertl.to('.loader-contents', {opacity:0}, '<');
      loadertl.to('.loader-contents', {display:"none"}, '<');
      //BELOW IS FROM home.tsx
      loadertl.fromTo('.top-row', {display: "none"}, {display: "unset", delay: 0.01}, '<');
      loadertl.fromTo(".flower-container", {opacity: 0}, {opacity:1, delay:.7}, '<');
  });

  return (
    <>
      <Loader/>
      <Home/>
    </> 
  )
}

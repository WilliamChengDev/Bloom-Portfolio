import './App.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import PreLoader from './components/PreLoader';
import TransitionCover from './components/TransitionCover';
import Loader from './pages/Loader'
import TopRow from './components/TopRow';
import Home from './pages/Home'
import Page1Blender from './pages/Page1Blender';
import Page2Journalism from './pages/Page2Journalism';

export default function App() {
  gsap.registerPlugin(useGSAP);
  const[loaded, setLoaded] = useState(false); //to track whether the component is loaded
  const[loadertl] = useState(gsap.timeline({paused: true})); //intro animation timeline
  const[introRunning, setIntroRunning] = useState(true); //check if the intro sequence is running

  useGSAP(() => { //main animation timeline
      loadertl.to(".loader-bg", {duration:.8, opacity:0, ease: 'power4.in', delay:2.8}); //hide preloader, delay for final preload animation
      loadertl.to(".loader-bg", {display:"none"}); //remove preloader
      loadertl.fromTo("#line1",{translateX: '-200%'}, {duration:5, translateX: '0%', ease: 'power3.out'}, '<90%'); //text line animation
      loadertl.from("#line2", {duration:5, translateX: '280em', ease: 'power2'}, '<'); //text line animation
      loadertl.from("#line3", {duration:5, translateX: '-400em', ease: 'power2.out'}, '<'); //text line animation
      loadertl.fromTo("#line4",{translateX: '-200%'}, {duration:4.4, translateX: '0%', ease: 'power4'}, '<'); //text line animation
      loadertl.fromTo("#line5",{translateX: '0%'}, {duration:4.5, translateX: '-285%', ease: 'power2'}, '<'); //text line animation
      loadertl.fromTo('#targetmaking',{opacity:.5}, {opacity:1}, '<75%'); //show "making"
      loadertl.fromTo('#targetideas',{opacity:.5}, {opacity:1}, '<75%'); //show "ideas"
      loadertl.to('.loader-contents', {opacity:0, delay:.5}); //hide lines animation
      loadertl.to('.loader-contents', {display:"none"}); //display none, potentially better for performance compared to opacity 0
      //BELOW IS FROM home.tsx
      loadertl.fromTo(".title", {opacity: 0}, {opacity:1, delay:0.1}, '<');
      loadertl.fromTo(".flower-container", {opacity: 0}, {opacity:1, delay:.8}, '<');
      loadertl.fromTo('.top-row', {opacity:0}, {opacity:1}, '<');
      loadertl.add(function(){setIntroRunning(false)}, "+=1");
  });

  useEffect(() => { //called when component is mounted
    console.log('page loaded');
    setLoaded(true); //set loaded to true, passes this info to Preloader
  }, []);
  const startPage = () => { //Preloader triggers this function, starts playing the intro
      loadertl.play();
  }

  const[scroll, setScroll] = useState(0); //scrolling var
  const[pages] = useState([1, 2, 3]); //keep track of pages
  const scrollInProgress = useRef(false); //boolean for throttling
  console.log("on page " + pages[scroll]); //debugging
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if(introRunning){return;} //if intro is running do nothing
    if(scrollInProgress.current){return;} //if scrolling do nothing
    scrollInProgress.current = true; //if not set scrolling to true
    if(e.deltaY > 0 && scroll+1 < pages.length){ //if scrolling up
      setScroll((prev) => prev+1); //update scroll
    }
    else if(e.deltaY < 0 && scroll-1 >= 0){
      setScroll((prev) => prev-1); //update scroll
    }
    setTimeout(() => { //check every 1000ms
      scrollInProgress.current = false; //set scrolling to false
    }, 1500);
  }

  return (
    <>
      <PreLoader loaded={loaded} trigger = {startPage}/>
      <div className='app-container' onWheel={(e) => handleScroll(e)}>
        <TransitionCover page={pages[scroll]} intro={introRunning}/> {/* only triggers animation when scroll changes */}
        <Loader/>
        <TopRow setPage={setScroll}/>
        <Home page={pages[scroll]}/>
        <Page1Blender page={pages[scroll]}/>
        <Page2Journalism page={pages[scroll]}/>
      </div>
    </> 
  )
}

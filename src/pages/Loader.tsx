import { LoaderIcon } from '../components/loaderIcon'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from 'gsap-trial/all';
import './Loader.css'

export default function Loader() {

    gsap.registerPlugin(useGSAP, DrawSVGPlugin);

    useGSAP(() => {
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
        // loadertl.fromTo('.top-row', {display: "none"}, {display: "unset", delay: 0.01}, '<');
        loadertl.fromTo(".bloom", {opacity: 0}, {opacity:1, delay:.3}, '<');
        loadertl.fromTo(".flower-container", {opacity: 0}, {opacity:1, delay:.3}, '<');
        loadertl.fromTo('.bloom', {fontSize:'10em'}, {fontSize: '2em', translateY:'-1em' ,duration:2, delay:1});

    });

    return (
        <div className='loader-contents'>
            <div className='loader-bg'>
                <div className='loader-container'>
                    <LoaderIcon/>
                </div>
            </div>
            <div className='intro-bg'>
                <div className='line' id='line1'>
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1>  
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1> 
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1> 
                </div>
                <div className='line' id='line2'>
                    <h1>Fusion</h1>
                    <h1>Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                    <h1>Fusion</h1>
                    <h1 >Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                    <h1>Fusion</h1>
                    <h1 id='targetmaking'>Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                </div>
                <div className='line' id='line3'>
                    <h1>Artistry</h1>
                    <h1 id='targetideas'>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                    <h1>Artistry</h1>
                    <h1>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                    <h1>Artistry</h1>
                    <h1>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                </div>
                <div className='line' id='line4'>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                </div>
                <div className='line' id='line5'>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                </div>
            </div>
        </div>
    )
}
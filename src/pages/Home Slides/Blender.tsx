import './Blender.css'
import { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import MyRoom from '../../assets/My Room/My Room.png'
import wireframe from "../../assets/My Room/wireframe.png"
import workbench from "../../assets/My Room/workbench.png"
import shaded from "../../assets/My Room/shading.png"
import render from "../../assets/My Room/render.png"
import MorningStill from "../../assets/My Room/My Room Morning Still.png"
import AfternoonStill from "../../assets/My Room/My Room Afternoon Still.png"
import NightStill from "../../assets/My Room/My Room Night Still.png"

export default function Blender() {
  const[myRoomRowTl] = useState(gsap.timeline({repeat: -1, paused:false}))
  const[stillsTl] = useState(gsap.timeline({repeat:-1, paused: false}))
  gsap.registerPlugin(useGSAP)
  
  useGSAP(() => {
    myRoomRowTl.fromTo(".my-room-moving-row",{marginLeft:"0%"}, {marginLeft:"-400%", duration:10, ease:"none", delay:1})
    stillsTl.to('#still1', {opacity:1})
    stillsTl.to('#still1', {opacity:0, delay:2, duration:0})
    stillsTl.to('#still2', {opacity:1})
    stillsTl.to('#still2', {opacity:0, delay:2, duration:0})
    stillsTl.to('#still3', {opacity:1})
    stillsTl.to('#still3', {opacity:0, delay:2, duration:0})
  })

  return (
    <div className="blender-page">
      <div className='blender-hero-img'>
        <div className='my-room-title'>
          <h1>MY ROOM</h1>
        </div>
        <img src={MyRoom} alt="My room render" />
      </div>
      <div className='blender-row-1'>
        <div className='my-room-description'>
          <div className='text-container'>
            <p>Welcome to "My Room," a timelapse animation that brings my personal living space to life. This project is a digital recreation of my actual room, rendered in Blender. Using a realistic sunlight simulator, I imported actual geographic coordinates to achieve precise and natural lighting throughout the day.</p>
          </div>
        </div>
        <div className='my-room-video'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rniFWXm3BNM?si=-_v5PhFbOnNjKHqv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className='blender-row-animation'>
        <div className='my-room-moving-row'>
          <img src={wireframe} alt="" />
          <img src={workbench} alt="" />
          <img src={shaded} alt="" />
          <img src={render} alt="" />
          <img src={wireframe} alt="" />
        </div>
      </div>
      <div className='blender-row-1'>
        <div className='text-container'>
          <p>The animation captures my room over an entire day, showcasing the changes in light and activity. From the fabric on the bed, created using Blender's cloth simulation, to the interactive elements like dressers opening and closing and screens flickering on and off, every detail has been crafted to reflect my daily life.</p>      
        </div>
      </div>
      <div className='blender-row-1'>
        <div className='my-room-stills'>
          <img id='still1' src={MorningStill} alt="" />
          <img id='still2' src={AfternoonStill} alt="" />
          <img id='still3' src={NightStill} alt="" />
        </div>
        <div className='text-container-block'>
          <p>Through "My Room," I aim to offer viewers a glimpse into my personal world, highlighting the comfort and chaos that come together to create a lived-in space.</p>
        </div>
      </div>
    </div>
  )
}
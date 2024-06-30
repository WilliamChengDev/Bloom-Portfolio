import { useEffect, useState } from "react"
import "./Cursor.css"
import { gsap } from "gsap-trial"
import { useGSAP } from "@gsap/react"

export default function Cursor(props: {mouseX: number, mouseY:number}) {
        const[scale, setScale] = useState(.1);
        gsap.registerPlugin(useGSAP);

        useEffect(() => {
                const yPosition = props.mouseY - screen.height*scale/2;
                const xPosition = props.mouseX - screen.width*scale/2 + screen.width*.2*scale;
                gsap.to(".cursor", {top:yPosition, left:xPosition})
                if(props.mouseY <= screen.height*0.08){
                        setScale(0.015);
                        gsap.to(".cursor", {width:"1.5vw", backgroundColor:"var(--font-color)"})
                }else{
                        setScale(.1);
                        gsap.to(".cursor", {width:"10vw", background:"rgba(255, 255, 255, 0.2)"})
                }
        }, [props.mouseX, props.mouseY])

        return (
                <>
                        <div className="cursor"></div>
                </>
        )
}
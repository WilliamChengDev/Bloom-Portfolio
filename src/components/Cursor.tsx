import { useEffect } from "react"
import "./Cursor.css"
import { gsap } from "gsap-trial"
import { useGSAP } from "@gsap/react"

export default function Cursor(props: {mouseX: number, mouseY:number}) {
        gsap.registerPlugin(useGSAP);

        useEffect(() => {
                const yPosition = props.mouseY - window.innerHeight*0.05;
                const xPosition = props.mouseX - window.innerWidth*0.05;
                console.log("tracking position")
                gsap.to(".cursor", {top:yPosition, left:xPosition})
        }, [props.mouseX, props.mouseY])

        return (
                <>
                        <div className="cursor"></div>
                </>
        )
}
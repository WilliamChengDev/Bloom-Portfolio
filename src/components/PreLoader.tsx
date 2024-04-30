import './PreLoader.css'
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { LoaderIcon } from "./loaderIcon";

export default function PreLoader(props: {loaded: boolean, trigger: Function}){
    const [loadertl] = useState(gsap.timeline({repeat:0, paused: true}));
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        loadertl.to(".cls-1", {duration:.8, strokeDashoffset:165, stagger:0.1, ease:"power2.out"});
        loadertl.to(".cls-1", {duration:.8, strokeDashoffset:0, stagger:0.1, ease:"expo"});
    });


    useEffect(() => {
        if(props.loaded){
            console.log("in final repeat");
            loadertl.play();
            props.trigger();
        } else {
            loadertl.play();
        }
    }, [props.loaded]);

    return(
        <div className='loader-bg'>
                <div className='loader-container'>
                    <LoaderIcon/>
                </div>
        </div>
    );
}
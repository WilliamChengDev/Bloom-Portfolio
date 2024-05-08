import "./Page1Blender.css";
import Room from "../assets/Blender/Compressed/My Room.png"

export default function Page1Blender(){
    return(
        <>
            <div className="page-1-background">
                <div className="main-image-1">
                    <img src={Room} alt="Porche 911 Blender Render" />
                </div>
                <div className="running-banner">
                    <h1>BLENDER-3D</h1>
                    <h1>BLENDER-3D</h1>
                </div>
            </div>
        </>
    );
}
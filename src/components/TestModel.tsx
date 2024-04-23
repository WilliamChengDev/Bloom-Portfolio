import { OrbitControls } from "@react-three/drei";
import { HomeModel } from "./HomeModel";

export const TestModel = () => {
    return(
        <>
            <OrbitControls />
            <HomeModel/>
            <ambientLight intensity={.1}/>
        </>
    );
}
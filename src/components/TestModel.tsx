import { OrbitControls } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";

export const TestModel = () => {
    return(
        <>
            <OrbitControls />
            <HomeModelBaked/>
            <ambientLight intensity={2}/>
            <fog attach="fog" color="#f4f0e8" near={2} far={7} />
        </>
    );
}
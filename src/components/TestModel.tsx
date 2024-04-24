import { OrbitControls } from "@react-three/drei";
import { HomeModelBaked } from "./HomeModelBaked";

export const TestModel = () => {
    return(
        <>
            <OrbitControls />
            <HomeModelBaked/>
            <ambientLight intensity={1}/>
            <fog attach="fog" color="#f4f0e8" near={1} far={8} />
        </>
    );
}
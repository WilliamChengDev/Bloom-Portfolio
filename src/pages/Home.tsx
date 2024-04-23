import './Home.css';
import HomeSubPage from '../components/HomeSubPage';
import { LoaderIconSmall } from '../components/loaderIconSmall';
import { Canvas } from '@react-three/fiber';
import { TestModel } from '../components/TestModel';


export default function Home(){

    return(
        <div className='home-page'>
            <div className='flower-container'>
                <Canvas>
                    <fog attach="fog" color="#f4f0e8" near={.1} far={10} />
                    <TestModel/>
                </Canvas>
            </div>
            <div className='top-row'>
                <div className='icon-container'>
                    <LoaderIconSmall/>
                </div>
            </div>
            <div className='bloom-container'>
                <h1 className='bloom'>BLOOM</h1>
            </div>
        </div>
    )
}
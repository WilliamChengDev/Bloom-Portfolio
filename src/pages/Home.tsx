import './Home.css';
import HomeSubPage from '../components/HomeSubPage';
import { LoaderIconSmall } from '../components/loaderIconSmall';
import FlowerIMG from "../assets/Blue_Flower.png";


export default function Home(){

    return(
        <div className='home-page'>
            <div className='flower-container'>
                <img src={FlowerIMG} alt="" />
            </div>
            <div className='top-row'>
                <div className='icon-container'>
                    <LoaderIconSmall/>
                </div>
            </div>
            <div className='bloom-container'>
                <h1 className='bloom'>BLOOM</h1>
            </div>
            <HomeSubPage/>

            
        </div>
    )
}
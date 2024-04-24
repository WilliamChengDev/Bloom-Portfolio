import { LoaderIcon } from '../components/loaderIcon'
import './Loader.css'

export default function Loader() {
    return (
        <div className='loader-contents'>
            <div className='loader-bg'>
                <div className='loader-container'>
                    <LoaderIcon/>
                </div>
            </div>
            <div className='intro-bg'>
                <div className='line' id='line1'>
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1>  
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1> 
                    <h1>Versatility</h1>
                    <h1>Chic</h1>
                    <h1>Fusion</h1> 
                </div>
                <div className='line' id='line2'>
                    <h1>Fusion</h1>
                    <h1>Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                    <h1>Fusion</h1>
                    <h1 >Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                    <h1>Fusion</h1>
                    <h1 id='targetmaking'>Making</h1>
                    <h1>Aesthetic</h1>  
                    <h1>Chic</h1>  
                </div>
                <div className='line' id='line3'>
                    <h1>Artistry</h1>
                    <h1 id='targetideas'>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                    <h1>Artistry</h1>
                    <h1>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                    <h1>Artistry</h1>
                    <h1>Ideas</h1>
                    <h1>Chic</h1>  
                    <h1>Creativity</h1>  
                    <h1>Versatility</h1>
                </div>
                <div className='line' id='line4'>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='creativity'>Creativity</h1>  
                    <h1 className='versatility'>Versatility</h1>
                </div>
                <div className='line' id='line5'>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                    <h1 className='imagination'>Imagination</h1>
                    <h1 className='versatility'>Versatility</h1>
                    <h1 className='fusion'>Fusion</h1>
                </div>
            </div>
        </div>
    )
}
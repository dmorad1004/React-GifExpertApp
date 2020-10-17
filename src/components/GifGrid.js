import React from 'react'
import { useFecthGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({
    category
}) => {


        const {data:images,loading}=useFecthGifs(category);


   
        return (
            <>
            <h3 className=" animate__animated animate__fadeInUp">{ category }</h3>
            {loading && <p>Loading</p>}
             <div className='card-grid'>
        
                {
                    images.map ((img)=>(
                        <GifGridItem 
                        key={img.id}
                        {...img} // propiedades de manera independiente

                         />
                    ))
                }
            
            </div> 
            </>
        )

    
}
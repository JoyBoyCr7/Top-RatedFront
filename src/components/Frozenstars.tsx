import {FaStar} from 'react-icons/fa'
import { useState } from 'react';

interface PropType {
    rating: any;
  }

const Starfrozen = (props:PropType) => {
    const [rating, setRating] = useState<number | null>(null)
    const [_, setHover] = useState<number | null>(null)
    console.log(rating)
    return ( 
    <>
        {[...Array(5)].map((_, ind) => {
            const ratingValue = ind + 1
        return (
        <label key={ind}>
            <input style={{display:'none'}} type='radio' value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar className='star' color={ratingValue <= ( props.rating ) ? "#FFD700": "#6B6B6B"} size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
        </label> 
        );
         })}
    </>
    );
};

export default Starfrozen
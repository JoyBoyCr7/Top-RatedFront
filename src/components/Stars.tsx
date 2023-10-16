import { FaStar } from 'react-icons/fa';
import  { useState } from 'react';

interface PropType {
  rating: any;
  changeRating: any;
}

const StarRating = (props: PropType) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div style={{ textAlign: 'left' }}>
      {[...Array(5)].map((_, ind) => {
        const ratingValue = ind + 1;

        return (
          <label key={ind}>
            <input name="rating"
              style={{ display: 'none' }}
              type='radio'
              value={ratingValue}
              onClick={() => props.changeRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || props.rating) ? '#FFD700' : '#6B6B6B'}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
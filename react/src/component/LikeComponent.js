import React, { useState } from 'react';

export default function LikeComponent({user, movie, like}) {
    
    const [likes, setLikes] = useState(user.likes.some(e => e.movie === movie.id));

    const changeLike = (value) => {
        setLikes(!likes);

        like(value);
    }

    return(
        <>
            {likes ?
                <span style={{'height':'17px'}} onClick={() => changeLike(false)}><i className='fas fa-heart'></i></span>
                : 
                <span style={{'height':'17px'}} onClick={() => changeLike(true)}><i className='far fa-heart'></i></span>
            }
        </>
    );
}
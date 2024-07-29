import React from 'react'
import heart from "../../assets/icon/heart-black.png"
import heartFilled from "../../assets/icon/heart-filled.png"

const ShoeTagIsFavorite = ({ isFav = false }) => {
    return (
        isFav ? <div className='shoe-tag__is-fav'>
            <img src={heartFilled} alt="Heart filled" />
        </div>
            : <div className='shoe-tag__is-fav'>
                <img src={heart} alt="Heart" />
            </div>
    )
}

export default ShoeTagIsFavorite
import React from 'react'
import { Link } from "react-router-dom";

function Card({item}) {
  return (
    <Link to={`/product/${item.id}`}>
        <div className='Card'>
            <div className="card-image">
                <span>{item.isNew && <span className='featured'>featured</span>}</span>
                <img src={item.img} className='main-img' alt="" />
                <img src={item.img2} className='second-img' alt="" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card
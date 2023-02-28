import React, { useState } from 'react'
import { useParams } from 'react-router'
import List from '../../Components/List/List'
import './Products.css'

function Products() {

  const catId= parseInt(useParams().id)
  const [maxprice, setmaxprice] = useState();
  const [sort, setsort] = useState();



  return (
    <div className='Products'>
      <div className="Products-left">
        <div className="filterItem">
          <h2>Product Categories </h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor='1'>shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor='2'>Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor='3'>skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='4' value={4} />
            <label htmlFor='4'>shorts</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Filter by Price</h2>
        <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setmaxprice(e.target.value)} />
             <span>{maxprice ? maxprice : 1000}</span> 
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort Buy</h2>
          <div className="inputItem">
            <input type="radio" id='asc'  name="sort" onChange={(e) => setsort("asc")} />
            <label htmlFor='asc'>price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' name="sort" onChange={(e) => setsort('desc')} />
            <label htmlFor='desc'>price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="Products-right">
        <img src="https://images.unsplash.com/photo-1676487918203-0f87bbcd9301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className='product-img' />
        <List catId={catId} maxprice={maxprice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products
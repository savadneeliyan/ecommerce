import React, { useState } from 'react'
import "./Product.css"

function Product() {
  const [selectedImg, setselectedImg] = useState(0)

  const images =[
    "https://images.unsplash.com/photo-1597871761588-97ebfda1eb5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWR1bHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://plus.unsplash.com/premium_photo-1673816569134-0606b9db6d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFkdWx0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  ]
  return (
    <div className='product'>
      <div className="product-left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=>setselectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setselectedImg(1)}/>
        </div>
        <div className="mainimg">
          <img src={images[selectedImg? selectedImg : 0]} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h2>long sleeve graphic T-Shirt</h2>
        <span className="price">$ 19.9</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          
        </p>
      </div>
    </div> 
  )
}

export default Product
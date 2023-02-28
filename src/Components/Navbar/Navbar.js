import React from 'react'
import './Navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/flag.jpg" alt=""  className='flagClass'/> 
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link to="/product/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/product/2">Children</Link>
          </div>
          <div className="item">
            <Link to="/product/3">Men</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/ecommerce">HALLOHOM</Link> 
        </div>
        <div className="right"> 
          <div className="center">
            <Link to="/ecommerce">Home</Link> 
          </div>
          <div className="center">
            <Link to="/ecommerce">About</Link> 
          </div>
          <div className="center">
            <Link to="/ecommerce">Contact</Link> 
          </div>
          <div className="center">
            <Link to="/ecommerce">Stores</Link> 
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
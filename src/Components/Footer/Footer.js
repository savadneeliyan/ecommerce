import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="top">
          <div className="footer-item">
            <h1>Categories</h1>
            <Link>Women</Link>
            <Link>men</Link>
            <Link>Shoes</Link>
            <Link>Accessories</Link>
            <Link>New Arrivals</Link>
          </div>
          <div className="footer-item">
            <h1>Links</h1>
            <Link>FAQ</Link>
            <Link>Page</Link>
            <Link>Store</Link>
            <Link>Compare</Link>
            <Link>Cookies</Link>
          </div>
          <div className="footer-item">
            <h1>About</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
          </div>
          <div className="footer-item">
            <h1>Contact</h1>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Footer 
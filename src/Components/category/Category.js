import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'

function Category() {
  return (
    <div className='category'>
        <div className="category-items category-item-1">
            <img src="https://images.unsplash.com/photo-1676369134323-d19cf8bb3a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> new season</Link></button>
        </div>
        <div className="category-items category-item-2">
            <img src="https://images.unsplash.com/photo-1676388134277-a73f1f566be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> accessories</Link></button>
        </div>
        <div className="category-items category-item-3">
            <img src="https://images.unsplash.com/photo-1676549954102-72c14eb49141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> sale</Link></button>
        </div>
        <div className="category-items category-item-4">
            <img src="https://plus.unsplash.com/premium_photo-1661546340024-c38fafcc613c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> men</Link></button>
        </div>
        <div className="category-items category-item-5">
            <img src="https://images.unsplash.com/photo-1676211952237-38dc22d57da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> women</Link></button>
        </div>
        <div className="category-items category-item-6">
            <img src="https://images.unsplash.com/photo-1676429062149-9b2cd05bac1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" srcset="" />
            <button> <Link to={`/`}> shoes </Link></button>

        </div>
    </div>
  )
}

export default Category
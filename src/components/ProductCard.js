import ReactStars from "react-rating-stars-component";
import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className="wishlist-icon postion-absolute">
          <Link><img src="images/wish.svg" alt="wishlist"/></Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' alt='Product image' />
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>
            gwftuywe weuyrtyutr weyrtgutrwegt
          </h5>
          <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src='images/prodcompare.svg' alt='Compare' />
            </Link>
            <Link>
              <img src='images/view.svg' alt='View' />
            </Link>
            <Link>
              <img src='images/add-cart.svg' alt='Addtocart' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
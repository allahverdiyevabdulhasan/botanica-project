import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
import { useWishlist } from 'react-use-wishlist';
import { Link, NavLink } from 'react-router-dom';
import slugify from 'react-slugify';
import { useCart } from 'react-use-cart';



const SingleProduct = ({shopData}) => {
  const { addWishlistItem } = useWishlist();
  const {addItem} = useCart();
  return (
    <div  className=" pt-5 product_card">
      <div className="card">
        <div className="wrapper">
          <div className='d-flex justify-content-end'>
            <Link to={'/wishlist'} onClick={() => addWishlistItem(shopData)}><IoHeartSharp className='wishlist' /></Link>
          </div>
          <figure>
            <div className='img-area'>
              <img src={shopData?.front_img} alt="" className='img-back' />
              <img src={shopData?.back_img} alt="" className='img-front' />
            </div>
          </figure>
        </div>
        <div className='card_content'>
          <div>
            <div className='card_stars'>
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp /> <sup>(0)</sup>
            </div>
            <NavLink to={`/shop/${slugify(shopData.title)}`}>{shopData?.title}</NavLink>
          </div>
          <div className=''>
            <span>${shopData?.price}</span>

            <div className='d-flex flex-column gap-2 card-foot'>
              <div className='d-flex flex-column gap-2 hidden-icons'>
                <div className='icons'>
                  <FaRegCopy />
                </div>
                <div className='icons'>
                  <MdCompareArrows />
                </div>
              </div>
              <div className='icons' onClick={() =>{addItem(shopData)}}>
                < FaBasketShopping />
              </div>
            </div>

          </div>
        </div>
      </div>  

    </div>

  )
}

export default SingleProduct






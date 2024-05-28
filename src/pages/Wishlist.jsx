import React from 'react'
import { useWishlist } from 'react-use-wishlist';

const Wishlist = () => {
    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist
import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Cart = () => {

  const { currency, products, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([])

  return (
    <></>
  )
}

export default Cart

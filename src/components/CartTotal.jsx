import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)
    return (
        <>
            <div className="w-full">
                <div className="text-4xl">
                    <Title text1={"CART"} text2={"TOTAL"} />
                </div>
                <div className="flex flex-col gap-2 mt-2 text-base">
                    <div className="flex justify-between">
                        <p className="">Subtotal</p>
                        <p className="">{currency}{getCartAmount()}.00</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <p className="">Shipping Fees</p>
                        <p className="">{currency}{delivery_fee}.00</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <p className="">Total</p>
                        <p>
                            {currency}
                            {getCartAmount() === 0 ? 0 : Number(getCartAmount()) + Number(delivery_fee)}.00
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotal

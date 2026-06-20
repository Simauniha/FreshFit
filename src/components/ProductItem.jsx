import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <>
            <Link className='cursor-pointer' to={`/product/${id}`}>
                <div className="overflow-hidden">
                    <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="product" />
                </div>
                <p className="pt-3 pb-1 text-lg text-(--primary-900)">{name}</p>
                <p className="text-xl font-medium text-(--neutral-200)">{currency}{price}</p>
            </Link>
        </>
    )
}

export default ProductItem

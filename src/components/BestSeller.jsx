import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    // console.log(products);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // const bestProducts = products.filter((item) => (item.bestSheller));
        const bestProducts = products.filter((item) => item.bestseller);
        setBestSeller(bestProducts.slice(0, 5))
    }, [])
    return (
        <>
            <div className="my-10">
                <div className="text-center text-5xl py-8">
                    <Tittle text1={"BEST"} text2={"SELLER"} />
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-(--neutral-200)">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit dolor sit amet
                    </p>
                </div>
                {/* Feching the products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {
                        bestSeller.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BestSeller

import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="text-center">
                <p className="text-2xl font-medium text-(--primary-900)">
                    Subscribe Now & Get 20% Off
                </p>
                <p className="mt-3 text-(--neutral-300)">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, illum
                </p>
                <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto gap-3 my-6 border border-(--primary-900) pl-3'>
                    <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required />
                    <button type='submit' className='bg-(--primary-900) text-(--accent-100) text-lg px-10 py-4'>Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default NewsletterBox

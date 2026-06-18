import React from 'react'

const Tittle = ({ text1, text2 }) => {
    return (
        <>
            <div className="inline-flex gap-2 items-center mb-3">
                <p className="text-(--soft-bg)">{text1} <span className='text-(--dark) font-medium'>{text2}</span></p>
                <p className="w-8 sm:w-12 h-0 sm:h-0.5 bg-(--dark)"></p>
            </div>
        </>
    )
}

export default Tittle

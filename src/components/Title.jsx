import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <>
            <div className="inline-flex gap-2 items-center mb-3">
                <p className="text-(--primary-600)">{text1} <span className='text-(--primary-900) font-medium'>{text2}</span></p>
                <p className="w-8 sm:w-12 h-0 sm:h-0.5 bg-(--primary-600)"></p>
            </div>
        </>
    )
}

export default Title

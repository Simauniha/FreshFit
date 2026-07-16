import React, { useState } from 'react'
import Title from "../../components/Title"

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  return (
    <>
      <form action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-18 gap-4 text-gray-800'>
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-5xl">
            {currentState}
          </p>
          <hr className="border-none h-[1.5px] w-8 bg-(--primary-900)" />
        </div>
      </form>

    </>
  )
}

export default Login

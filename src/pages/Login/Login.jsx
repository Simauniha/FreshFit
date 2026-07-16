import React, { useState } from 'react'
import Title from "../../components/Title"

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <>
      <form action="" onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-18 gap-4 text-gray-800'>

        <div className="inline-flex items-center gap-2 mb-2 mt-10 text-5xl">
          <Title className="prata-regular" text2={currentState} />
        </div>

        {currentState === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder='Name' required />}
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder='Email' required />
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder='Password' required />

        <div className="w-full flex justify-between text-sm -mt-2">
          <p className="cursor-pointer">Forgot Your Password?</p>
          {
            currentState === 'Login'
              ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p>
              : <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light p-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>

    </>
  )
}

export default Login

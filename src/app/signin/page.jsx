import React from 'react'
import Image from 'next/image'
import Logo from '../components/logo'

const SignIn = () => {
  return (
    <div className='login_bg_gradient bg-cover h-screen flex justify-center items-center'>
       <Logo style="w-52 absolute top-0 left-0 p-8"/>
       <div className='bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6'>
        <h2 className='text-3xl font-medium'>Sign in</h2>
        <button className='bg-white text-black p-2 rounded '>Sign In with Google</button>
       </div>
    </div>
  )
}

export default SignIn

'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '../components/Logo'
import { signIn, useSession } from 'next-auth/react'

const SignIn = () => {

  const session = useSession()
  return (
    <div className='login_bg_gradient bg-cover h-screen flex justify-center items-center'>
       <Logo style="w-52 absolute top-0 left-0 p-8"/>
       <div className='bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6'>
        <h2 className='text-3xl font-medium'>Sign in</h2>
        <div className='flex px-5 py-2 items-center justify-around bg-white rounded'>
          <Image src='/google-logo.webp'width={25}height={25}/>
          <button onClick={()=>signIn('google')} className=' text-black font-medium'>Sign In with Google</button>
        </div>
       </div>
    </div>
  )
}

export default SignIn

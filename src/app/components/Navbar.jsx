"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import {RiNetflixFill} from 'react-icons/ri'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { signOut,useSession} from "next-auth/react";

const Navbar = () => {
  const [open,setOpen]=useState(false)
  const session=useSession()
  const showProfile=()=>{
    setOpen(!open)
    if(session){
      console.log(session)
    }else{
      console.log(session)
    }
  }
  return (
    <nav>
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <Logo style="h-auto w-[100px]" />
          </Link>

          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
              Home
            </li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline">Kids</p>
          <BsBellFill className="h-6 w-6" />

          <Image
            src="/dp.png"
            alt="dp"
            width={200}
            height={200}
            className="cursor-pointer rounded w-auto h-auto"
          />
          <button className='relative' onClick={showProfile}><MdOutlineKeyboardArrowDown size={20}/></button>
          {session.status==='authenticated' ? (
          <div className={open?'absolute top-14 right-5 transition bg-[rgba(0,0,0,0.75)] rounded w-100 h-100 p-5 flex-col justify-start items-center':'hidden'}>
            <div className="flex justify-between items-center pb-5">
            <Image
            src="/dp.png"
            alt="dp"
            width={80}
            height={80}
            className="rounded w-auto h-auto px-2"
          />
          <p className="text-white font-medium text-lg">{session?.data?.user?.name}</p>
          </div>
          <button className='cursor-pointer hover:opacity-80 ml-8 px-5 transition bg-white rounded p-1 text-black border-none'onClick={()=>signOut()}>SignOut</button>
          </div>):(
          <div className={open?'absolute top-14 right-5 transition bg-[rgba(0,0,0,0.75)] rounded w-100 h-100 p-5 flex-col justify-start items-center':'hidden'}>
            <Logo style="h-auto w-[100px] pb-5" />
            <button className="rounded hover:opacity-80 ml-3 transition p-1 px-4 bg-white text-sm text-black border-none cursor-pointer"><Link href='/signin'>Sign in</Link></button>
          </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
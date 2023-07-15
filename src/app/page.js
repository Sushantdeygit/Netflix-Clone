'use client'
import React,{ useState,useEffect}from'react';
import { getServerSession } from 'next-auth'
import requests from './utils/requests';
import {getSession,useSession} from 'next-auth/react';
import axios from 'axios';
import Hero from './components/Hero';

export default function Home({
}) {
  const [post,setPost]=useState([])
  var [update,setUpdate]=useState(0)
  const [isActive,setIsActive]=useState(false)
  useEffect(()=>{
    axios.get(requests.fetchMoviePosters).then((response)=>(
      setPost(response.data.results)))
    const time=setTimeout(()=>{
      setUpdate((prev)=>
        isActive?0:prev+1
      )
    },5000)
    return()=>{clearTimeout(time)}
  },[update])
 
  return (
    <>
      <Hero post={post}  setIsActive={setIsActive}/>
    </>
  );
}
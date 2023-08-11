'use client'
import React,{ useState,useEffect,useMemo}from'react';
import requests from './utils/requests';
import axios from 'axios';
import Hero from './components/Hero';
import { useStateContext } from './stateContext';

export default function Home({
}) {
  const {isActive} =useStateContext()
  const [post,setPost]=useState([])
  var [update,setUpdate]=useState(0)
  useEffect(()=>{
    if(!isActive){
      axios.get(requests.fetchMoviePosters).then((response)=>(
        setPost(response.data.results)))
        console.log(isActive)
    }
    console.log(update)
    const time=setTimeout(()=>{
      if(isActive){
        return setUpdate(0)
        
      }else{
        return setUpdate(prev=>prev+1)
      }
    },8000)
  },[update,isActive])
 
  return (
    <>
      <Hero post={post}/>
    </>
  );
}
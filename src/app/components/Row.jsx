'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Movies from './Movies'

const Row = ({title,fetchData,rowId}) => {
    const [movie,setMovie] =useState([])
    const [love,setLove]=useState(false)
    useEffect(()=>{
        axios.get(fetchData).then((response)=>{
            setMovie(response.data.results)
        })
    },[fetchData])
  return (
    <>
    <Movies movie={movie} title={title} love={love} rowId={rowId}/>
      
    </>
  )
}

export default Row

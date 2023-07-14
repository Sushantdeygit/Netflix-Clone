'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import MovieDetails from './MovieDetails'
import axios from 'axios'
import requests from '../utils/requests'
import Row from './Row'

const Hero = () => {
    const[trailer,setTrailer]=useState('')
    const[showPlayer,setShowPlayer]=useState(false)
    const API_KEY = '9bee9cd2e83a06344bffc0e1a61bdab0'

    const [post,setPost]=useState([])
    
    const movie =post[Math.floor(Math.random() * post.length)]
    useEffect(()=>{
     axios.get(requests.fetchMoviePosters).then((response)=>(
       setPost(response.data.results)

     ))
     axios.get(
      `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${API_KEY}&append_to_response=videos`
    ).then((response) =>{
        const data=response.data
        console.log('data::',data)
        const trailerKey = data.videos.results.findIndex(
          (element) => element.type === "Trailer")
        ;

        const trailerURL = `https://www.youtube.com/watch?v=${data.videos?.results[trailerKey]?.key}`;
        setTrailer(trailerURL);
      })
    },[])
    
  return (
    <div>
      <MovieDetails movie={movie}trailer={trailer}showPlayer={showPlayer}setShowPlayer={setShowPlayer}/>
      <Row rowId='1' title='Trending' fetchData={requests.fetchTrending}/>
      <Row rowId='2' title='Top Rated'fetchData={requests.fetchTopRated}/>
      <Row rowId='3' title='Action 'fetchData={requests.fetchActionMovies}/>
      <Row rowId='4' title='Comedy'fetchData={requests.fetchComedyMovies}/>
      <Row rowId='5' title='Horror'fetchData={requests.fetchHorrorMovies}/>
    </div>
  )
}

export default Hero

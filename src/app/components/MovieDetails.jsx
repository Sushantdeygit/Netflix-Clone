'use client'
import {useState,useMemo} from 'react'
import Navbar from './Navbar'
import { baseUrl } from '../utils/constant'
import Image from 'next/image'
import {AiFillInfoCircle,AiOutlineClose } from 'react-icons/ai'
import dynamic from 'next/dynamic'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReactPlayer =dynamic(()=> import("react-player/lazy"),{ssr:false})

const MovieDetails = ({movie,showPlayer,setShowPlayer,trailer}) => {
  const [animationKey, setAnimationKey] = useState(0);
  useMemo(()=>{
    setAnimationKey(prevKey => prevKey + 1);
  },[movie])
  const truncateStr=(str,len)=>{
    if(str?.length>len){
      return str.slice(0,len)+'...'
    }else{
      return str
    }
  }
  return (
    <div className='h-[650px]'>
    <Navbar/>
    <div className='w-full h-[550px] text-white mb-10'>
        <div className='w-full h-full'>
            <div className='absolute h-full w-screen bg-gradient-to-r from-black z-[1]'></div>
               <Image data-aos='fade-zoom-in'data-aos-duration='1000'key={movie?.id}fill src={`${baseUrl}${movie?.backdrop_path||movie?.poster_path}`}
                className='object-cover'
                alt={movie?.title}/>
            <div key={animationKey} data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500' className='absolute w-full top-[20%] md:p-8 z-[2]'>
              <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                <button onClick={()=>{setShowPlayer(true);}} className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border rounded text-white border-gray-300 py-2 px-3 ml-5 bg-white/20 hover:bg-gray-200 hover:text-black'>
                  <AiFillInfoCircle className='inline-block mx-1' size={22}/>More Info</button>  
                </div>
               <p className=' text-gray-400 text-sm'>Released:{movie?.release_date}</p>
               <p className='my-4 w-full md:max-w-[70%]lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateStr(movie?.overview,160)}</p>
            </div>

            <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => {setShowPlayer(false);}}
            >
              <AiOutlineClose className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailer}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
        </div>
      
      </div>
    </div>
    
  )
}

export default MovieDetails

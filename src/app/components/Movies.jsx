import React from 'react'
import { baseUrl } from '../utils/constant'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Movies = ({movie,title,love,rowId}) => {

    const slideLeft=()=>{
        var slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft -700;
    }
    const slideRight=()=>{
        var slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft +700;
    }
  return (
    <div className='mx-5'>
    <h2 className='text-white font-bold md:text-xl m-4'>{ title }</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft}className='text-black bg-white left-0 rounded-full absolute opacity-50 hover-opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movie.map((item)=>{
                return(
                    <div className='w-[260px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 transform hover:scale-110 transition-all duration-300 ease-in-out'>
                        <img fill key={item?.id} src={`${baseUrl}${item?.backdrop_path||item?.poster_path}`} 
                        className='w-full h-auto block rounded'
                        alt={item?.title}/>
                        <div className='transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full w-full text-center'>{item?.title}</p>
                            <p>{love?<FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
        <MdChevronRight onClick={slideRight} className='text-black bg-white right-0 rounded-full absolute opacity-50 hover-opacity-100 cursor-pointer z-10 hidden group-hover:block'size={40}/>
    </div>
      
    </div>
  )
}

export default Movies

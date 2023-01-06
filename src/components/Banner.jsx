import { useEffect, useState } from 'react';
import '../App.css'
import axios from '../axios'
import requests from '../Request'

const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
      return request;
    }

    fetchData();
  },[])

  console.log(movie)
  
  const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }
  
  return (
    <div className="relative object-contain  banner h-[420px] w-[100vw] text-white z-10" 
    style={{
      backgroundSize: "cover",
      backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition: "center center"
    }}    
    >

      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className='text-[3rem] font-bold pb-[0.3rem]'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="">
          <button className='cursor-pointer bg-[#333] outline-none border-none font-semibold rounded-md px-[2rem] mr-[1rem] py-[0.5rem] transition-all hover:text-[#000] hover:bg-[#e6e6e6]'>Play</button>
          <button className='cursor-pointer bg-[#333] outline-none border-none font-semibold rounded-md px-[2rem] mr-[1rem] py-[0.5rem] transition-all hover:text-[#000] hover:bg-[#e6e6e6]'>My List</button>
        </div>
        <div className="w-[45rem] pt-[1rem] text-[1.2rem] w-max-[360px] h-[80px]">
          {truncate(`${movie?.overview}`, 150)}
        </div>
      </div>
    </div>
  )
}

export default Banner
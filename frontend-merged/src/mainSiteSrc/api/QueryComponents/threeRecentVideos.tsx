import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { YOUTUBE_API_KEY } from './getRecentVideosYT'
import { Link } from 'react-router-dom'
import { useRecentVideosList } from '../queries'



const ThreeRecentVideos = () => {
    
    const {data} = useRecentVideosList()

  return (
    <>
        <ul className='flex flex-col'>
            {data ? data.slice(0,3).map(item=>{
            const {id, snippet} = item;
            const {videoId} = id;
            const {title, thumbnails} = snippet;
            return (
                <div className='p-1' key={videoId}>
                    <Link className='flex' to={`/meetings/${videoId}`}> 
                        <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                        <p className=' meetingsBoxtext p-1'>{title}</p>
                    </Link>
                </div>
            ) 
        }):<div>
                <h5 className=''>No Recent Videos</h5>
            </div>}
        </ul>
    </>
  )
}

export default ThreeRecentVideos
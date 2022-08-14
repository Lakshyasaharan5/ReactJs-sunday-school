import React from 'react'
import { Link } from 'react-router-dom'
import { useUpcomingVideosList } from '../queries'

const ThreeUpcomingVideos = () => {

    // const fetchUpcomingData = async () =>{
    //     const data:fetchRecentDataType = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
    //     .then(res=>{
    //         console.log("fetchUpcomingData call ran")
    //         return res.json()})
    //     const items = data.items.filter(obj=>obj.snippet.liveBroadcastContent === "upcoming")
    //     return items.slice(0,3)
    // } 

    const {data} = useUpcomingVideosList()

  return (
    <>
        <ul>
            {data? data.map(item=>{
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
                <h5 className=''>No Upcoming Videos</h5>
                </div>}
        </ul>
    </>
  )
}

export default ThreeUpcomingVideos
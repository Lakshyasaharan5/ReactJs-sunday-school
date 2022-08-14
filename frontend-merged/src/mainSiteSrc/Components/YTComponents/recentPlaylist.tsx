import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowDropright} from "react-icons/io"
import RecentPlaylistItemsList from '../../api/QueryComponents/recentPlaylistItemsList';
import { useAllPlaylistsData } from '../../api/queries';

const RecentPlaylist = () => {
    const { data } = useAllPlaylistsData()
    

  return (
    <div className=' rounded-lg shadow-lg pt-3 pb-2 px-3 grid gap-3 bg-white'>
        <div>
            <h1 className='text-lg font-bold'>Recent Sermon</h1>
        </div>
        <div >
            <h1 className='text-xl mb-4 font-medium '>{data?.items[0].snippet.title}</h1>
            {data?<RecentPlaylistItemsList playlistId={data?.items[0].id} />:null}
            
            
        </div>
        <div className='flex justify-end'>
            <Link to={`/series/${data?.items[0].id}`}><IoIosArrowDropright size={"30px"} color={"rgb(59 130 246)"} /> </Link>
        </div>
    </div>
  )
}

export default RecentPlaylist
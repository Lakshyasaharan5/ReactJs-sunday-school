import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { getAllPlaylistsData } from '../../api/apiCalls';
import { useAllPlaylistsData } from '../../api/queries';
// import { PlaylistsData } from '../../types/interfacesAndTypes';

const AllPlaylistBox = () => {
    const { data } = useAllPlaylistsData()
    
  return (
    <div className=' rounded-lg shadow-lg p-3 grid gap-3 bg-white'>
        <div >
            <h1 className='text-lg font-bold'>Sermon Series</h1>
        </div>
        <div >
            <div className='grid grid-cols-2 gap-3 '>
                {
                    data?.items.slice(0,6).map(item=>{
                        const {id, snippet} = item;
                        const {title} = snippet;
                        return (
                            <div className='' key={id}>
                                <a href={`/series/${id}`} >
                                    <p className=' '>{title}</p>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex justify-end'>
                <Link to={`/series`}><IoIosArrowDropright size={"30px"} color={"rgb(59 130 246)"} /> </Link>
            </div>
        </div>
    </div>
  )
}

export default AllPlaylistBox
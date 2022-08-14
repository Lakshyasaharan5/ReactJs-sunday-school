import React from 'react'
import { Link } from 'react-router-dom';
import { useAllPlaylistsData } from '../../api/queries';

const SeriesList = () => {
    const { data } = useAllPlaylistsData()

    return (
        <>
                <div className=' px-3'>
                    <p>Results 1 - {data?.pageInfo.totalResults} of {data?.pageInfo.totalResults}</p>
                </div>
                <ul className='grid gap-3 pt-3'>
                {
                    data?.items?.map(item=>{
                        const {id, snippet} = item;
                        const {title} = snippet;
                        return (
                            <div className=' border-b px-4 pb-3' key={id}>
                                <div className=''>
                                    <Link to={`/series/${id}`}>
                                        <p className=' '>{title}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                </ul>
                <div className="clearfix"></div>
        </>
    )
}

export default SeriesList
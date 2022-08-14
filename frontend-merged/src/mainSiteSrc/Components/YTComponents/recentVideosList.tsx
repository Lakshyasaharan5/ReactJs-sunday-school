import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../../api/apiCalls'
import { useAllVideosList } from '../../api/queries'
// import { useAllVideosList } from '../../api/queries'
import { PlaylistItem } from '../../types/interfacesAndTypes'

const RecentVideosList = () => {
    const [playlistData,setPlaylistData] = useState<PlaylistItem[]>([])
    const [nextPageid,setNextPageId] = useState<string|null>(null)
    const [prevPageid,setPrevPageId] = useState<string|null>(null)
    const [totalResults,setTotalResults] = useState(0);
    const [fromResults,setFromResults] = useState(1);
    const [toResults,setToResults] = useState(30);

    const [showPrev,setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const {data} = useAllVideosList();

    useEffect(()=>{
        if(data!==undefined){
            setNextPageId(data.nextPageToken)
            setPlaylistData(data.items);
            setTotalResults(data.pageInfo.totalResults)
            setFromResults(1);
            setToResults(30);
        }
    },[data])
    
    const prevButtonHandler = async ()=>{
        if(playlistData.length<30){
            setFromResults(fromResults-30)
            setToResults(toResults-(totalResults%100))
            const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${prevPageid}&key=${YOUTUBE_API_KEY}`)
            .then(res=>res.json())
            setNextPageId(res.nextPageToken)
            setPrevPageId(res.prevPageToken)
            setPlaylistData(res.items);
            if(res.nextPageToken){
                setShowNext(true)
            }else{
                setShowNext(false)
            }
            if(res.prevPageToken){
                setShowPrev(true)
            }else{
                setShowPrev(false)
            }
            
            window.scrollTo(0, 0);
        }else{
            const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${prevPageid}&key=${YOUTUBE_API_KEY}`)
            .then(res=>res.json())
            setNextPageId(res.nextPageToken)
            setPrevPageId(res.prevPageToken)
            setFromResults(fromResults-30);
            setToResults(toResults-30)
            setPlaylistData(res.items);
            // console.log(res.items)
            if(res.nextPageToken){
                setShowNext(true)
            }else{
                setShowNext(false)
            }
            if(res.prevPageToken){
                setShowPrev(true)
            }else{
                setShowPrev(false)
            }
            
            window.scrollTo(0, 0);
        }
        
        
    }
    const nextButtonHandler = async ()=>{
            const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${nextPageid}&key=${YOUTUBE_API_KEY}`)
            .then(res=>res.json())
            console.log(res)
            if(res.nextPageToken){
                setNextPageId(res.nextPageToken)
                setFromResults(fromResults+30)
                setToResults(toResults+30)
            }
            setPlaylistData(res.items);
            setPrevPageId(res.prevPageToken)
            if(res.items.length<30){
                setFromResults(toResults+1)
                setToResults(totalResults)
            }
            if(res.nextPageToken){
                setShowNext(true)
            }else{
                setShowNext(false)
            }
            if(res.prevPageToken){
                setShowPrev(true)
            }else{
                setShowPrev(false)
            }
            console.log(res)
            
            window.scrollTo(0, 0);
        }

    // console.log(data)
    return (
        
        <div className=' p-3 rounded-[10px]  grid gap-3 bg-white'>
            <div className=' px-3'>
                <p className=' text-sm  '>Results {fromResults} - {toResults} of {totalResults}</p>
            </div>
            <ul className='  border-slate-100 rounded-[10px] divide-y'>
            {
                playlistData?.map(item=>{
                    const { id, snippet} = item;
                    const {title, resourceId} = snippet;
                    return (
                        <div className="   px-3 pb-2 " key={id} >
                            <div className='' >
                                <a href={`/meetings/${resourceId.videoId}`} target="_blank" rel="noopener noreferrer"><p className='mb-0 py-3'>{title}</p></a>
                                {/* <a href={`/meetings/${resourceId.videoId}`} target="_blank" rel="noopener noreferrer"><button className=' watch-btn btn btn-sm btn-outline-dark mx' >watch</button></a> */}
                                
                            </div>
                            
                        </div>
                        
                    );
                })
            }
            </ul>
            <div className=' px-3'>
                {showPrev ? <button className="border-2 px-2 p-1 font-medium text-sm  text-white bg-blue-500 rounded-md  float-left" type="button" onClick={()=>{prevButtonHandler()}}>Prev</button> :null}
                {showNext ? <button className="border-2 px-2 p-1 font-medium text-sm  text-white bg-blue-500 rounded-md float-right" type="button" onClick={()=>{nextButtonHandler()}}>Next</button> :null}
            </div>
            <div className="clearfix"></div>
        </ div>
    );
}

export default RecentVideosList
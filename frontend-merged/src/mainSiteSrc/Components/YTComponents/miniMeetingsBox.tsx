// import React, { useEffect, useState } from 'react'
// import { YOUTUBE_API_KEY } from '../../api/getRecentVideosYT'
import ThreeRecentVideos from '../../api/QueryComponents/threeRecentVideos'
import ThreeUpcomingVideos from '../../api/QueryComponents/threeUpcomingVideos'
// import { youtubeSearchType } from '../../types/interfacesAndTypes'


const MiniMeetingsBox = () => {

  return (
    <div className='container rounded-lg shadow-lg bg-white'>
        <nav className='pt-2'>
            <div className="nav nav-tabs flex justify-between" id="nav-tab" role="tablist">
                <button className="nav-link active px-2 xl:px-3" id="nav-recent-tab" data-bs-toggle="tab" data-bs-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Recent</button>
                <button className="nav-link px-2 xl:px-3" id="nav-live-tab" data-bs-toggle="tab" data-bs-target="#nav-live" type="button" role="tab" aria-controls="nav-live" aria-selected="false">Live</button>
                <button className="nav-link px-2 xl:p-3" id="nav-upcoming-tab" data-bs-toggle="tab" data-bs-target="#nav-upcoming" type="button" role="tab" aria-controls="nav-upcoming" aria-selected="false">Upcoming</button>

            </div>
        </nav>
            <div className="tab-content pb-3" id="nav-tabContent">
                <div className="tab-pane fade show active " id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab" tabIndex={0}>
                    <h5 className='py-2 font-bold' >Recent Meetings</h5>
                    <ThreeRecentVideos/>
                </div>
                <div className="tab-pane fade" id="nav-live" role="tabpanel" aria-labelledby="nav-live-tab" tabIndex={0}>
                    <h5 className=''>No Live Videos</h5>
                    
                </div>
                
                <div className="tab-pane fade" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-upcoming-tab" tabIndex={0}>
                    <h5 className='py-2 font-bold'>Upcoming Meetings</h5>
                    <ThreeUpcomingVideos/>
                </div>
            
            </div>
    </div>
  )
}

export default MiniMeetingsBox
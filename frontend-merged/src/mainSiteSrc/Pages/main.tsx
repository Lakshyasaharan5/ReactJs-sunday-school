import React from 'react'
import AboutBox from '../Components/HomeComponents/AboutBox'
import AddressBox from '../Components/HomeComponents/AddressBox'
import BeershebaCarousel from '../Components/HomeComponents/Carousel'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import PrayerReqBox from '../Components/HomeComponents/PrayerReqBox'
import TimingsBox from '../Components/HomeComponents/TimingsBox'
import AllPlaylistBox from '../Components/YTComponents/AllPlaylistBox'
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox'
import RecentPlaylist from '../Components/YTComponents/recentPlaylist'
import useMediaQuery from '../Hooks/useMediaQuery'

const Main = () => {
  const max_lg = useMediaQuery("(max-width: 1024px)")
  return (
    <>
    {/* #6a9eec */}
    <div className='grid grid-cols-1 gap-4 bg-[#F9F7F7]'>
      <Navbar />
        <main className='container w-full  lg:max-w-6xl md:max-w-4xl  mx-auto '>
          <div className=''>
            <BeershebaCarousel/>
          </div>
          
          <div className='grid place-content-center gap-4 md:grid-cols-3  lg:grid-cols-4 '>
            {/* left column */}
            <div className='grid gap-4 md:col-span-3 md:grid-cols-3'>
            <div className='grid gap-4 md:col-span-1'>
                  <AddressBox/>
                  <TimingsBox/>
              </div>
              <div className='grid gap-4 md:col-span-2'>
                  <div className=''>
                      <RecentPlaylist />
                  </div>
                  <div>
                      <AllPlaylistBox />
                  </div>
              </div>
              <div className='grid md:col-span-3'>
                <AboutBox/>
              </div>
            </div>
             
              {/* right column */}
            <div className={max_lg?'grid md:grid-cols-2 gap-3 md:col-span-3':''}>
                <div className='mb-4'>
                    <MiniMeetingsBox />
                </div>
                <div>
                    <PrayerReqBox/>
                </div>
            </div>
          </div>
        </main>
      <Footer />
    </div>
    </>
  )
}

export default Main
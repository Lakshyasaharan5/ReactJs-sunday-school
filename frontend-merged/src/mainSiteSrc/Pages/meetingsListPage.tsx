import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../Components/HomeComponents/Footer';
import Navbar from '../Components/HomeComponents/Navbar';
import FilterButton from '../Components/YTComponents/FilterButton';
// import MeetingsFilter from '../Components/YTComponents/meetingsFilter';
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox';
// import NaToShow from '../Components/YTComponents/NaToShow';
import RecentVideosList from '../Components/YTComponents/recentVideosList';
import SeriesList from '../Components/YTComponents/seriesList';
import useMediaQuery from '../Hooks/useMediaQuery';

interface MeetingsListProps{
    CurrSermonType:string
}

const MeetingsListPage = (props:MeetingsListProps) => {

    // const sermonType = ["meetings","series"]; 
    const [meetingsDisplay,setMeetingsDisplay] = useState(props.CurrSermonType);
    // const isSm = useMediaQuery('(min-width: 640px)');
    const isMd = useMediaQuery('(min-width: 770px)');
    // const isLg = useMediaQuery('(min-width: 1024px)');

    const handleChange = (event:SelectChangeEvent) => {
        setMeetingsDisplay(event.target.value);

      };
    
    return (
    <>
    <div className='grid grid-cols-1 gap-4'>
    <Navbar />
        <main className='container w-full  lg:max-w-6xl md:max-w-4xl  mx-auto '>
        <div className={isMd?'grid place-content-center gap-4 md:grid-cols-3 lg:grid-cols-7 ':'grid place-content-center gap-4  grid-cols-1 '}>
            
            <div className='grid  gap-4 lg:col-span-5 md:col-span-2' >
                <div className='border rounded-[10px] shadow-lg pt-3  bg-white '>
                    
                    <div className='mx-4 '>
                        <FilterButton
                        meetingsDisplay = {meetingsDisplay}
                        handleChange = {handleChange}
                        />
                    </div>
                    
                    {meetingsDisplay==="meetings"?<RecentVideosList />:null}
                    {meetingsDisplay==="series"?<SeriesList/>:null}
                </div>
            </div>

            {isMd?
            <div className='lg:col-span-2 md:col-span-1'>
                <MiniMeetingsBox />

            </div>:null}
            
        </div>
        </main>
      <Footer />
    </div>
    </>
    );
}

export default MeetingsListPage
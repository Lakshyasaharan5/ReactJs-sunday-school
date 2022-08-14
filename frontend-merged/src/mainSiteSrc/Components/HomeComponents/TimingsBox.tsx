import React from 'react'

const TimingsBox = () => {
  return (
        <div className="rounded-lg shadow-lg p-3 grid gap-3 bg-white">
            <div className=' '>
                <h4 className='border-bottom font-bold text-xl ' >Timings</h4>
            </div>
            <div className=' grid gap-3' >
                <div className='border-bottom'>
                    <div className=''>
                        <h5 className='text-xs font-medium text-gray-500'>Sunday</h5>
                    </div>
                    <div className='font-bold text-sm pb-2'>
                        <p className=''>Worship Service - 10:30 AM</p>
                        <p>Youth Meeting - 3:00 PM</p>
                    </div>
                </div>
                <div className='border-bottom'>
                    <div className=''>
                        <h5 className='text-xs font-medium text-gray-500'>Tuesday</h5>
                    </div>
                    <div className='font-bold text-sm pb-2'>
                        <p className=''>Sisters Meeting - 10:30 AM</p>
                        <p>Bible Study - 7:00 PM</p>
                    </div>
                </div>
                <div className='border-bottom'>
                    <div className=''>
                        <h5 className='text-xs font-medium text-gray-500'>Friday</h5>
                    </div>
                    <div className='font-bold text-sm pb-2'>
                        <p>Prayer Meeting - 7:00 PM</p>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <h5 className='text-xs font-medium text-gray-500'>Saturday</h5>
                    </div>
                    <div className='font-bold text-sm pb-2'>
                        <p>Sisters Fasting Prayer - 10:30 AM</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TimingsBox
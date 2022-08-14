import { Modal } from '@mantine/core'
import React, { useState } from 'react'

const PrayerReqBox = () => {
  const [prayerModalOpened,setPrayerModalOpened] = useState(false)
  const initialValues = {
    full_name:"",
    email:"",
    mobile:"",
    message_subject:"",
    message:""
  }
  const [PrayerDetails,setPrayerDetails] = useState(initialValues) 

  const handleChange = (e:any) =>{
    const target = e.target;
    setPrayerDetails({
      ...PrayerDetails,
      [target.name]:target.value
    })
    console.log(PrayerDetails)
  }
  return (
    <div className='rounded-lg shadow-lg grid gap-3  p-2 py-3 bg-white'>
      <div className='flex justify-start'>
        <p className='text-lg font-semibold'>Prayer Request</p>
      </div>
      <div className="grid grid-cols-3 gap-2 px-2">
        <input type="text" name="full_name" value={PrayerDetails.full_name} onChange={handleChange} className=' col-span-2 rounded-md p-1 px-2 border' placeholder='Full Name' />
        <button className='text-sm font-medium text-white bg-blue-500  rounded-md p-1 px-3  transition duration-500 hover:scale-105 ' onClick={()=>{setPrayerModalOpened(true)}}>Submit</button>
      </div>
        <Modal
            opened={prayerModalOpened}
            onClose={() => {
              setPrayerModalOpened(false)
              setPrayerDetails(initialValues)
            }}
            title="Submit Prayer Request" 
            >
            <div className='grid gap-3'>
              <div className='grid grid-cols-1'>
                <label className=' text-sm font-medium mb-1'>Full Name</label>
                <input type="text" name="full_name" value={PrayerDetails.full_name} onChange={handleChange} className='border rounded-md px-1'/>
              </div>
              <div className='grid grid-cols-1'>
                  <label className=' text-sm font-medium mb-1'>Email</label>
                  <input type="text" name="email" value={PrayerDetails.email} onChange={handleChange} className='border rounded-md px-1'/>
              </div>
              <div className='grid grid-cols-1'>
                  <label className=' text-sm font-medium mb-1'>Mobile</label>
                  <input type="text" name="mobile" value={PrayerDetails.mobile} onChange={handleChange} className='border rounded-md px-1'/>
              </div>
              <div className='grid grid-cols-1'>
                  <label className=' text-sm font-medium mb-1'>Message Subject</label>
                  <input type="text" name="message_subject" value={PrayerDetails.message_subject} onChange={handleChange} className='border rounded-md px-1'/>
              </div>
              <div className='grid grid-cols-1'>
                  <label className=' text-sm font-medium mb-1'>Message</label>
                  <textarea  name="message" value={PrayerDetails.message} onChange={handleChange} className='border rounded-md px-1 h-28'></textarea>
              </div>
              <div className='flex justify-end'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold py-1 px-2 rounded'>Submit</button>
              </div>
            </div>
          </Modal>
    </div>
  )
}

export default PrayerReqBox
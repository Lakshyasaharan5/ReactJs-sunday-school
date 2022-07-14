import React from 'react'
import Header from '../Components/header'
import userImage from '../images/user.png'
import teacherData from '../teacher.json'

export default function TeacherProfile() {

  return (
    <div className='h-screen p-0 flex flex-col gap-5'>
            <Header 
            userIcon={false}
            headerTitle={"Profile"}/>
            <main className="relative  flex flex-col gap-4">
              <div className='flex flex-col justify-center py-2'>
                <div className='flex justify-center '>
                  <img src={userImage} className=" w-[88px]" alt="userImage.png"/>
                  </div>
                  <div className='py-3 flex justify-center'>
                      <h3 className=' text-xl font-extrabold '>{teacherData.userID}</h3>
                  </div>
              </div>
              <div className="flex justify-center">
                    <div className="container shadow-2xl rounded-2xl bg-white w-[20.2rem] p-4 px-5 flex flex-col gap-2">
                        <div className="">
                            <h1 className=" text-lg font-bold">General</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                          <div className='flex flex-col gap-1'>
                            <h1 className="text-sm">Full Name</h1>
                            <p className='text-xs font-extralight'>{teacherData['full-name']}</p>
                          </div>
                          <div className='flex flex-col gap-1'>
                            <h1 className=" text-sm">Church</h1>
                            <p className='text-xs font-extralight'>{teacherData.church}</p>
                          </div>
                          <div className='flex flex-col gap-1'>
                            <h1 className="text-sm">Class/Section</h1>
                            <p className='text-xs font-extralight'>{teacherData.class}</p>
                          </div>
                          <div className='flex flex-col gap-1'>
                            <h1 className="text-sm">Phone Number</h1>
                            <p className='text-xs font-extralight'>{teacherData.mobile}</p>
                          </div>
                          
                        </div>
                        
                    </div>
                </div>

            </main>
        </div>
  )
}

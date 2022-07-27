import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../../Components/header'

const ManageStudentsPage = () => {
    const role = useSelector((state:any)=>state.auth.role)
    const [selectedChurch,setSelectedChurch] = useState("DEFAULT");
    const [selectedClass,setSelectedClass] = useState("DEFAULT")
    // const selectChurchHandler = (e:any) =>{
    //   selec
    // }
    let classData = null;
    const beershebaClasses = ["BEGINNER","PRIMARY_BOYS","PRIMARY_GIRLS","JUNIOUR_BOYS","JUNIOUR_GIRLS","INTERMEDIATE_BOYS","INTERMEDIATE_GIRLS","SENIOR_BOYS","SENIOR_GIRLS"];
    if (selectedChurch==="BEERSHEBA"){
      classData = beershebaClasses
    }
    

  return (
    <>
    {
        role==="admin" ? 
        <div className='h-screen p-0 flex flex-col gap-5'>  
            <Header 
            userIcon={true}
            headerTitle={"Manage Students"}/>
            <main className="relative  flex flex-col gap-4">
              <div className='flex justify-center'>
                <div className='bg-white shadow-2xl px-8  py-5 mx-3  rounded-2xl grid gap-3 font-serif w-[20.2rem]'>
                  <form className=' '>
                    <div className='flex justify-end'>
                      <Link to="/addstudent"><button className='text-sm font-sans bg-slate-300 px-2 my-2 border-black border'>+Add</button></Link>
                    </div>
                    <div className=' text-sm flex '>
                      <select value={selectedChurch} onChange={(e:any)=>setSelectedChurch(e.target.value)} className='py-1 w-32 mr-1 font-sans'>
                        <option value="DEFAULT" disabled>select church</option>
                        <option value="BEERSHEBA">BEERSHEBA</option>
                        <option value="HOUSE_OF_BEATITUDES">HOUSE OF BEATITUDES</option>
                        <option value="ELIEM">ELIEM</option>
                        <option value="BETHEL">BETHEL</option>
                        <option value="BETHANI">BETHANI</option>
                        <option value="NEW_JERUSALEM">NEW JERUSALEM</option>
                        <option value="REHABOTH">REHABOTH</option>
                      </select>
                      <select className='py-1 w-32 ml-1 font-sans' value={selectedClass} onChange={(e)=>setSelectedClass(e.target.value)}>
                        <option value="DEFAULT" disabled>select class</option>
                        {
                          classData?.map(c=>(
                            <option key={c} value={c}>{c.replace(/_+/g, ' ')}</option>
                          ))
                        }
                      </select>
                    </div>
                    </form>
                  </div>
                </div>
            </main>
        </div> 
        : null
    }
    </>
  )
}

export default ManageStudentsPage
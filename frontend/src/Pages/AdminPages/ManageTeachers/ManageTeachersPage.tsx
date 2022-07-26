import {useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../../Components/header'

const ManageTeachersPage = () => {
    const role = useSelector((state:any)=>state.auth.role)
    const [selectedChurch,setSelectedChurch] = useState("DEFAULT");

  return (
    <>
    {
        role==="admin" ? 
        <div className='h-screen p-0 flex flex-col gap-5'>
            <Header 
            userIcon={true}
            headerTitle={"Manage Teachers"}/>
            <main className="relative  flex flex-col gap-4">
              <div className='flex justify-center'>
                <div className='bg-white shadow-2xl px-8  py-5 mx-3  rounded-2xl grid gap-3 font-serif w-[20.2rem]'>
                  <form className=' '>
                      <div className='flex justify-end'>
                          <Link to="/addteacher"><button className='text-sm font-sans bg-slate-300 px-2 my-2 border-black border'>+Add</button></Link>
                      </div>
                      <div className=' text-xs flex '>
                        <select value={selectedChurch} onChange={(e:any)=>setSelectedChurch(e.target.value)} className='py-1 mx-auto'>
                          <option value="DEFAULT" disabled>select church</option>
                          <option value="BEERSHEBA">BEERSHEBA</option>
                          <option value="HOUSE_OF_BEATITUDES">HOUSE OF BEATITUDES</option>
                          <option value="ELIEM">ELIEM</option>
                          <option value="BETHEL">BETHEL</option>
                          <option value="BETHANI">BETHANI</option>
                          <option value="NEW_JERUSALEM">NEW JERUSALEM</option>
                          <option value="REHABOTH">REHABOTH</option>
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

export default ManageTeachersPage
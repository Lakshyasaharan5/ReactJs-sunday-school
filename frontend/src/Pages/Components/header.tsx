import React,{useState} from 'react'
import { Burger } from '@mantine/core';
import {FaUserCircle} from 'react-icons/fa'
import userImage from '../images/user.png'

import { Box, Drawer } from '@mui/material'
import { Link } from 'react-router-dom';
import { headerProps } from '../InterfacesAndTypes';

export default function Header(props:headerProps) {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const title = navbarOpened ? 'Close navigation' : 'Open navigation';
  return (
        <>
            <header className="flex justify-between   sticky shadow-2xl p-1">
                <div className="p-2">
                    <Burger
                        opened={navbarOpened}
                        onClick={() => setNavbarOpened((o:boolean) => !o)}
                        title={title}
                    />
                    
                </div>
                
                
                    <div className="p-2 text-xl font-semibold m-auto">
                        <h1>{props.headerTitle}</h1>
                    </div>
                {   props.userIcon ? 
                    <Link to="/profile" className="p-2">
                        <FaUserCircle 
                        style={{fontSize:"2rem"}}/>
                    </Link>:<div className="p-2">
                        <FaUserCircle 
                        style={{fontSize:"2rem",color:"white"}}/>
                    </div>
                }
                
                
            </header>
            <Drawer
                anchor='top'
                open={navbarOpened}
                onClose={() => setNavbarOpened((o:boolean) => !o)}
                >
                <Box width='100vw' height='100vh' textAlign='center'>
                    <div className='flex flex-col p-1'>
                        <div className='flex justify-start'>
                            <div className='p-2'>
                                <Burger
                                    opened={navbarOpened}
                                    onClick={() => setNavbarOpened((o:boolean) => !o)}
                                    title={title}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <main className='w-[19rem] flex flex-col text-start gap-8'>
                                <div className='flex'>
                                    <img src={userImage} className=" w-14" alt="userImage.png"/>
                                    <div className='px-4'>
                                        <h3 className=' text-2xl font-bold '>Itachi Uchiha</h3>
                                        <Link to="/profile" className=' font-light'>View profile</Link>
                                    </div>
                                </div>
                                <div className='flex flex-col text-lg gap-5'>
                                    <div>
                                        <Link to="/"><p>Dashboard</p></Link>
                                    </div>
                                    <div>
                                        <Link to="/students"><p>My Students</p></Link>
                                    </div>
                                    <div>
                                        <Link to="/#"><p>Logout</p></Link>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    
                </Box>
            </Drawer>
        </>
  )
}
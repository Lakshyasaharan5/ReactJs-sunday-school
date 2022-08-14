import React, { useState } from 'react'
import { Burger } from '@mantine/core';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../Hooks/useMediaQuery';
import logoImage from "../../assets/Logo.png"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { Box, Drawer } from '@mui/material'
const Navbar = () => {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const title = navbarOpened ? 'Close navigation' : 'Open navigation';
    const lg = useMediaQuery("(min-width: 1024px)")
    const md_lg = useMediaQuery("(min-width: 768px) and (max-width: 1024px)")
    const md = useMediaQuery("(min-width: 768px)")
    const MaxMd = useMediaQuery("(max-width: 768px)")
  return (
    <div className=" bg-white">
        <header className=" sticky shadow-lg p-1">
          <div className={MaxMd?'flex justify-between mx-2':'flex justify-between mx-4 '}>
                {md?
                  <Link to="/">
                    <img src={logoImage} className="h w-24" alt="Logo.png"/>
                  </Link>
                :null}
               
                
                {lg?

                  <div className=" m-auto">
                      <div className='flex gap-3 text-md tracking-wide font-medium'>
                          <div>
                            <Link to="/"><p className='  '>A SHORT HISTORY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p className=' '>OUR SOCIETY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p className=' '>LOCATIONS</p></Link>
                          </div>
                          <div>
                            <Link to="/meetings"><p>MEETINGS</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>GALLERY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>LIVE</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>CONTACT US</p></Link>
                          </div>
                          <div>
                            <Link to='/sunday-school/login'>LOGIN</Link>
                          </div>
                      </div>
                  </div>
                :
                  null}
                  
                {!md_lg ?null:
                <div className="my-auto">
                  <Burger
                      opened={navbarOpened}
                      onClick={() => setNavbarOpened((o) => !o)}
                      title={title}
                  />
                
                </div>}
                {MaxMd?
                <>
                <div className="my-auto">
                <Burger
                    opened={navbarOpened}
                    onClick={() => setNavbarOpened((o) => !o)}
                    title={title}
                />
                
                </div>
                <Link to="/">
                    <img src={logoImage} className="h w-24" alt="Logo.png"/>
                </Link>
                <div className='my-auto'>
                    <MdCheckBoxOutlineBlank size={"40px"} color={"white"}/>
                </div>
                </>:null}
        </div>
      </header>
      <Drawer
                anchor={md? 'left':'top'}
                open={navbarOpened}
                onClose={() => setNavbarOpened((o:boolean) => !o)}
                >
                <Box width={md?'350px':'100wh'} height='100vh' textAlign='center'>
                    <div className='p-1'>
                      
                        <div className='flex justify-between mx-2'>
                            <div className='my-auto'>
                                <Burger
                                    opened={navbarOpened}
                                    onClick={() => setNavbarOpened((o:boolean) => !o)}
                                    title={title}
                                />
                            </div>
                            {md?null:<div>
                                <img src={logoImage} className="h w-24" alt="Logo.png"/>
                            </div>}
                            <div className='my-auto'>
                                <MdCheckBoxOutlineBlank size={"40px"} color={"white"}/>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                          <div className='flex justify-center pt-4'>
                            <main className=' flex flex-col text-start gap-4 w-11/12'>
                                <div className='flex flex-col text-lg font-medium gap-3 '>
                                  <div className='py-4 border-b '>
                                    <Link to="/"><p>A SHORT HISTORY</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/"><p>OUR SOCIETY</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/"><p>LOCATIONS</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/meetings"><p>MEETINGS</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/"><p>GALLERY</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/"><p>LIVE</p></Link>
                                  </div>
                                  <div className='py-4 border-b'>
                                    <Link to="/"><p>CONTACT US</p></Link>
                                  </div>

                                    
                                    
                                </div>
                            </main>
                          </div>
                        </div>
                        
                    </div>
                    
                </Box>
            </Drawer>
    </div>
  )
}

export default Navbar
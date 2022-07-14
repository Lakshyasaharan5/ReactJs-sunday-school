import React,{useState} from 'react'
import { Burger } from '@mantine/core';
import {FaUserCircle} from 'react-icons/fa'

export default function Header() {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const title = navbarOpened ? 'Close navigation' : 'Open navigation';
  return (
    <header className="flex justify-between   sticky shadow-2xl p-1">
                <div className="p-2">
                    <Burger
                        opened={navbarOpened}
                        onClick={() => setNavbarOpened((o:boolean) => !o)}
                        title={title}
                    />
                </div>
                <div className="p-2 text-xl font-semibold m-auto">
                    <h1>SUNDAY SCHOOL</h1>
                </div>
                <div className="p-2">
                    <FaUserCircle 
                    style={{fontSize:"2rem"}}/>
                </div>
                
            </header>
  )
}
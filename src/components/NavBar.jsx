import React from 'react'
import Logo from '../assets/Logo.png'
import { Button } from '@mui/material'
import { FaCaretDown, FaUser } from 'react-icons/fa'


const navLinks=[
  {
    id:1,
    name: "Home",
    link:"/"
  },
  {
    id:1,
    name: "About",
    link:"/about"
  },
  {
    id:1,
    name: "Dashboard",
    link:"/dashboard"
  },

];

const dropDownLinks = [
  {
    id:1,
    name: "Blogs",
    link:"/#"
  },
  {
    id:1,
    name: "Contact Us",
    link:"/#"
  },
  {
    id:1,
    name: "Carears",
    link:"/#"
  },

];


const NavBar = () => {
  return (
  <>
  <div className="bg-white shadow-sm navbar ">
    <div className="container flex justify-between items-center py-4 sm:py-3">
      <div className="font-bold logo text-red-600 text-3xl ">
        Saptajan
      </div>
      <div >
        <ul className='flex items-center gap-5 '>
          {
            navLinks.map(({id,name,link})=>(

            <li key={id}>
              <a href={link} className='inline-block hover:text-primary text-l font-semibold'>{name}</a>
            </li>
            
            ))
          }
          
          <li className='cursor-pointer relative group list'>
            <a href="/#" className='inline-block hover:text-primary text-l font-semibold'> 
             <div className='flex items-center gap-[2px] py-2'>
             Company
             <span>
              <FaCaretDown className='group-hover:rotate-180 duration-300'/>
             </span>
            </div> 
            </a>
              {/* dropdown sec */}
              <div className='absolute z-[1] hidden group-hover:block bg-white text-black w-[130px]  shadow-md p-2'>
                <ul>
                  {
                    dropDownLinks.map(({id,name,link})=>(
                      <li key={id}>
                        <a href={link} className='text-l inline-block w-full rouded-md p-2 hover:bg-primary/20'>{name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
            
        </ul>
      </div>
 
    </div>
    
  </div>


</>
  )
}

export default NavBar
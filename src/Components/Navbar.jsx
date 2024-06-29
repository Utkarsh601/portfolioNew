import React from 'react'
import logo from "../assets/um-logo.jpg"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <img src={logo} className='mx-2 w-20'/>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href='https://www.linkedin.com/in/utkarshm01/' target='_blank'><FaLinkedin/></a>
                    <a href='https://github.com/Utkarsh601' target='_blank'><FaGithub/></a>
                    <a href='https://x.com/MUtkarsh601' target='_blank'><FaSquareXTwitter/></a>
                    <a href='https://www.instagram.com/utkarsh601/' target='_blank'><FaInstagram/></a>
                </div>
    </nav>
  )
}

export default Navbar
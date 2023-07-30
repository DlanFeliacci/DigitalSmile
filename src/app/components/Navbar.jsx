'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '../../../public/logo-digital-smile.png'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";

const navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="">
        <div className='z-10 fixed w-full h-[70px]  flex justify-between items-center px-4 backdrop-blur-md'>
            {/*Logo*/}
            <div className='lg:ml-24'>
                <Image 
                src={Logo} width={190} objectFit='cover'/>
            </div>
            {/* Menu */}
            <div className="lg:mr-24  text-black">
                <ul className="hidden md:flex font-bold md:space-x-6 group">
                    <Link href='/'>
                        <li className="hover:text-[#7BBF43] duration-300 p-2"> 
                        Home
                        </li>
                    </Link> 
                    <Link href='/projects'>
                        <li className="hover:text-[#7BBF43] duration-300 p-2">
                            Projects
                        </li>
                    </Link> 
                    <Link href='/services'>
                        <li className="hover:text-[#7BBF43] duration-300 p-2">
                            Services
                        </li>
                    </Link>
                    <Link href ='/about'>
                        <li className="hover:text-[#7BBF43] duration-300 p-2">
                            About
                        </li>
                    </Link> 
                    <Link href='/contact'>
                        <li className="hover:text-white duration-300 p-2">
                            <span className='bg-[#7BBF43] hover:bg-[#534092] duration-300 p-2 px-4 rounded-br-3xl rounded-tl-3xl'>Contact</span>  
                        </li>
                    </Link> 
                </ul>
                
            
            </div>
                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                    {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
                </div>

                {/* Mobile menu */}
                <ul
                    className={
                    !nav
                        ? "hidden"
                        : "md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#85fea1] to-[#023b1f] flex flex-col justify-center items-center text-white"
                    }
                    >
                    <Link href="/" smooth={true} duration={500}>
                        <li onClick={handleClick} className="py-6 text-4xl">
                            Home
                        </li>
                    </Link>
                    <Link href="projects" smooth={true} duration={500}>
                        <li onClick={handleClick} className="py-6 text-4xl">
                            Projects
                        </li>
                    </Link>
                    <Link href="services" smooth={true} duration={500}>
                        <li onClick={handleClick} className="py-6 text-4xl">
                            Services
                        </li>
                    </Link>
                    <Link href="about" smooth={true} duration={500}>
                        <li onClick={handleClick} className="py-6 text-4xl">
                            About
                        </li>
                    </Link>
                    <Link href="contact" smooth={true} duration={500}>
                        <li onClick={handleClick} className="py-6 text-4xl">
                            Contact
                        </li>
                    </Link>
                </ul>
        </div>
    </div>
  )
}

export default navbar
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo-digital-smile.png'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";

const navbar = () => {

    // variable to know in what particular routing we are
    const currentRoute = usePathname();

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="">
        <div className='z-10 fixed w-full h-[70px]  flex justify-between items-center sm:px-4 backdrop-blur-md'>

            {/*Logo*/}
            
            <div className='lg:ml-24'>
                <Link href='/'>
                    <Image src={Logo} width={190} alt='img' priority={true}/>
                </Link> 
            </div>
            

            {/* Menu */}
            <div className="lg:mr-24  text-black">
                <ul className="hidden md:flex font-bold md:space-x-6 group">
                    <li className={currentRoute === '/' ? 'bg-[#7BBF43]  text-white duration-300 p-1 px-3 rounded-3xl' : 'p-1 hover:text-[#7BBF43]'}> 
                        <Link href='/'> Home </Link> 
                    </li>
                    
                    <li  className={currentRoute === '/projects' ? 'bg-[#7BBF43]  text-white duration-300 p-1 px-3 rounded-3xl' : 'p-1 hover:text-[#7BBF43]'}>
                        <Link href='/projects'> Projects </Link>
                    </li>
                     
                    <li  className={currentRoute === '/services' ? 'bg-[#7BBF43]  text-white duration-300 p-1 px-3 rounded-3xl' : 'p-1 hover:text-[#7BBF43]'}>
                        <Link href='/services'> Services </Link>
                    </li>
                        
                    <li  className={currentRoute === '/about' ? 'bg-[#7BBF43]  text-white duration-300 p-1 px-3 rounded-3xl' : 'p-1 hover:text-[#7BBF43]'}>
                        <Link href ='/about'> About </Link> 
                    </li>
                
                    <li  className={currentRoute === '/contact' ? 'bg-[#7BBF43]  text-white duration-300 p-1 px-3 rounded-3xl' : 'p-1 hover:text-[#7BBF43]'}>
                        <Link href='/contact'> Contact </Link> 
                    </li>
                    
                </ul>
                
            
            </div>
                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10 cursor-pointer pr-4">
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
                    <li onClick={handleClick} className="py-6 text-4xl">
                        <Link href="/"  duration={500}> Home </Link>     
                    </li>
                    
                    <li onClick={handleClick} className="py-6 text-4xl">
                        <Link href="projects"  duration={500}> Projects </Link>
                    </li>
                    
                    <li onClick={handleClick} className="py-6 text-4xl">
                        <Link href="services"  duration={500}> Services </Link>
                    </li>
                    
                    <li onClick={handleClick} className="py-6 text-4xl">
                        <Link href="about"  duration={500}> About </Link>
                    </li>
                    
                    <li onClick={handleClick} className="py-6 text-4xl">
                        <Link href="contact"  duration={500}> Contact </Link>
                    </li>
                    
                </ul>
        </div>
    </div>
  )
}

export default navbar
'use client'
import Image from 'next/image'
import Realisation1 from '../../../public/Realisation1.png'
import Realisation2 from '../../../public/Realisation2.png'
import Realisation3 from '../../../public/Realisation3.png'
import Realisation4 from '../../../public/Realisation4.png'
import logo3 from '../../../public/logo3.jpg'
import logoDs from '../../../public/logo2-ds.jpg'
import { IoMdArrowDropdownCircle } from 'react-icons/io';


const Realisation = () => {
  return (
    <div className='w-full h-auto py-20'>
      <div className='flex flex-col justify-center text-center p-8'>
        <p className='text-4xl font-bold'>Some Of Our Work <IoMdArrowDropdownCircle size={32} className='inline animate-bounce'/></p>
      </div>
        {/* Grid Container */}
        <div className='grid grid-cols-1 m-auto sm:grid-cols-2 lg:grid-cols-3'>
          {/* Grid item 1 */}
          <div className="group relative">
            <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src={Realisation1} alt='img'/>
            {/*Hover Effect*/}
            <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
              <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
              text
              </span>
              <div className='w-12 absolute'>
                <Image src={logoDs} alt='img'/>
              </div>            
            </div>
          </div>
        

          {/* Grid item 2 */}
          <div className="group relative">
            <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src = {Realisation2} alt='img'/>
            {/*Hover Effect*/}
            <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
              <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                text
              </span>
              <div className='w-12 absolute'>
                <Image src={logoDs} alt='img'/>
              </div>            
            </div>
          </div>
       
      
            {/* Grid item 3 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src = {Realisation3} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                text
                </span>
                <div className='w-12 absolute'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
            </div>

            {/* Grid item 4 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {logo3} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                text
                </span>
                <div className='w-12 absolute'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>
            {/* Grid item 5 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {logo3} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                text
                </span>
                <div className='w-12 absolute'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>
            {/* Grid item 6 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {logo3} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-100 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                text
                </span>
                <div className='w-12 absolute'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>
      </div>
    </div>
  )
}

export default Realisation
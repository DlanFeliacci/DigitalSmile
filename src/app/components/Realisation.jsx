'use client'
import Image from 'next/image'
import Realisation1 from '../../../public/Realisation1.png'
import Realisation2 from '../../../public/Realisation2.png'
import Realisation3 from '../../../public/Realisation3.png'
import Realisation4 from '../../../public/Realisation4.png'
import Realisation5 from '../../../public/Realisation5.png'
import Realisation6 from '../../../public/Realisation6.png'
import Realisation7 from '../../../public/Realisation7.jpg'
import Realisation8 from '../../../public/Realisation8.jpg'
import Realisation9 from '../../../public/Realisation9.jpg'
import logoDs from '../../../public/logo2-ds.jpg'
import { IoMdArrowDropdownCircle } from 'react-icons/io';


const Realisation = () => {
  return (
    <div className='w-full h-auto py-20'>
      <div className='flex flex-col justify-center text-center p-8'>
        <p className='text-4xl font-bold'>Some Of Our Work <IoMdArrowDropdownCircle size={32} className='inline animate-bounce cursor-none'/></p>
      </div>
        {/* Grid Container */}
        <div className='grid grid-cols-1 m-auto sm:grid-cols-2 lg:grid-cols-3'>
          {/* Grid item 1 */}
          <div className="group relative">
            <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src={Realisation1} alt='img'/>
            {/*Hover Effect*/}
            <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
              <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
              Project 1
              </span>
              <div className='w-12 absolute m-2'>
                <Image src={logoDs} alt='img'/>
              </div>            
            </div>
          </div>
        

          {/* Grid item 2 */}
          <div className="group relative">
            <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src = {Realisation2} alt='img'/>
            {/*Hover Effect*/}
            <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
              <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
              Project 2
              </span>
              <div className='w-12 absolute m-2'>
                <Image src={logoDs} alt='img'/>
              </div>            
            </div>
          </div>
       
      
            {/* Grid item 3 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg container flex justify-center items-center content-div-home' src = {Realisation3} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 3
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
            </div>

            {/* Grid item 4 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation4} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 4
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>

            {/* Grid item 5 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation5} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 5
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>

            {/* Grid item 6 */}
            <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation6} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 6
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>

          {/* Grid item 7 */}
          <div className="group relative">
              <Image className='object-cover shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation7} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 7
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>
          {/* Grid item 8 */}
          <div className="group relative">
              <Image className='object-cover object-top shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation8} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 8
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>

          {/* Grid item 9 */}
          <div className="group relative">
              <Image className='object-cover object-top shadow-md hover:shadow-lg group container flex justify-center items-center mx-auto content-div-home' src = {Realisation9} alt='img'/>
              {/*Hover Effect*/}
              <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0 bg-[#534092] duration-300">
                <span className="text-2xl font-bold text-white tracking-wider m-auto group-hover:scale-125 duration-300">
                Project 9
                </span>
                <div className='w-12 absolute m-2'>
                  <Image src={logoDs} alt='img'/>
                </div>            
              </div>
          </div>

      </div>
    </div>
  )
}

export default Realisation
'use client'
import Image from 'next/image'
import RobotHead from '../../../public/robot-head.png'
import Link from 'next/link'
import facebook from '../../../public/facebook.png'
import linkedin from '../../../public/linkedin.png'
import mail from '../../../public/email.png'
import behance from '../../../public/behance.png'
// import gear from '../../../public/gear.png'
import ScrollToTop from './ScrollToTop'
import LogoDigitalSmile from '../../../public/logo-digital-smile.png'
import phone from '../../../public/phone.png'
import localisation from '../../../public/localisation.png'
import decoration from '../../../public/decoration.png'
import Lottie from 'lottie-react'
import animationRobot from '../../../public/animation_robot.json'


const Footer = ({text}) => {
    
    
  return (
    <main className="w-full h-full">
      <div className="h-auto">
        <div className="bg-[#7BBF43] text-center py-8">
          <p className="text-3xl font-bold text-[#4F499D]">
            Do you need a branding agency?
          </p>
          <br />
          <p className="text-[#4F499D] font-semibold mx-4">{text}</p>
          <Link href="/contact">
            <button className="bg-[#4F499D] m-auto flex p-3 text-[white] font-bold mt-8 hover:bg-blue-600 active:scale-90">
              <h2>Ask For A Quotation</h2>
            </button>
          </Link>
        </div>
      </div>

      {/* <div className='w-4/5 md:h-[100px] grid grid-rows-3 md:grid-cols-3 m-auto content-center text-center mt-6 gap-y-4'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-[#4F499D] font-bold text-2xl'>Appelez Nous</p>
                <p className='font-semibold'>+213 542 05 41 23</p>
            </div>

            <div className='flex flex-col gap-y-2'>
                <p className='text-[#4F499D] font-bold text-2xl'>Digital Smile Dz</p>
                <p className='font-semibold'>Alger, Algérie</p>
            </div>

            <div className='flex flex-col gap-y-2'>
                <p className='text-[#4F499D] font-bold text-2xl'>Suivez nous...</p>
                <div className='flex justify-evenly'>
                    <a href='https://www.linkedin.com/company/98183946/' target="_blank">
                        <AiOutlineLinkedin size={40}/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100087374435338' target="_blank">
                        <AiOutlineFacebook size={40}/>
                    </a>
                    <a href='' target="_blank">
                        <AiOutlineMail size={40}/>
                    </a>
                </div>
            </div>
        </div>
        
        <div className='w-2/12 m-auto pt-11 md:pt-0'>
            <Image src={RobotHead} alt='img'/>
        </div> */}
      <div className='h-auto flex items-cente py-12 bg-gray-50'>
        <div className='w-2/3 sm:w-1/3 m-auto'>
          <Image src={decoration} alt='decoration'/>
        </div>
      </div>
      <div className="w-full h-auto bg-gray-50">
        <div className="w-5/6 md:flex md:justify-center p-12 m-auto">
          <div className="flex-col">
            <div className="w-[250px]">
              <Image src={LogoDigitalSmile} alt='LogoDs'/>
            </div>
            <div className="grid gird-rows-2 items-center justify-start ml-4 gap-3 pt-2">
              <div className="flex">
                <div className="w-[30px]">
                  <Image src={phone} alt='phone'/>
                </div>
                <p className="font-semibold tracking-wilder text-md text-center">
                &nbsp;+213 542 05 41 23
                </p>
              </div>
              <div className="flex">
                <div className="w-[30px]">
                  <Image src={localisation} alt='location'/>
                </div>
                <p className="font-semibold tracking-wilder text-md text-center">
                &nbsp;Bab Ezzouar, Algiers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 hidden md:block md:w-1/6 m-auto md:pt-0  justify-start">
            {/* <Image src={RobotHead} alt="img" /> */}
            <div className='flex justify-center'>
              <Lottie animationData={animationRobot} style={{maxWidth: '60%'}} />
            </div> 
          </div>
          <div className="py-8 flex justify-center items-center md:justify-between gap-4">
            <a
              href="https://www.linkedin.com/company/98183946/"
              target="_blank"
            >
              <div className="w-10 hover:animate-bounce">
                <Image src={linkedin} alt="linkedin" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087374435338"
              target="_blank"
            >
              <div className="w-10 hover:animate-bounce">
                <Image src={facebook} alt="fb" />
              </div>
            </a>
            <a href="" target="_blank">
              <div className="w-10 hover:animate-bounce">
                <Image src={mail} alt="email" />
              </div>
            </a>
            <a
              href="https://www.behance.net/yahiaouiarezki?tracking_source=search_projects%7Cyahiaoui+arezki"
              target="_blank"
            >
              <div className="w-10 hover:animate-bounce">
                <Image src={behance} alt="behance" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-12 text-center p-1 text-gray-500 text-sm bg-gray-50">
        <p className="flex justify-center ml-11 tracking-widest w-3/6 font-semibold text-md text-justify text-md">
          &#64;2023 Digital Smile
        </p>
      </div>
      <ScrollToTop />
    </main>
  );
}

export default Footer
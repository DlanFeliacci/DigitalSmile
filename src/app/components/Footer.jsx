import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import RobotHead from '../../../public/robot-head.png'

const Footer = ({text}) => {
    
    

  return (
    <main className='w-full h-full'>
        <div className='h-auto pb-10'>
            <div className='bg-gradient-to-r from-[#7BBF43] to-emerald-500 to-90% text-center py-8'>
                <p className='text-3xl font-bold text-white'>Do you need a branding agency?</p>
                <br />
                <p className='text-white font-semibold mx-4'>{text}</p>           
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
            <Image src={RobotHead}/>
        </div> */}

        <div className='h-auto grid grid-cols-2'>
            <div className='items-center lg:mr-6 lg:w-6/12 m-auto md:pt-0'>
                <Image src={RobotHead}/>
            </div> 
            <div className='grid gird-rows-3 md:justify-center lg:justify-start gap-y-2 lg:ml-[100px]'>
                <div className='py-4'>
                    <p className='text-[#4F499D] font-bold text-md sm:text-2xl tracking-widest text-center'>Appelez Nous</p>
                    <p className='font-semibold tracking-wilder text-md sm:text-2xl text-center'>+213 542 05 41 23</p>
                </div>
                <div className='py-4'>
                    <p className='text-[#4F499D] font-bold text-md sm:text-2xl tracking-widest text-center'>Digital Smile Dz</p>
                    <p className='font-semibold tracking-wilder text-md sm:text-2xl text-center'>Alger, Algérie</p>
                </div>
                <div className='py-4'>
                    <p className='text-[#4F499D] font-bold text-md sm:text-2xl tracking-widest text-center'>Suivez nous...</p>
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
        </div>



        <div className='flex items-center justify-center h-12 text-center p-1 text-gray-500 text-sm bg-gray-100'>
            <p className='flex justify-center tracking-widest w-3/6 font-semibold text-md text-justify text-md'>&#64;2023 Digital Smile</p>
        </div>
    </main>
  )
}

export default Footer
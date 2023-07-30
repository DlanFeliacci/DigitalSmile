import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = ({text}) => {
    
    

  return (
    <main className='w-full h-full'>
        <div className='h-auto pb-8'>
            <div className='bg-gradient-to-r from-[#7BBF43] to-emerald-500 to-90% text-center py-6'>
                <p className='text-2xl font-bold text-white'>Besoin d'une agence de communication?</p>
                <br />
                <p className='text-white'>{text}</p>           
            </div>
        </div>


        <div className='w-4/5 md:h-[100px] grid grid-rows-3 md:grid-cols-3 m-auto content-center text-center mt-6 gap-y-4'>
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
                        <AiOutlineLinkedin size={30}/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100087374435338' target="_blank">
                        <AiOutlineFacebook size={30}/>
                    </a>
                    <a href='' target="_blank">
                        <AiOutlineMail size={30}/>
                    </a>
                </div>
            </div>
        </div>

        <br />


        <div className='text-center p-1 text-gray-400 text-sm'>
        &#64;2023 Digital Smile
        </div>
    </main>
  )
}

export default Footer
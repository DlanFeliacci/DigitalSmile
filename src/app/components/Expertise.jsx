import Image from 'next/image'
import catalogue from '../../../public/catalogue-icon.png'
import Webdesign from '../../../public/webdesign.png'
import Printer from '../../../public/printer.png'
import Photography from '../../../public/Photography-icon.png'
import Logo from '../../../public/Logo-icon.png'
import Signage from '../../../public/signage.png'
import Blue from '../../../public/blue.png'


const Expertise = () => {
  return (
    <main className='h-full'>
      <div className='h-full w-4/5 m-auto'>
        <div className='flex-col text-center pb-10'>
          <div className='flex text-5xl font-bold h-20 items-center justify-center'><p>What we offer?</p></div>
          <div><p className='text-gray-500'>Discover below our main services</p></div>
        </div>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-10 ml-[50px] lg:ml-[100px]'>

          <div className='flex flex-row md:ml-auto'>
            <div className='pr-2'>
              <Image src={Logo} width='80' alt='img'/>
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Graphic Creation</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>Logo Creation</p>
                <p className='transform transition-all hover:translate-x-4'>Graphical Charter</p>
                <p className='transform transition-all hover:translate-x-4'>Print Label</p>
                <p className='transform transition-all hover:translate-x-4'>Packaging</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Printer} width='80' alt='img' />
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Printing</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>Digital Printing</p>
                <p className='transform transition-all hover:translate-x-4'>Offset Printing</p>
                <p className='transform transition-all hover:translate-x-4'>Flexography</p>
                <p className='transform transition-all hover:translate-x-4'>Heliogravure</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row  md:mr-auto'>
            <div className='pr-2'>
              <Image src={Signage} width='80' alt='img' />
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Signage System</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>Advertisement Signage</p>
                <p className='transform transition-all hover:translate-x-4'>Road Pannel</p>
                <p className='transform transition-all hover:translate-x-4'>Totem</p>
                <p className='transform transition-all hover:translate-x-4'>Plaque</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:ml-auto '>
            <div className='pr-2'>
              <Image src={Webdesign} width='80' alt='img' />
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Digital Marketing</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>Websites Creation</p>
                <p className='transform transition-all hover:translate-x-4'>E-Commerce</p>
                <p className='transform transition-all hover:translate-x-4'>Mobile Application</p>
                <p className='transform transition-all hover:translate-x-4'>Social Media Management</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Photography} width='80' alt='img'/>
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Audiovisual Production</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>Photo Shooting</p>
                <p className='transform transition-all hover:translate-x-4'>Video Shooting</p>
                <p className='transform transition-all hover:translate-x-4'>Commercial</p>
                <p className='transform transition-all hover:translate-x-4'>Business Portrait Photography</p>
              </div>
            </div>
          </div>
          
          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Blue} width='80' alt='img'/>
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Other</p>
              <div className='font-semibold pt-2 leading-7'>
                <p className='transform transition-all hover:translate-x-4'>soon...</p>
                <p className='transform transition-all hover:translate-x-4'>soon...</p>
                <p className='transform transition-all hover:translate-x-4'>soon...</p>
                <p className='transform transition-all hover:translate-x-4'>soon...</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Expertise
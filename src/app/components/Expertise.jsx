import Image from 'next/image'
import catalogue from '../../../public/catalogue-icon.png'
import Webdesign from '../../../public/webdesign.png'
import Printer from '../../../public/printer.png'
import Photography from '../../../public/Photography-icon.png'
import Logo from '../../../public/Logo-icon.png'
import Signage from '../../../public/signage.png'


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
                <p>Logo Creation</p>
                <p>Graphical Charter</p>
                <p>Print Label</p>
                <p>Packaging</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Printer} width='80' alt='img' />
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Signage System</p>
              <div className='font-semibold pt-2 leading-7'>
                <p>Digital Printing</p>
                <p>Offset Printing</p>
                <p>Flexography</p>
                <p>Heliogravure</p>
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
                <p>Advertisement Signage</p>
                <p>Road Pannel</p>
                <p>Totem</p>
                <p>Plaque</p>
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
                <p>Websites Creation</p>
                <p>E-Commerce</p>
                <p>Mobile Application</p>
                <p>Social Media Management</p>
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
                <p>Photo Shooting</p>
                <p>Video Shooting</p>
                <p>Commercial</p>
                <p>Business Portrait Photography</p>
              </div>
            </div>
          </div>
          
          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Printer} width='80' alt='img'/>
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-2xl font-semibold text-[#534092] pt-4'>Other</p>
              <div className='font-semibold pt-2 leading-7'>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Expertise
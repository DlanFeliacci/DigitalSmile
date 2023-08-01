import Image from 'next/image'
import uno from '../../../public/1.png'
import deux from '../../../public/2.png'
import trois from '../../../public/3.png'


const TroisBonnesRaisons = () => {
  return (
    <div className='flex place-items-center h-auto py-20 bg-gray-100'>
        <div className='h-auto w-5/6 m-auto'>
            <div className='flex flex-col md:flex-row justify-center'>
                <p className='font-bold text-4xl text-center'>3 Good Reasons&nbsp;</p>  
                <p className='text-4xl text-center'>to chose us</p> 
            </div>
            <div className='text-center pb-10 pt-5 text-gray-500'>Creative Branding Agency Situated in Algiers</div>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='ml-6 flex h-auto w-auto py-5'>
                    <div className='mx-3 w-[100px]'>
                    <Image src={uno} />
                    </div>
                    <div className='w-5/6'>
                        <p className='leading-7 text-justify'>We are creative and sharp in our work. Our experience in the field make the difference, you can browse our site and discover our references to be sure.</p>
                    </div>
                </div>
                <div className='ml-6 flex h-auto w-auto py-5'>
                    <div className='mx-3 w-[100px]'>
                    <Image src={deux} />
                    </div>
                    <div className='w-5/6'>
                        <p className='leading-7 text-justify'>Our agency is made up of a small team led by the graphic designer himself. You will therefore have direct contact with him without going through sales representatives.</p>
                    </div>
                </div>
                <div className='ml-6 flex h-auto w-auto py-5'>
                    <div className='mx-3 w-[100px]'>
                    <Image src={trois} />
                    </div>
                    <div className='w-5/6'>
                        <p className='leading-7'>We do our job with passion and dedication. The satisfaction of our clients is priority to us, the rate of our customers testifies to the quality of our work.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TroisBonnesRaisons
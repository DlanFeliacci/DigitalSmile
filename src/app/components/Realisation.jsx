import Image from 'next/image'
import Realisation1 from '../../../public/Realisation1.png'
import Realisation2 from '../../../public/Realisation2.png'
import Realisation3 from '../../../public/Realisation3.png'
import Realisation4 from '../../../public/Realisation4.png'


const Realisation = () => {
  return (
    <div className='w-full h-auto py-20'>
      <div className='flex flex-col justify-center text-center p-8'><p className='text-4xl font-bold'>Nos Réalisations</p></div>
        {/* Grid Container */}
        <div className='grid grid-cols-1 m-auto sm:grid-cols-2 md:grid-cols-3 sm:max-w-[1100px] gap-2'>
          {/* Grid item 1 */}
          <div className="">
            <Image className='max-w-[400px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto items-center content-div' src={Realisation1}/>
            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <div className="text-2xl font-bold flex  justify-center pt-4">
                </div>
              </div>
          </div>
        

          {/* Grid item 2 */}
          <div className="">
            <Image className='max-w-[400px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' src = {Realisation2}/>
            {/*Hover Effect*/}
            <div>
                <div className="flex justify-center pt-4">
                
                </div>
              </div>
          </div>
       
      
            {/* Grid item 3 */}
            <div className="">
            <Image className='max-w-[400px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' src = {Realisation3}/>
              {/*Hover Effect*/}
              <div>
                <div className="flex justify-center pt-4">
                
                </div>
              </div>
            </div>

            {/* Grid item 4 */}
            <div className="">
            <Image className='max-w-[400px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' src = {Realisation4}/>
              {/*Hover Effect*/}
              <div>
                <div className="flex justify-center pt-4">
                
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Realisation
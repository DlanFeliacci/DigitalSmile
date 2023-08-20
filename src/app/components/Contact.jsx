
import Image from "next/image"
import robot from '../../../public/robot.png'
import Lottie from 'lottie-react'
import animationData from '../../../public/animation_lkwo4f21.json'
import contactUs from '../../../public/ContactUs.json'
import Form from './Form'
import Map from './Map'


// import textAnimation from '../../../public/textAnimation'

const Contact = () => {
  return (
    <>
    <div className='background-contact max-w-full h-[60vh] md:h-[100vh]'></div>
    <Form />
    <div className='flex flex-col sm:flex-row justify-evenly py-[60px] p-2 bg-[#ffffff] pt-[500px] sm:pt-[200px]'>
        <div className='lg:w-[700px] flex flex-col justify-evenly '>
            <div className="text-center w-3/4 mx-auto pb-4">
                <p className="text-center text-3xl font-bold">Jobs</p> 
                <p className="leading-7 text-justify">Notre société est en permanence à la recherche de nouveaux talents. n'hésitez pas à nous envoyer votre candidature avec un lien vers votre site. </p>
            </div>
        </div>
        {/* <div className="hidden lg:block md:w-[150px] md:h-[200px] relative top-[250px] right-[50px] ">
            <Image src={robot} alt='img' />
        </div> */}  
    </div>
    <Map />
    </>
    
    
  )
}

export default Contact


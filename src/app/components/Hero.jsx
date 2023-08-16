import Lottie from 'lottie-react'
import devAnimation from '../../../public/animation_blue&green.json'

const Hero = () => {
  return (
    <div 
    // className='custom-background h-auto max-w-full'
    className='h-auto flex justify-center pt-[120px] pb-[80px] m-auto'>
       <Lottie animationData={devAnimation} style={{maxWidth: '80%'}}/>
    </div>
  )
}

export default Hero
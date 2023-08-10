'use client'
import Image from "next/image"
import logo3 from '../../../public/logo3-ds.jpg'
import robot from '../../../public/robot.png'
import Lottie from 'lottie-react'
import animationData from '../../../public/animation_lkwo4f21.json'
// import textAnimation from '../../../public/textAnimation'

const Contact = () => {
  return (
    <>
    <div className='background-contact max-w-full h-[60vh] md:h-[100vh]'></div>
    <div>
        <Lottie animationData={animationData} style={{maxWidth: '40%'}} className="absolute top-[64px] right-0"/>
    </div>
    <div className='flex flex-col sm:flex-row justify-evenly py-[60px] p-2 bg-[#F7F7F7]'>
        <div className='lg:w-[700px] flex flex-col justify-evenly '>
            <div className="text-center w-3/4 mx-auto pb-4">
                <p className="text-center text-3xl font-bold">Jobs</p> 
                <p className="leading-7 text-justify">Notre société est en permanence à la recherche de nouveaux talents. n'hésitez pas à nous envoyer votre candidature avec un lien vers votre site. </p>
            </div>
            <div className="flex justify-center">
                <Image src={logo3} className="mb-10 w-2/5 md:w-4/12 lg:w-4/12" alt='img' />       
            </div> 
        </div>
        <div className="hidden lg:block md:w-[150px] md:h-[200px] relative top-[250px] right-[50px] ">
            <Image src={robot} alt='img' />
        </div>
        <form method='POST' className="w-full max-w-lg m-auto" action='https://getform.io/f/15cba2b2-cc68-4921-8530-f0c5dc2bbd50'>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <p className='text-3xl font-bold'>Bonjour !</p>
                    <p className='pb-6 text-gray-400'>Vous pouvez nous contacter ici</p>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name or Company
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" name='name' />
                </div>
                {/* <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div> */}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name='email' />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name='message'></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button className="shadow bg-[#534092] hover:bg-[#6b57ab] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Send
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    </div>
    </>
    
    
  )
}

export default Contact


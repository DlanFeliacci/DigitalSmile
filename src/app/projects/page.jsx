'use client'
import { useState } from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import photograpahyGreen from '../../../public/photographyGreen.png'
import webdesignGreen from '../../../public/webdesignGreen.png'
import printGreen from '../../../public/printGreen.png'
import logoGreen from '../../../public/logoGreen.png'
import eyeblue from '../../../public/eyeblue.png'
import Categories from '../components/Categories'
import logoDs from '../../../public/logodigitalsmile.svg'

const projects = () => {

  const text = 'We have lots of projects to show you'

  const [items, setItems] = useState(Categories)

  const FilterItem = (categItem) => {
    const updatedItems = Categories.filter((current) => {
      return current.category === categItem
    })
    setItems(updatedItems)
  }

  return (
    <div className="pt-[100px]">
      <div className="w-full h-auto">
        <div className="flex flex-col justify-center text-center p-8">
          <p className="text-4xl font-bold ">Check Out Our Work</p>
          <p className="text-gray-500 pb-10 pt-5">
            here is a selection of different work that we finished:
            communication media, packaging, logos, websites, videos...
          </p>
        </div>

        <div className="lg:h-[200px] pb-4">
          <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center ">
            <button
              className="hover:scale-110 duration-300"
              onClick={() => setItems(Categories)}
            >
              <Image src={eyeblue} width={100} alt="img" />
              <div className="text-center font-bold py-2 text-[#534092]">
                SEE ALL
              </div>
            </button>
            <button
              className="hover:scale-110 duration-300"
              onClick={() => FilterItem("photo")}
            >
              <Image src={photograpahyGreen} width={120} alt="img" />
              <div className="text-center font-bold py-2 text-[#534092]">
                PHOTO
              </div>
            </button>
            <button
              className="hover:scale-110 duration-300"
              onClick={() => FilterItem("logo")}
            >
              <Image src={logoGreen} width={120} alt="img" />
              <div className="text-center font-bold py-2 text-[#534092]">
                LOGO
              </div>
            </button>
            <button
              className="hover:scale-110 duration-300"
              onClick={() => FilterItem("web")}
            >
              <Image src={webdesignGreen} width={120} alt="img" />
              <div className="text-center font-bold py-2 text-[#534092]">
                WEB
              </div>
            </button>
            <button
              className="hover:scale-110 duration-300"
              onClick={() => FilterItem("print")}
            >
              <Image src={printGreen} width={120} alt="img" />
              <div className="text-center font-bold py-2 text-[#534092]">
                PRINT
              </div>
            </button>
          </div>
        </div>

        

        <div className="w-4/5 sm:w-full grid grid-cols-1 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-4 ">
          {items.map((iter) => (
            <div key={iter.id}>
              {/* Grid item 1 */}
              <div key={iter.id} className="group relative">
                <Image
                  className="object-cover shadow-md hover:shadow-lg container rounded-md flex justify-center items-center content-div"
                  src={iter.image}
                  alt="img"
                />

                {/*Hover Effect*/}
                <div className="flex absolute w-[100%] opacity-0 group-hover:opacity-95 top-0 bottom-0  bg-gradient-to-tr from-green-200 via-green-300 to-blue-500 duration-300">
                  {/* <div className="text-2xl font-bold flex  justify-center pt-4"></div> */}
                  <span className="text-2xl font-bold text-[#534092] tracking-wider m-auto group-hover:scale-125 duration-300">
                    {iter.title}
                  </span>
                  <div className='w-10 absolute m-2'>
                    <Image src={logoDs} alt={iter.title}/>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer text={text}/>
    </div>
  );
}

export default projects
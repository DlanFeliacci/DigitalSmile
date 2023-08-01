import Image from 'next/image'
import catalogue from '../../../public/catalogue-icon.png'
import Webdesign from '../../../public/webdesign.png'
import Printer from '../../../public/printer.png'
import Photography from '../../../public/Photography-icon.png'
import Logo from '../../../public/Logo-icon.png'

const Expertise = () => {
  return (
    <main className='h-full'>
      <div className='h-full w-4/5 m-auto'>
        <div className='flex-col text-center pb-10'>
          <div className='flex text-5xl font-bold h-20 items-center justify-center'><p>What we offer?</p></div>
          <div><p>Decouvrez ci dessous nos principaux services</p></div>
        </div>
        
        <div className='grid md:grid-cols-2 grid-cols-1 gap-y-10 ml-[50px] lg:ml-[200px]'>

          <div className='flex flex-row md:ml-auto'>
            <div className='pr-2'>
              <Image src={Photography} width='80' />
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-3xl font-semibold text-[#534092] pt-4'>Photography</p>
              <div className='font-semibold'>
                <p>Animation vidéo</p>
                <p>Reportage photo</p>
                <p>Photo produit</p>
                <p>Spot publicitaire</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row  md:mr-auto'>
            <div className='pr-2'>
              <Image src={Webdesign} width='80' />
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-3xl font-semibold text-[#534092] pt-4'>Web Design</p>
              <div className='font-semibold'>
                <p>Web Design</p>
                <p>Création site vitrine</p>
                <p>Création site e-commerce</p>
                <p>Web marketing</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:ml-auto '>
            <div className='pr-2'>
              <Image src={Logo} width='80' />
            </div>
            <div className='flex flex-col w-[400px]'>
              <p className='text-3xl font-semibold text-[#534092] pt-4'>Design & Logo</p>
              <div className='font-semibold'>
                <p>Création de Logo</p>
                <p>Charte graphique</p>
                <p>Design graphique</p>
                <p>identité visuelle</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row md:mr-auto '>
            <div className='pr-2'>
              <Image src={Printer} width='80' />
            </div>
            <div className='flex flex-col w-[400px] '>
              <p className='text-3xl font-semibold text-[#534092] pt-4'>Impression & Signalétique</p>
              <div className='font-semibold'>
                <p>Imprimerie</p>
                <p>Enseigne</p>
                <p>Autocollant</p>
                <p>Stand d'exposition</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Expertise
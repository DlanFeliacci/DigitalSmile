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
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={uno} width={90} />
                    </div>
                    <div className='w-2/3'>
                        <p className='leading-7 text-justify'>Nous somme crétatifs et pointus dans notre travail.  Vous  pouvez naviguer sur notre site et découvrir nos références afin de vous en assurer.</p>
                    </div>
                </div>
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={deux} width={90} />
                    </div>
                    <div className='w-2/3'>
                        <p className='leading-7 text-justify'>Notre agence est composee d'une petite equipe dirigee par le graphiste en personne. Vous aurez donc un contact direct avec celui-ci sans passer par des commerciaux</p>
                    </div>
                </div>
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={trois} width={90} />
                    </div>
                    <div className='w-2/3'>
                        <p className='leading-7'>Nous exercçons notre metier avec passion et implication. Le taux de satisfaction de nos clients témoigne de la qualite de notre travial.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TroisBonnesRaisons
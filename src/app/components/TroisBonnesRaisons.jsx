import Image from 'next/image'
import uno from '../../../public/1.png'
import deux from '../../../public/2.png'
import trois from '../../../public/3.png'


const TroisBonnesRaisons = () => {
  return (
    <div className='flex place-items-center h-auto py-20'>
        <div className='h-auto w-5/6 m-auto'>
            <div className='flex flex-col md:flex-row justify-center'>
                <p className='font-bold text-4xl text-center'>3 bonnes raisons&nbsp;</p>  
                <p className='text-4xl text-center'>de nous choisir</p> 
            </div>
            <div className='text-center pb-10 pt-5'>agence de communication créative situé à Alger</div>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={uno} width={90} />
                    </div>
                    <div><p className='leading-7'>Nous somme crétatifs et pointus dans notre travail. <br />  Vous  pouvez naviguer sur notre site et découvrir <br /> nos références afin de vous en assurer.</p></div>
                </div>
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={deux} width={90} />
                    </div>
                    <div><p className='leading-7'>Notre agence est composee d'une petite equipe dirigee <br /> par le graphiste en personne. Vous aurez donc un contact <br /> direct avec celui-ci sans passer par des commerciaux</p></div>
                </div>
                <div className='flex h-auto w-auto py-5'>
                    <div className='mx-3'>
                    <Image src={trois} width={90} />
                    </div>
                    <div><p className='leading-7'>Nous exercçons notre metier avec passion et implication. <br /> Le taux de satisfaction de nos clients témoigne <br /> de la qualite de notre travial.</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TroisBonnesRaisons
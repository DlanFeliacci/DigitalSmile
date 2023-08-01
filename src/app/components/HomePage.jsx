import Expertise from '../components/Expertise'
import Realisation from '../components/Realisation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TroisBonnesRaisons from '../components/TroisBonnesRaisons'
import GrayDiagonalUp from '../components/GrayDiagonalUp'

const HomePage = () => {

  const text=`Conseil en communication, branding, campagne de pub, logo, charte graphique, packaging, catalogue, web design... Nous vous accompagnons sur votre projet.`

  return (
    <>
        <Hero />
        <Expertise />
        <Realisation />
        <GrayDiagonalUp />
        <TroisBonnesRaisons />
        <Footer text={text} />
    </>
  )
}

export default HomePage
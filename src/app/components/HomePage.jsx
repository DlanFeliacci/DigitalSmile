'use client'
import Expertise from '../components/Expertise'
import Realisation from '../components/Realisation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TroisBonnesRaisons from '../components/TroisBonnesRaisons'
import GrayDiagonalUp from '../components/GrayDiagonalUp'

const HomePage = () => {

  const text=`Consulting in communication, branding, advertising campaign, logo, graphic charter, packaging, catalog, web design... We support you on your project.`

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
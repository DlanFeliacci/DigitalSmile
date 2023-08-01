import About from '../components/About'
import Footer from '../components/Footer'

const page = () => {

  const text = 'Design graphique, compagne de pub, création de logo, pacaging, signalétique, web design...'

  return (
    <div >
      <About />
      <Footer text={text} />
    </div>
  )
}

export default page
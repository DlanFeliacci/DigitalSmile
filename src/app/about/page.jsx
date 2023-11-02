import About from '../components/About'
import Footer from '../components/Footer'

const page = () => {

  const text = 'Graphic design, advertising campaign, logo creation, pacaging, signage, web design...'

  return (
    <div >
      <About />
      <Footer text={text} />
    </div>
  )
}

export default page

import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {

  const text = 'Get in touch with us !'

  return (
    <div>
      <Contact />
      <Footer text={text}/>
    </div>
  )
}

export default page
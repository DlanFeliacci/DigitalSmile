'use client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {

  const text = 'Contactez nous dès à présent !'

  return (
    <div>
      <Contact />
      <Footer text={text}/>
    </div>
  )
}

export default page
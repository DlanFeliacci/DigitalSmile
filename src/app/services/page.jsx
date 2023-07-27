import Footer from '../components/Footer'
import Service from '../components/Service'


const Services = () => {

  const text = 'Nous proposons des campagnes de pubs, des chartes graphiques, des affiches, des sites internet, et photographie'
  
  return (
    <div>
      <Service />
      <Footer text={text}/>
    </div>
  )
}

export default Services
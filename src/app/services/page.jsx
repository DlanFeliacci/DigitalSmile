import Footer from '../components/Footer'
import Service from '../components/Service'


const Services = () => {

  const text = 'We offer advertising campaigns, graphic charters, posters, websites, and photography'
  
  return (
    <div>
      <Service />
      <Footer text={text}/>
    </div>
  )
}

export default Services
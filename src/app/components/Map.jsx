import { useMemo } from 'react'
import { GoogleMap, useLoadScript , MarkerF } from '@react-google-maps/api'
import Lottie from 'lottie-react'
import mapLoading from '../../../public/animation_mapLoading.json'
import animationLoading from '../../../public/animation_loading'


const Map = () => {

    const center = useMemo(() => ({ lat: 36.715692, lng: 3.197167}), [])

    const { isLoaded } = useLoadScript({
      id: 'google-map-script',
      googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

  return isLoaded ? (
    <div className='flex  flex-col justify-center items-center p-10'>
       <div className='w-[400px] p-10 m-auto'>
          <Lottie animationData={mapLoading}/>
        </div>
      <GoogleMap
      zoom={16}
      center ={center}
      mapContainerClassName='map-container'
      >
          <MarkerF position={center}/>

      </GoogleMap>
    </div>
    
  ) : (
        <div className='w-[400px] p-10 m-auto'>
          <Lottie animationData={animationLoading}/>
        </div>
  )
}

export default Map
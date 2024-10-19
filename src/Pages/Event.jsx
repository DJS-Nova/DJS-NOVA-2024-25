import React, { useEffect } from 'react'
import Aos from 'aos'
import Card from '../Components/Cards/Card'
import '../index.css';

function Event() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <>

      <div className='flex items-center justify-start w-full flex-col min-h-screen text-white bg-black gap-5 py-6'>
        
        {/* events in 2024-25 */}
        <h1 data-aos="fade-down" className='text-3xl border-2 border-white py-3 px-5 rounded-full flex items-center justify-center'>
          2024-25
        </h1>
        <div className='flex items-center justify-center'>
          <span data-aos="fade-down" className=''>
            
            <Card title={"Event Horizon 2.0"} description={"A Flagship Event of the DJS NOVA that includes buzzer Round, Treasure round and alot more."} image={null}/>
          </span>
          <span data-aos="fade-down" className=''>
            <Card title={"Industrial Visit"} description={"An Industrial Visit organised by DJS NOVA for star gazing at Naneghat"} image={null}/>
          </span>
        </div>
        {/* events in 2023-24 */}
        
        <h1 data-aos="fade-down" className='text-3xl border-2 border-white py-3 px-5 rounded-full flex items-center justify-center'>
          2023-24
        </h1>
        <div className='flex items-center justify-center'>
          <span data-aos="fade-down">
            <Card />
          </span>
          <span data-aos="fade-down">
            <Card />
          </span>
        </div>
      </div>
      
    </>
  )
}

export default Event
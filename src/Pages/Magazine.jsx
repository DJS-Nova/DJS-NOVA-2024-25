import React, { useEffect } from 'react'
import Aos from 'aos'
import img1 from '../images/img1.png'
import '../index.css'
import img2 from '../images/img2.png'


function Magazine() {

  const images = [{
    id: 1,
    img:img1,
    title: 'Magazine Volume 1',
    description: 'Magazine Unveiling',
    link:"https://drive.google.com/file/d/1gvi8nNOWma0BkaKTPOzuFow2WXAMx607/view?usp=sharing ",
    },{

    id: 2,
    img: img2,
    title: 'Magazine Volume 2',
    description: 'September 2024',
    link: "https://drive.google.com/file/d/16LDq8u0PK3Ya1oKyni4GH1o7scSGHkGP/view?usp=drivesdk",

  }]

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])


  return (
    <>
      <div className='flex items-start justify-center w-full min-h-screen text-white magazineColor'>
        <span  className='flex items-center justify-start gap-10 p-10 flex:col sm:flex-row'>
          {images.map((image) => (
            <a className='w-1/5 h-1/5 scaling' href={image.link}>
              <div data-aos="fade-down" key={image.id} className=" flex  flex-col items-center justify-center gap-3">
                <img src={image.img} alt={image.title} className="w-full h-full" />
                <h1 className='text-2xl font-semibold'>{image.title}</h1>
                <span className='text-lg'>{image.description}</span>
              </div>
            </a>
          ))}
        </span>

      </div>
    </>
  )
}

export default Magazine
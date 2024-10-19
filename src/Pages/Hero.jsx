import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../index.css'
import Globe from '../Components/SolarSystem/Globe'


function Hero() {
    const [astronomy] = useTypewriter({
        words: ["Astronomy"],
        loop: {},
    })

    const [astrophysics] = useTypewriter({
        words: ["Astrophysics"],
        loop: {},
    })

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='bgcolor min-h-max  w-full z-0' id='Home'>
            <div className='block sm:flex'>
                <div className='w-100 sm:w-1/2 min-h-screen flex items-start justify-center sm:mt-28 flex-wrap ' >
                    <div>
                        <div data-aos="fade-down" className='text-2xl font-medium  px-5 ' >
                            <h1 className='pb-8 text-4xl font-bold text-white'>DJS NOVA</h1>
                            <h1 className='text-white'>The official <br /><span className='text-orange-200'>{astronomy}</span><Cursor /> <br />and <span className='text-amber-200'>{astrophysics}</span><Cursor /> <br />club of DJSCE.</h1>
                        </div>
                    </div>
                </div >
                <div className='w-100 sm:w-1/2'>
                    <Globe/>

                </div>
            </div>
            <section className='relative'>
                <div class="custom-shape-divider-top-1722748952">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"
                        >
                        </path>
                    </svg>
                </div>
            </section>
        </div>
    )
}

export default Hero




import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import '../index.css';


function About() {
    useEffect(() => {
        AOS.init({duration:1000});
    }, [])
    return (
        <>
            <div className='min-h-[120vh] w-full aboutUsColor flex text-white
         items-center justify-center flex-col gap-2 px-5'>
                    <div data-aos='fade-up' className='font-semibold text-white px-3 py-2 text-left    text-4xl border-b-4 border-b-black'>
                        About Us
                    </div>
                <div className='sm:flex min-h-fit  sm:items-center sm:justify-center text-xl px-5 sm:gap-4 block py-5' >
                    <div className='border sm:w-1/2 w-full border-black rounded-2xl my-3 px-5 py-5 text-center shadow-lg shadow-slate-950' data-aos="fade-up">DJS Nova, the official Astronomy and Astrophysics Club of D. J. Sanghvi College of Engineering, brings together students with a shared passion for the cosmos. The club hosts stargazing events, workshops, and expert talks, with contributions from all departments, fostering a collaborative learning environment.
</div>
                    <img className=' size' data-aos="fade-up" src="https://djsnova.netlify.app/static/media/6.5a56199010621dc1041b.jpg" alt="" />
                    {/* <div className='border w-1/2 border-black rounded-2xl my-3 px-5 py-5  shadow-lg shadow-slate-950'  data-aos="fade-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odit ipsa repudiandae libero illum. Necessitatibus deserunt doloremque a nulla inventore. Expedita, eos? Nulla a nam sunt, quae dolore sed impedit.</div> */}
                </div>
                <div className='sm:flex min-h-fit  sm:items-center sm:justify-center text-xl px-5 sm:gap-4 block py-5' >
                    <img className=' size' data-aos="fade-up" src="https://djsnova.netlify.app/static/media/6.5a56199010621dc1041b.jpg" alt="" />
                    <div className='border sm:w-1/2 w-full border-black rounded-2xl my-3 px-5 py-5 text-center shadow-lg shadow-slate-950' data-aos="fade-up">The club also takes part in international competitions like NASA Space Apps and IAAC, giving members the chance to apply their knowledge to real-world challenges. By participating in these prestigious events, students not only hone their skills but also represent their college on a global platform.</div>
                    {/* <div className='border w-1/2 border-black rounded-2xl my-3 px-5 py-5  shadow-lg shadow-slate-950'  data-aos="fade-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odit ipsa repudiandae libero illum. Necessitatibus deserunt doloremque a nulla inventore. Expedita, eos? Nulla a nam sunt, quae dolore sed impedit.</div> */}
                </div>
                {/* <section className='relative'>
                    <div class="custom-shape-divider-top-1722749796">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </section> */}
            </div>

        </>
    )
}

export default About
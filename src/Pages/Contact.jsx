import React, { useEffect } from 'react'
import Aos from 'aos'
import Form from '../Components/Form';


function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <div className='sm:flex sm:items-center sm:justify-around w-full min-h-max text-white bg-black p-5 pb-8 block'>

                <div className='sm:w-1/2 w-full flex sm:flex-col flex-row gap-3 items-center justify-center '>
                    <Form />
                </div>

                <div className='sm:w-1/2 w-full  p-5'>
                    <iframe width="100%" height="400" frameborder="0" marginheight="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=No.%20U,%2015,%20Bhaktivedanta%20Swami%20Rd,%20opp.%20Cooper%20Hospital,%20Navpada,%20JVPD%20Scheme,%20Vile%20Parle,%20Mumbai,%20Maharashtra%20400056+(Dwarkadas%20J%20Sanghvi%20College%20Of%20Engineering)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
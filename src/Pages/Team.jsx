import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Core from '../Components/Team2023/Core';


function Team() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);

    function viewHandler1() {
        setIsVisible1(!isVisible1);
    }

    function viewHandler2() {
        setIsVisible2(!isVisible2);
    }

    return (
        <>
            <div className='py-5 flex flex-col gap-5 items-center justify-start w-full min-h-screen text-white teamPageColor'>
                <div  className='flex flex-col items-center justify-center gap-4'>
                    <span className='border px-5 py-2 rounded-full border-white text-3xl hover:cursor-pointer flex items-center' onClick={viewHandler1}>
                        Team 2024{isVisible1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </span>
                    {isVisible1 &&
                        <Core /> //2024
                    }
                </div>
                <div  className='flex flex-col items-center justify-center gap-4'>
                    <span className='border px-5 py-2 rounded-full border-white text-3xl hover:cursor-pointer flex items-center' onClick={viewHandler2}>
                        Team 2023{isVisible2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </span>
                    {isVisible2 &&
                        <Core /> //2023
                    }
                </div>

            </div>
        </>
    )
}

export default Team
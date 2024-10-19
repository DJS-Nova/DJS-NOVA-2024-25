import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {
  return (
    <>
      <div className='w-100 min-h-full bg-black text-white border border-white  flex sm:flex-row gap-4  flex-col items-center justify-center sm:items-center sm:justify-between px-9 py-10'   >
        <div className=' flex items-center justify-center flex-col gap-3'>
          <div className='font-semibold text-2xl'><Link to={'/'} >DJS NOVA</Link></div>
          <div className=' text-slate-300'>The official astronomy and astrophysics <br />club of the college</div>


        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h1 className='text-2xl font-semibold'>
            Address
          </h1>
          <div className='text-slate-300'>
            Dwarkadas J. Sanghvi College of Engineering,<br /> Vile Parle West, Mumbai-400056
          </div>
        </div>
        <p className='flex flex-col items-center justify-center gap-3'>
          <h1 className='text-2xl font-semibold'>Contact</h1>
          <div className='text-slate-300'>
            Email: djsnova09@gmail.com<br />
            Revati Singh: +91 82916 53370
          </div>
        </p>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-2xl font-semibold'>Socials</h1>
          <div className='flex gap-4 '>
            <div className=' border-white rounded-full p-2  flex items justify-center border-2 hover:bg-slate-700'><Link to="https://www.instagram.com/djs.nova/"><InstagramIcon /></Link></div>
            <div className=' border-white rounded-full p-2 flex hover:bg-slate-700 items justify-center border-2'><Link to="https://x.com/djsnova04"><XIcon /></Link></div>
            <div className=' border-white rounded-full p-2 hover:bg-slate-700 flex items justify-center border-2'> <Link to="https://www.linkedin.com/company/djs-nova/posts/?feedView=all"><LinkedInIcon /></Link></div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
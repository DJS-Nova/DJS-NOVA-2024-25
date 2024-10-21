import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Member({img, altText, name, instagram, linkedin, role}) {
  return (
      <>
          <div className='flex flex-col items-start '>
              <div className='h-56 w-48  rounded-lg overflow-hidden border-2 border-white '>
                  <img  src={img || "./images/piyush.jpg"} alt={altText || "Member"} className='rounded-lg hover:scale-105 transition-all ' />
              </div>
              <div className='flex flex-row  items-center justify-between gap-3 w-full'>
                  <div className='flex'>
                      <h1>{name}{", "}{ role}</h1>
                     
                  </div>
                  <div>
                      {/* todo: add icons */}
                      {linkedin && <a href={linkedin}><LinkedInIcon /></a>}
                     {instagram && <a href={instagram}><InstagramIcon /></a>}
                  </div>
              </div>
          </div>
      </>
  )
}

export default Member
import React from 'react'

function Member({img, altText, name}) {
  return (
      <>
          <div className='flex flex-col items-start '>
              <div className='h-56 w-48  rounded-lg overflow-hidden border-2 border-white '>
                  <img src={img || "./images/piyush.jpg"} alt={altText || "Member"} className='rounded-lg hover:scale-105 transition-all ' />
              </div>
              <h1 className=' '>
                  {name}
              </h1>
          </div>
      </>
  )
}

export default Member
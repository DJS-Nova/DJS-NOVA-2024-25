import React from 'react'
import Member from '../members/Member'
import janhvi from '../members/images/janhvi.jpg'
import piyush from '../members/images/piyush.jpg'
import jainil from '../members/images/jainil.jpg'


function Core() {
  return (
    <>
      <div className='flex flex-col gap-9 items-center'>
        <Member img={janhvi} altText={"janhvi"} name={"Janhvi"} linkedin={"https://www.linkedin.com/in/janhvi-gandhi19/"} role={"Chairperson"}/>
        <div className='flex sm:flex-row flex-col gap-8'>
          <Member img={piyush} altText={"Piyush"} name={"Piyush"} />
          <Member img={jainil} altText={"Piyush"} name="Jainil" />
        </div>
        <div className='flex sm:flex-row flex-col gap-9'>
          <Member img={piyush} altText={"Piyush"} />
          <Member img={piyush} altText={"Piyush"} />
          <Member img={piyush} altText={"Piyush"} />
        </div>
      </div>
    </>
  )
}

export default Core
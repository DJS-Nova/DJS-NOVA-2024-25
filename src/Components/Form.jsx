import ButtonRoot from '../Components/ButtonRoot'
import react from 'react';


export default function Form() {
    return (
        <div className='flex flex-col items-center justify-center gap-9'>
            <h1 className='text-3xl font-semibold border-b-2 rounded-lg px-2 py-3'>Send A Message.</h1>
            <div className='flex flex-col items-center justify-center gap-7'>
                <input
                    type="text"
                    placeholder='Name'
                    required
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                />
                <input
                    type="email"
                    placeholder='Email'
                    required
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                />
                <textarea name="" id=""
                    placeholder='Enter your Query'
                    required
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                ></textarea>
                <div className='hover:cursor-pointer'>
                    <ButtonRoot />
                </div>
            </div>
        </div>
    )
}
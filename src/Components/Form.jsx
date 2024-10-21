import ButtonRoot from '../Components/ButtonRoot'
import toast from 'react-hot-toast';
import react, { useState } from 'react';
import { RestaurantRounded } from '@mui/icons-material';


export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const handler = () => {
        toast.success("Query sent successfully")
        setName("");
        setEmail("");
        setQuery("");

    }
    return (
        <div className='flex flex-col items-center justify-center gap-9'>
            <h1 className='text-3xl font-semibold border-b-2 rounded-lg px-2 py-3'>Send A Message.</h1>
            <div className='flex flex-col items-center justify-center gap-7'>
                <input
                    type="text"
                    placeholder='Name'
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                />
                <input
                    type="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                />
                <textarea name="" id=""
                    placeholder='Enter your Query'
                    required
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    className='px-4 py-2 rounded-lg text-white border-white bg-black border-b-2'
                ></textarea>
                <div className='hover:cursor-pointer' onClick={handler}>
                    <ButtonRoot label={"Submit"}/>
                </div>
            </div>
        </div>
    )
}
import { useState } from 'react'

let Contact = () =>
{
    let [ error , setError ] = useState('');
    let [mailsend, setMailsend] = useState('');

    return (
        <div className="w-full justify-center text-center p-8 py-24 flex">
            <div className="gap-6 flex flex-col justify-center border-2 border-[#FF5E8A] rounded-3xl w-lg p-8">
                <h1 className="montserrat text-[#FF5E8A] text-3xl font-bold">Contact Me !</h1>
                <input className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Name"/>
                <input className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Email"/>
                <textarea className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Message"/>
                <div className="cursor-crosshair bg-[#FF5E8A80] p-4 rounded-xl montserrat font-bold hover:text-black text-white">Oh Yeah</div>
                <p className='montserrat text-[#FF5E8A] text-sm'>{error}</p>
                <p className='montserrat text-[#B051EE]'>{mailsend}</p>
            </div>
        </div>
    )
}

export default Contact;
import { useRef , useState } from 'react'
import emailjs from '@emailjs/browser'

let Contact = () =>
{
    const form = useRef();
    const [ error , setError ] = useState('');
    const [ mailsend , setMailsend ] = useState('');

    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ message , setMessage ] = useState('');

    const sendEmail = (e) =>
    {
        setError('');
        setMailsend('');

        if (name == '')
        {
            setError('A name is required');
        } else if (email == '')
        {
            setError('An email is required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        {
            setError('The email must be valid');
        } else {
            setMailsend('Mail sent, I will respond soon !');
            emailjs.send("service_etq6spm","template_333w0b5",{
                name: name,
                email: email,
                message: message,
                language : "en"
            }, "vvPs1YHSI8W-CMfBI");
        }
    };

    return (
        <div className="w-full justify-center text-center p-8 py-24 flex">
            <div className="gap-6 flex flex-col justify-center border-2 border-[#FF5E8A] rounded-3xl w-lg p-8">
                <h1 className="montserrat text-[#FF5E8A] text-3xl font-bold">Contact Me !</h1>
                <input onChange={(e) => setName(e.target.value)} type="text" className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Name"/>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Email"/>
                <textarea onChange={(e) => setMessage(e.target.value)} className="montserrat text-white text-xl border-2 border-[#B051EE] p-4 rounded-xl" placeholder="Message"/>
                <button onClick={() => sendEmail()} className="cursor-crosshair bg-[#FF5E8A80] p-4 rounded-xl montserrat font-bold hover:text-black text-white">Let's go !</button>
                {error != '' && <p className='montserrat text-[#FF5E8A] text-sm'>{error}</p>}
                {mailsend != '' && <p className='montserrat text-[#B051EE]'>{mailsend}</p>}
            </div>
        </div>
    )
}

export default Contact;
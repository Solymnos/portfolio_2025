let CareerItem = ({ type , place , date , title , data }) =>
{
    const p = ['pt-[10rem]' , 'pt-[20rem]' , 'pt-[30rem]'];
    const rp = p[Math.floor(Math.random() * p.length)];
    
    if (type == "diploma")
    {
        return (
            <div className={`group flex flex-col h-full w-[14.2857%] items-center gap-4 px-2 ${rp} hover:bg-[#B051EE80] ease-in-out duration-500 rounded-4xl`}>
                <text className='break-normal montserrat font-bold text-[#FF5E8A] text-xl text-center'>{title}</text>
                <text className='break-normal montserrat font-bold text-white text-xl text-center overflow-hidden whitespace-nowrap max-h-0 group-hover:max-h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>{data}</text>
                <img className='group-hover:rotate-[135deg] duration-300 w-36 h-36' src='/img/EtoileLogo2.png'/>
                <text className='break-normal montserrat font-bold text-white text-xl text-center  overflow-hidden whitespace-nowrap max-h-0 group-hover:max-h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>{place}</text>
                <text className='break-normal montserrat font-bold text-[#FF5E8A] text-xl'>{date}</text>
            </div>
        )
    } else {
        return (
            <div className={`group flex flex-col h-full w-[14.2857%] items-center gap-4 px-2 ${rp} hover:bg-[#FF5E8A80] ease-in-out duration-500 rounded-4xl`}>
                <text className='montserrat font-bold text-[#B051EE] text-xl text-center'>{title}</text>
                <text className='montserrat font-bold text-white text-xl text-center overflow-hidden whitespace-nowrap max-h-0 group-hover:max-h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>{data}</text>
                <img className='group-hover:rotate-[135deg] duration-300 w-36 h-36' src='/img/EtoileLogo.png'/>
                <text className='montserrat font-bold text-white text-xl text-center  overflow-hidden whitespace-nowrap max-h-0 group-hover:max-h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>{place}</text>
                <text className='montserrat font-bold text-[#B051EE] text-xl'>{date}</text>
            </div>
        )
    }
}

export default CareerItem;
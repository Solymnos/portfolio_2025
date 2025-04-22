let CarouselItem = ({ logo , text }) =>
{
    return (
        <div className='flex flex-col p-6 w-full h-full justify-center items-center gap-4 hover:bg-[#FF5E8A80] rounded-4xl'>
            <img className='w-40 h-40' src={logo}/>
            <h1 className='montserrat text-[#B051EE] text-3xl font-bold'>{text}</h1>
        </div>
    )
}

export default CarouselItem;
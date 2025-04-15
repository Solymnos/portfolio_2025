let Home = () =>
{
    return (
        <div className='flex h-screen w-full justify-center items-center text-center'>
            <div className='relative flex flex-col gap-8'>
                <h1 data-text="CARL AMELINE" className='text-5xl lg:text-9xl font-title text-[#B051EE] matrix-text'>CARL AMELINE</h1>
                <h2 className='typewrite thick text-3xl lg:text-6xl font-subtitle text-[#B051EE]'></h2>
                <div className='flex flex-row justify-center gap-8'>
                  <a href='/document/FCV_EN.pdf' download>
                    <div className="flex items-center gap-4 group w-fit group-hover:scale-105">
                      <img src="/img/CVLogo.png" alt="CV Logo" className="max-w-10 max-h-10 lg:max-w-18 lg:max-h-18 cursor-pointer transition-transform duration-300"/>
                      <h1 className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#B051EE] font-bold montserrat text-xl cursor-pointer">Download Resume</h1>
                    </div>
                  </a>
                  <a href='https://www.github.com/solymnos' target='_blank'>
                    <div className="flex items-center gap-4 group w-fit group-hover:scale-105">
                      <img src="/img/GithubLogo.png" alt="CV Logo" className="max-w-10 max-h-10 lg:max-w-18 lg:max-h-18 cursor-pointer transition-transform duration-300"/>
                      <h1 className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#B051EE] font-bold montserrat text-xl cursor-pointer">Go To GitHub</h1>
                    </div>
                  </a>
                  <a href='https://www.linkedin.com/in/carl-ameline/' target='_blank'>
                    <div className="flex items-center gap-4 group w-fit group-hover:scale-105">
                      <img src="/img/LinkedInLogo.png" alt="CV Logo" className="max-w-10 max-h-10 lg:max-w-18 lg:max-h-18 cursor-pointer transition-transform duration-300"/>
                      <h1 className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#B051EE] font-bold montserrat text-xl cursor-pointer">Go To LinkedIn</h1>
                    </div>
                  </a>
                  <a href='mailto:dev@soly.cool'>
                    <div className="flex items-center gap-4 group w-fit group-hover:scale-105">
                      <img src="/img/MailLogo.png" alt="CV Logo" className="max-w-10 max-h-10 lg:max-w-18 lg:max-h-18 cursor-pointer transition-transform duration-300"/>
                      <h1 className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#B051EE] font-bold montserrat text-xl cursor-pointer">Send me a mail</h1>
                    </div>
                  </a>
                </div>
            </div>
        </div>   
    )
}

export default Home;
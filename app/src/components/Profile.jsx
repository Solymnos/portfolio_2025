import { useEffect , useRef , useState } from "react";

let Profile = () =>
{
    const ref = useRef(null);
    const [isProfileVisible, setProfileVisible ] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setProfileVisible(entry.isIntersecting),
            {
                threshold : 0.2,
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    }, []);

    return (
        <div className='flex h-screen w-full'>
            <div className='flex h-full w-1/2 box-border items-center justify-center'>
                <div ref={ref} className={`${isProfileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out flex flex-col h-min m-16 bg-[#0c041c] rounded-2xl p-8 gap-4`}>
                    <div className='flex flex-row w-full gap-4 items-center'>
                        <img className='h-8 w-8' src='/img/JSONLogo.png' />
                        <text className='montserrat font-bold text-white'>JSON</text>
                        <div className='flex grow' />
                        <img className='h-8 w-8' src='/img/DropdownLogo.png' />
                    </div>
                    <div className='flex firacode text-white font-semibold'>
                        <p>
                            {"{"}<br />
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Last Name\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Ameline\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"First Name\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Carl\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Age\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"26\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Location\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Bordeaux, France\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Dream Job\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Full Stack Dev\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Availability Date\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"October 2025\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Currently Work On\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Portfolio\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Fun Fact\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Named my cat Sett because of LoL\""}</span>{";"}<br /></p>
                            <p className='indent-8'><span className='text-[#B051EE]'>{"\"Now playing\""}</span>{" : "}<span className='text-[#FF5E8A]'>{"\"Elevator Operator - Electric Callboy\""}</span>{";"}<br /></p>
                            {"}"}<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex h-full w-1/2'>
            
            </div>
        </div>
    )
}

export default Profile;
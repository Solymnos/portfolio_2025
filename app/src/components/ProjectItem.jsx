import { useEffect , useState } from "react"

let ProjectItem = ({item, selectedId, selectProject}) =>
{
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % item.images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [item.images.length])

    if (selectedId == -1)
    {
        return (
            <div className="p-4 lg:p-8 w-full lg:w-1/2 h-full">
                <div onClick={() => selectProject(item.id)} className="min-h-60 items-center h-full hover:border-[#FF5E8A] cursor-pointer p-8 flex flex-row  justify-between border-2 border-[#B051EE] w-full rounded-4xl gap-8">
                    <div className="flex flex-col">
                        <h1 className="montserrat font-bold text-white text-4xl">{item.name}</h1>
                        <p className="montserrat text-white">{item.description}</p>
                    </div>
                    <div className="flex h-full">
                        <img className="max-w-24 max-h-24" src={item.icon}/>
                    </div>
                </div>
            </div>
        )
    }
    else if (selectedId == item.id)
    {
        return (
            <div className="p-8 w-full h-full">
                <div onClick={() => selectProject(-1)} className="hover:border-[#FF5E8A] cursor-pointer p-8 flex flex-row  justify-between border-2 border-[#B051EE] w-full min-h-3 rounded-4xl gap-8">
                    <div className="flex flex-col w-1/2 gap-8 justify-between">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 items-center">
                                <img className="max-w-24 max-h-24" src={item.icon} />
                                <div className='flex flex-col'>
                                    <h1 className="montserrat text-white font-bold text-5xl">{item.name}</h1>
                                    <h2 className="montserrat text-[#FF5E8A] font-bold text-3xl">{item.year}</h2>
                                </div>
                                
                            </div>
                            <p className="montserrat text-white text-2xl">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {
                                item.techs.map((tech) => {
                                    return (
                                        <div className="bg-[#B051EE80] p-2 rounded-xl text-white montserrat">
                                            {tech}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2 gap-4">
                        <img className="max-w-full rounded-3xl h-96" src={item.images[index]} />
                        <div className="flex flex-row w-full justify-end gap-4">
                            {
                                item.githuburl != '' ? (
                                    <a href={item.githuburl} target="_blank">
                                        <div className="p-4 border-2 border-[#B051EE] rounded-xl">
                                            <img className="h-10" src="/img/GithubLogo.png" />
                                        </div>
                                    </a>
                                ) : (
                                    <></>
                                )
                            }
                            {
                                item.url != '' ? (
                                    <a href={item.url} target="_blank">
                                        <div className="p-4 border-2 border-[#B051EE] rounded-xl">
                                            <img className="h-10" src="/img/LinkLogo.png" />
                                        </div>
                                    </a>
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}

export default ProjectItem;
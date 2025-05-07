let ProjectItem = ({item, selectedId, selectProject}) =>
{
    if (selectedId == -1)
    {
        return (
            <div className="p-4 lg:p-8 w-full lg:w-1/2 h-full">
                <div onClick={() => selectProject(item.id)} className="hover:border-[#FF5E8A] cursor-pointer p-8 flex flex-row  justify-between border-2 border-[#B051EE] w-full min-h-3 rounded-4xl">
                    <div className="flex flex-col">
                        <h1 className="montserrat font-bold text-white text-4xl">{item.name}</h1>
                        <p className="montserrat text-white">{item.description}</p>
                    </div>
                    <div>
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
                <div onClick={() => selectProject(-1)} className="hover:border-[#FF5E8A] cursor-pointer p-8 flex flex-row  justify-between border-2 border-[#B051EE] w-full min-h-3 rounded-4xl">
                    <div className="flex flex-col w-1/2 gap-8 justify-between">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-8 items-center">
                                <img className="max-w-24 max-h-24" src={item.icon} />
                                <h1 className="montserrat text-white font-bold text-5xl">{item.name}</h1>
                            </div>
                            <p className="montserrat text-white text-2xl">{item.description}</p>
                        </div>
                        <div className="flex flex-row gap-4">
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
                    <div className="flex flex-col justify-center items-center w-1/2">
                        <img className="max-w-full rounded-3xl" src={item.images[0]} />
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
import { useState } from 'react'
import ProjectItem from './ProjectItem'

let projectsData = [
    {
        "id" : 0,
        "name" : "Slydle",
        "icon" : "/img/LinkedInLogo.png",
        "description" : "A cool project",
        "images" : ["/img/test.jpg", "2.png"],
        "githuburl" : "githublink.com",
        "url" : "url.com",
        "techs" : ["tech1", "tech2", "tech3"]
    },{
        "id" : 1,
        "name" : "Slydle",
        "icon" : "/img/LinkedInLogo.png",
        "description" : "A cool project",
        "images" : ["1.png", "2.png"],
        "githuburl" : "githublink.com",
        "url" : "url.com",
        "techs" : ["tech1", "tech2", "tech3"]
    },{
        "id" : 2,
        "name" : "Slydle",
        "icon" : "/img/LinkedInLogo.png",
        "description" : "A cool project",
        "images" : ["1.png", "2.png"],
        "githuburl" : "githublink.com",
        "url" : "url.com",
        "techs" : ["tech1", "tech2", "tech3"]
    },{
        "id" : 3,
        "name" : "Slydle",
        "icon" : "/img/LinkedInLogo.png",
        "description" : "A cool project",
        "images" : ["1.png", "2.png"],
        "githuburl" : "githublink.com",
        "url" : "url.com",
        "techs" : ["tech1", "tech2", "tech3"]
    }
]

let Projects = () =>
{
    const  [ selectedProject , setSelectedProject ] = useState(-1);
    
    let selectProject = (id) =>
    {
        setSelectedProject(id);
    }

    return (
        <div className='flex flex-wrap w-full'>
            {
                projectsData.map((item) => {
                    return (
                        <ProjectItem item={item} selectedId={selectedProject} selectProject={selectProject}/>
                    )
                })
            }
        </div>
    )
}

export default Projects;
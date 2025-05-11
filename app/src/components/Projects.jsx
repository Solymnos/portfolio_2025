import { useState } from 'react'
import ProjectItem from './ProjectItem'

let projectsData = [
    {
        "id" : 0,
        "name" : "Soly.cool",
        "icon" : "/img/EtoileLogo2.png",
        "description" : "This is the site you are actually consulting. Based on a stellar theme, it's designed to display my work and the different projects I have done in my short career.",
        "images" : ["/img/solycool1.png", "/img/solycool2.png", "/img/solycool3.png"],
        "githuburl" : "https://github.com/Solymnos/portfolio_2025",
        "url" : "https://soly.cool",
        "techs" : ["Vite", "React", "TailwindCSS", "JavaScript", "ThreeJS", "Maya"],
        "year" : "2025"
    },
    {
        "id" : 1,
        "name" : "Slydle",
        "icon" : "/img/SolaryLogo.png",
        "description" : "Inspired by concepts like Loldle, Slydle is a game where the player has to guess a personality, based on the esports team Solary. Every day, a new person will be guessable and the player must come back to keep their streak. After more than 250 players, the team decided to make this more official and now hosts the game on their own app.",
        "images" : ["/img/Slydle1.png", "/img/Slydle2.png", "/img/Slydle3.png"],
        "githuburl" : "https://github.com/Solymnos/slydle",
        "url" : "https://slydle.fr",
        "techs" : ["React", "Styled Components", "JavaScript", "Redux", "Framer", "Axios", "Python", "FastAPI", "MongoDB"],
        "year" : "2024-2025"
    },
    {
        "id" : 2,
        "name" : "Twisted Fate",
        "icon" : "/img/TFLogo.png",
        "description" : "In collaboration with a LoL analyst, Twisted Fate is a site that allows people to bet on multiple LoL competitions and win points. The site allows authentication, results, and ranking between participants. The data is based on the Liquipedia API and is fully automated.",
        "images" : ["/img/TF1.png", "/img/TF2.png"],
        "githuburl" : "https://github.com/Solymnos/twisted_fate",
        "url" : "",
        "techs" : ["Vite", "React", "Styled Components", "JavaScript", "Redux", "Axios", "Python", "FastAPI", "MongoDB", "ShadcnUI"],
        "year" : "2024-2025"
    },
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
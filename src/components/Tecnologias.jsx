import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPython,
    DiJava
} from 'react-icons/di'

import '../styles/components/tecnologias.sass'

const tecnologias = [
    {id: "html", name: "HTML5", icon: <DiHtml5 /> },
    {id: "css", name: "CSS3", icon: <DiCss3 /> },
    {id: "JS", name: "JavaScript", icon: <DiJsBadge/> },
    {id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    {id: "mysql", name: "MySQL", icon: <DiMysql /> },
    {id: "react", name: "React", icon: <DiReact />},
    {id: "python", name: "Python", icon: <DiPython /> },
    {id: "java", name: "Java", icon: <DiJava /> },

]

const Tecnologias = () => {
  return (
    <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
            {tecnologias.map((tech) => (
                <div className='technology-card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technology-info'>
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Tecnologias
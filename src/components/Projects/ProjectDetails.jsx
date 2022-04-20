import "../../utils/styles/Projects/ProjectDetails.css"

export function ProjectDetails({object}) {
    return(
        <div className="projects-details-wrapper">
            <div className="projects-details-content">
                <h3>{object.title}</h3>
                {object.tech.map((elem,index) => (<span key={`tech-${index}`}>{elem}</span>))}
                <p>{object.description}</p>
                <div className="projects-links">
                    {object.projectURL && <a href={object.projectURL} target="_blank" rel="noreferrer">Voir le projet</a>}
                    <a href={object.codeURL} target="_blank" rel="noreferrer">Voir le code</a>
                </div>
            </div>

            <div className="project-details-img">
                <img src={object.img} alt="project" />
            </div>
        </div>
    )
}
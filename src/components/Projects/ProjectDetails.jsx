import "../../utils/styles/Projects/ProjectDetails.css"

export function ProjectDetails({title, description, tech, img}) {
    return(
        <div className="projects-details-wrapper">
            <div className="projects-details-content">
                <h3>{title}</h3>
                <span>{tech}</span>
                <p>{description}</p>
                <div className="projects-links">
                    <a href="https://www.google.com">Voir le projet</a>
                    <a href="https://www.google.com">Voir le code</a>
                </div>
            </div>

            <div className="project-details-img">
                <img src={img} alt="project" />
            </div>
        </div>
    )
}
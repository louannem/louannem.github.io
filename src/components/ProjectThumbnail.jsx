import "../utils/styles/ProjectThumbnail.css"

export function ProjectThumbnail({object}) {
    return(
        <article className="project-thumbnail" style={{backgroundImage: 'url('+object.img+')'}}>
            <div className="thumbnail-wrapper">
                <h3>{object.title}</h3>
                {object.tech.map((elem, index) => (
                    <span key={`thumbnail-${index}`}>{elem}</span>
                ))}
                <div className="projects-thumbnail-links">
                    {object.projectURL && <a href={object.projectURL} target="_blank" rel="noreferrer">Voir le projet</a>}
                    <a href={object.codeURL} target="_blank" rel="noreferrer">Voir le code</a>
                </div>
            </div>
        </article>
    )
}
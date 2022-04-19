import "../utils/styles/ProjectThumbnail.css"

export function ProjectThumbnail({title, tech, IMGurl}) {
    return(
        <article className="project-thumbnail" style={{backgroundImage: 'url('+IMGurl+')'}}>
            <div className="thumbnail-wrapper">
                <h3>{title}</h3>
                <span>{tech}</span>
            </div>
        </article>
    )
}
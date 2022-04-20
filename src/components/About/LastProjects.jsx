import "../../utils/styles/About/LastProjects.css"
import { ProjectThumbnail } from "../ProjectThumbnail"

import { Link } from "react-router-dom"
import { projectObj } from "../../utils/datas/projects"


export function LastProjects() {
    const lastProjects = projectObj.slice(-3)

    return(
        <section id="Last-projects-section">
            <h2>Derniers projets</h2>
            <div className="projects-grid">
                {lastProjects.map((project, index) => (
                    <ProjectThumbnail key={`project-${index}`} object={project} />
                ))}
                
            </div>

            <Link to="/projects"> Voir les projets</Link>
        </section>
    )
}
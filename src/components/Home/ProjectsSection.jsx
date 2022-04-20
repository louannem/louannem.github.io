import "../../utils/styles/Home/ProjectsSection.css"
import { ProjectThumbnail } from "../ProjectThumbnail"
import { Link } from "react-router-dom"
import { homeData } from "../../utils/datas/home"
import { projectObj } from "../../utils/datas/projects"

export function ProjectsSection() {
    const lastProjects = projectObj.slice(-3)


    return(
        <section id="Projects-section-wrapper">
            <div className="projects-title">
                <h2>Derniers projets</h2>
                <span>{homeData.lastProjectsUnderTitle}</span>
            </div>

            <div className="projects-grid">
                {lastProjects.map((project, index) => (
                    <ProjectThumbnail key={`project-${index}`} object={project} />
                ))}
            </div>

            <Link to="/projects"> Voir les projets</Link>
        </section>
    )
}
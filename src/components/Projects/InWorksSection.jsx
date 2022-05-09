import { inWorks } from "../../utils/datas/projects"
import { ProjectDetails } from "./ProjectDetails"
import "../../utils/styles/Projects/InWorksSection.css"

export const InWorksSection = () => {
    return(
        <section id="Inworks-projects-section">
            <h2>Projets en cours</h2>

            <div className="projects-list">
            {inWorks.map((project, index) => (
                <ProjectDetails key={`project-${index}`} object={project} />
                ))}
            </div>
        </section>
        
    )
}
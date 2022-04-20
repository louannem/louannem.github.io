import "../../utils/styles/Projects/ProjectsSection.css"
import { ProjectDetails } from "./ProjectDetails"
import { projectObj, projectPararaphe } from "../../utils/datas/projects"

export function ProjectsPage() {
    return(
        <section id="Projects-section">
            <p className="section-paragraphe">
                {projectPararaphe}
            </p>

            <div className="projects-list">
              {projectObj.map((project, index) => (
                  <ProjectDetails key={index} object={project} />
              ))}  
               
            </div>

        </section>
    )
}
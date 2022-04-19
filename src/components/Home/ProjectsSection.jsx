import "../../utils/styles/Home/ProjectsSection.css"
import { ProjectThumbnail } from "../ProjectThumbnail"
import kasa from "../../assets/projects/kasa.png"
import fisheye from "../../assets/projects/eyefish.png"
import argentbank from "../../assets/projects/argent_bank.png"
import { Link } from "react-router-dom"

export function ProjectsSection() {
    return(
        <section id="Projects-section-wrapper">
            <div className="projects-title">
                <h2>Derniers projets</h2>
                <span>Risus, et, libero duis amet at.</span>
            </div>

            <div className="projects-grid">
                <ProjectThumbnail title="Projet 1" tech="tech / tech / tech" IMGurl={kasa} />
                <ProjectThumbnail title="Projet 2" tech="tech / tech / tech" IMGurl={fisheye} />
                <ProjectThumbnail title="Projet 3" tech="tech / tech / tech" IMGurl={argentbank} />
            </div>

            <Link to="/"> Voir les projets</Link>
        </section>
    )
}
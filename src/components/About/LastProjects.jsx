import "../../utils/styles/About/LastProjects.css"
import { ProjectThumbnail } from "../ProjectThumbnail"
import kasa from "../../assets/projects/kasa.png"
import fisheye from "../../assets/projects/eyefish.png"
import argentbank from "../../assets/projects/argent_bank.png"
import { Link } from "react-router-dom"

export function LastProjects() {
    return(
        <section id="Last-projects-section">
            <h2>Derniers projets</h2>
            <div className="projects-grid">
                <ProjectThumbnail title="Projet 1" tech="tech / tech / tech" IMGurl={kasa} />
                <ProjectThumbnail title="Projet 2" tech="tech / tech / tech" IMGurl={fisheye} />
                <ProjectThumbnail title="Projet 3" tech="tech / tech / tech" IMGurl={argentbank} />
            </div>

            <Link to="/projects"> Voir les projets</Link>
        </section>
    )
}
import "../../utils/styles/Projects/ProjectsSection.css"
import { ProjectDetails } from "./ProjectDetails"
import kasa from "../../assets/projects/kasa.png"
import fisheye from "../../assets/projects/eyefish.png"

export function ProjectsPage() {
    return(
        <section id="Projects-section">
            <p className="section-paragraphe">
            A turpis tincidunt neque porttitor blandit risus, nam gravida aenean. Vestibulum enim pretium lacinia diam consectetur scelerisque aliquet tristique. Ultricies habitant sociis dis eget nibh lectus vitae. Morbi tellus ut.
            </p>

            <div className="projects-list">
                <ProjectDetails img={kasa} title="Project title" tech="Tech / tech / tech" description="Id maecenas urna purus eu risus, gravida. Gravida ipsum egestas lectus vel dignissim cursus vulputate. Quis vel rhoncus a nunc." />
                <ProjectDetails img={fisheye} title="Project title" tech="Tech / tech / tech" description="Id maecenas urna purus eu risus, gravida. Gravida ipsum egestas lectus vel dignissim cursus vulputate. Quis vel rhoncus a nunc." />
            </div>

        </section>
    )
}
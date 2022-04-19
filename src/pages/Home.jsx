import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { FrontHeader } from "../components/FrontHeader"
import { ProjectsSection } from "../components/ProjectsSection"


export function Home() {
    return(
        <section>
            <FrontHeader />
            <About />
            <ProjectsSection />
            <Contact form={true} />
        </section>
    )
}
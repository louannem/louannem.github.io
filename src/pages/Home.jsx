import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { FrontHeader } from "../components/FrontHeader"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"


export function Home() {
    return(
        <section>
            <Navbar />
            <FrontHeader />
            <About />
            <ProjectsSection />
            <Contact form={true} />
        </section>
    )
}
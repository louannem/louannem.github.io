import { About } from "../components/Home/About"
import { Contact } from "../components/Contact"
import { FrontHeader } from "../components/Home/FrontHeader"
import { ProjectsSection } from "../components/Home/ProjectsSection"
import mail from "../assets/mail.svg"
import linkedIn from "../assets/linkedIn.svg"

export function Home() {
    return(
        <section>
            <FrontHeader />
            <About />
            <ProjectsSection />
            <Contact form={true} pillColor="blue" sectionColor="pink" pillIcon1={linkedIn} pillIcon2={mail} />
        </section>
    )
}
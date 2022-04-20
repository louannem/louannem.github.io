import { About } from "../components/Home/AboutSection"
import { Contact } from "../components/Contact"
import { FrontHeader } from "../components/Home/FrontHeader"
import { ProjectsSection } from "../components/Home/ProjectsSection"
import mail from "../assets/mail.svg"
import linkedIn from "../assets/linkedIn.svg"
import { homeData } from "../utils/datas/home"
import { useEffect } from "react"

export function Home() {
    useEffect(() => {
        document.title = "Accueil - Lou-Anne Martins"
    })
    return(
        <section>
            <FrontHeader />
            <About />
            <ProjectsSection />
            <Contact undertitleText={homeData.contactUnderTitle} subTitle={true} form={true} pillColor="blue" sectionColor="pink" pillIcon1={linkedIn} pillIcon2={mail} />
        </section>
    )
}
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { ProjectsPage } from "../components/Projects/ProjectsContent";
import { InWorksSection } from "../components/Projects/InWorksSection";
import blueGithub from "../assets/github-blue.svg";
import blueMail from "../assets/envelope-blue.svg";
import { useEffect } from "react";

export function Projects() {
    useEffect(() => {
        document.title = "Projets"
    })
    return(
        <section id="Projects-page">
            <Header title="Projets" />
            <ProjectsPage />
            <InWorksSection />
            <Contact form={false} subTitle={false} sectionColor="blue" pillColor="pink" pillIcon1={blueGithub} pillIcon2={blueMail} />
        </section>
    )
}
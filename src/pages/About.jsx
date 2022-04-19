import { LastProjects } from "../components/About/LastProjects";
import { Overview } from "../components/About/Overview";
import { Parcours } from "../components/About/Parcours";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import blueLinkedIn from "../assets/linkedin-in-blue.svg"
import blueMail from "../assets/envelope-blue.svg"

export function About() {
    return(
        <section>
           <Header title="A propos" />
           <Overview />
           <Parcours />
           <LastProjects />
           <Contact subTitle={false} form={false} sectionColor="blue" pillColor="pink" pillIcon1={blueLinkedIn} pillIcon2={blueMail} />
        </section>
    )
}
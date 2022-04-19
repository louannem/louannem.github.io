import { About } from "../components/About"
import { FrontHeader } from "../components/FrontHeader"
import { Navbar } from "../components/Navbar"


export function Home() {
    return(
        <section>
            <Navbar />
            <FrontHeader />
            <About />
        </section>
    )
}
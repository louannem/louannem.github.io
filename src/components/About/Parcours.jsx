import "../../utils/styles/About/Formation.css"
import { SimpleCard } from "./SimpleCard"

export function Parcours() {
    return(
        <section id="Formation-section">
            <h2>Formation & expériences</h2>

            <div className="formation-grid">
                
                <SimpleCard title="Formation" type="formation" />
                <SimpleCard title="Expériences" type="experience" />
               
            </div>
        </section>
    )
}
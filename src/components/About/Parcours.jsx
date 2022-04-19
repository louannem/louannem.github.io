import "../../utils/styles/About/Formation.css"
import { SimpleCard } from "./SimpleCard"

export function Parcours() {
    return(
        <section id="Formation-section">
            <h2>Formation & expériences</h2>

            <div className="formation-grid">
                <SimpleCard title="Formations" />
                <SimpleCard title="Expériences" />
            </div>
        </section>
    )
}
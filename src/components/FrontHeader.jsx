import "../utils/styles/FrontHeader.css"
import ellipse from "../assets/ellipse.svg"

export function FrontHeader() {
    return(
        <section id="Frontheader-wrapper">
            <img src={ellipse} alt="ellipse background" />
            <div className="Frontheader-content">
                <span>Lou-Anne Martins</span>
                <h1>Front-End Developper Junior</h1>
                <p>Portfolio</p>
            </div>
        </section>
    )
}
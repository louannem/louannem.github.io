import { Link } from "react-router-dom"
import "../utils/styles/About.css"

export function About() {
    return(
        <section id="about-wrapper">
            <div className="about-title">
                <h2>A propos</h2>
                <span>Risus, et, libero duis amet at.</span>
            </div>
            
            <div className="about-content">
                <div className="technologies-block">
                    <ul>
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                        <li>Tech 4</li>
                    </ul>
                </div>

                <div className="about-text">
                    <p>Adipiscing sagittis lorem elit purus pellentesque ornare. Imperdiet amet nisl lacus, sed gravida pretium vel. Sapien hendrerit pharetra turpis morbi dictum aliquam luctus nulla nulla. Nibh pretium id odio ac risus nisl. Ac fermentum cursus ornare proin. </p>
                    <Link to="/">Plus de détails</Link>
                </div>
            </div>
        </section>
    )
}
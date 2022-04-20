import { Link } from "react-router-dom"
import "../../utils/styles/Home/About.css"
import { homeData } from "../../utils/datas/home"
import { useEffect } from "react"

export function About() {
    useEffect(() => {
        console.log(homeData.undertitle)
    })

    return(
        <section id="about-wrapper">
            <div className="about-title">
                <h2>A propos</h2>
                <span>{homeData.aboutUnderTitle}</span>
            </div>
            
            <div className="about-content">
                <div className="technologies-block">
                    <ul>
                        {homeData.boxText.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </div>

                <div className="about-text">
                    <p> {homeData.contentText} </p>
                    <Link to="/about">Plus de détails</Link>
                </div>
            </div>
        </section>
    )
}
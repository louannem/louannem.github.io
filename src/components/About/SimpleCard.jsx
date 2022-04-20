import "../../utils/styles/About/SimpleCard.css"
import { experienceObj, formationObj } from "../../utils/datas/about"

export function SimpleCard({title, type}) {
    return(
        <div className="simple-card-wrapper">
            <h3>{title}</h3>

            <div className="simple-card-content">
                {type === "formation" && formationObj.map((formation, index) => (
                    <div key={`formation-${index}`}>
                        <h4>{formation.title}</h4>
                        <span>{formation.undertitle} - {formation.years}</span>
                        <p>{formation.details}</p>
                    </div>
                ))}

                {type === "experience" && experienceObj.map((experience, index) => (
                    <div key={`formation-${index}`}>
                        <h4>{experience.title}</h4>
                        <span>{experience.undertitle} - {experience.years}</span>
                        <p>{experience.details}</p>
                    </div>
                ))}
            </div>
            
           
        </div>
    )
}
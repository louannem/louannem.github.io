import "../../utils/styles/About/SkillCard.css"

export function SkillCard({icon, skillTitle, skills}) {
    return(
        <div className="skills-card">
            <div className="card-header">
                <div className="icon-wrapper">
                    <img src={icon} alt="skill icon" />
                </div>
                <h3>{skillTitle}</h3>
            </div>
            <div className="card-content">
                <ul>
                    {skills.map((skill, index) => (
                        <li key={`skill-`+index}>{skill}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
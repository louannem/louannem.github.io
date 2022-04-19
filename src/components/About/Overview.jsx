import { SkillCard } from "./SkillsCard";
import "../../utils/styles/About/Overview.css"
import html from "../../assets/html.svg"
import react from "../../assets/react.svg"

export function Overview() {
    const integrationSkills= ["skill", "skill", "skill"]
    return(
        <section id="Overview-section">
            <h2>Lou-Anne Martins</h2>
            <p>
                Non dui sit imperdiet molestie egestas adipiscing ut ut quam. Nisl in eu ornare tortor condimentum gravida. Nulla convallis sapien et at ipsum, imperdiet rutrum et. Nulla aliquet mauris mattis gravida eget sit. Quisque semper et augue sit tincidunt felis a, sollicitudin. Eu, a risus viverra odio mollis elit fames ac viverra. At lectus et at scelerisque. 
            </p>

            <div className="skills-grid">
                <SkillCard icon={html} skillTitle="Intégration HTML/CSS" skills={integrationSkills} />
                <SkillCard icon={react} skillTitle="ReactJS"  skills={integrationSkills} />
            </div>
        </section>
        
    )
}
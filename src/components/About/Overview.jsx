import { SkillCard } from "./SkillsCard";
import "../../utils/styles/About/Overview.css"
import html from "../../assets/html.svg"
import react from "../../assets/react.svg"
import { aboutDatas } from "../../utils/datas/about";

export function Overview() {
   
    return(
        <section id="Overview-section">
            <h2>Lou-Anne Martins</h2>
            <p>
                {aboutDatas.overviewText}
            </p>

            <div className="skills-grid">
                <SkillCard icon={html} skillTitle="Intégration HTML/CSS" skills={aboutDatas.skillBox1} />
                <SkillCard icon={react} skillTitle="ReactJS"  skills={aboutDatas.skillBox2} />
            </div>
        </section>
        
    )
}
import "../utils/styles/Contact.css"
import { ContactPill } from "./ContactPills"
import { Form } from "./ContactForm"

export function Contact({undertitleText, subTitle, form, pillColor, pillIcon1, pillIcon2, sectionColor}) {
    return(
        <section id="Contact-section" className={` ${sectionColor === "pink" ? "pink-section" : sectionColor === "blue" ? "blue-section" : ""}`}>
            <div className="contact-title">
                <h2>Me contacter</h2>
                {subTitle && <span>{undertitleText}</span>}
            </div>

            <div className="contact-content">
                <div className="contact-pills">
                    <ContactPill text="linked.tree" icon={pillIcon1} mainColor={pillColor} />
                    <ContactPill text="louanne.m0122@gmail.com" icon={pillIcon2} mainColor={pillColor} />
                </div>
            </div>
            {form && <Form />}

        </section>
    )
}
import "../utils/styles/Contact.css"
import { ContactPill } from "./ContactPills"
import mail from "../assets/mail.svg"
import linkedIn from "../assets/linkedIn.svg"
import { Form } from "./ContactForm"

export function Contact({form}) {
    return(
        <section id="Contact-section">
            <div className="contact-title">
                <h2>Me contacter</h2>
                <span>Risus, et, libero duis amet at.</span>
            </div>

            <div className="contact-content">
                <div className="contact-pills">
                    <ContactPill text="linked.tree" icon={linkedIn} />
                    <ContactPill text="louanne.m0122@gmail.com" icon={mail} />
                </div>
            </div>
            {form && <Form />}

        </section>
    )
}
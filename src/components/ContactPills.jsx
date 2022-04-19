import "../utils/styles/ContactPill.css"

export function ContactPill({text, icon}) {
    return(
        <div className="pill-wrapper">
            <div className="icon-wrapper">
                <img src={icon} alt="contact icon" />
            </div>
            <div className="text-wrapper">{text}</div>
        </div>
    )
}
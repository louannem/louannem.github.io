import "../utils/styles/ContactPill.css"

export function ContactPill({text, icon, mainColor}) {
    return(
        <div className="pill-wrapper">
            <div className={`icon-wrapper ${mainColor === "blue" ? "blue-pill" : mainColor === "pink" ? "pink-pill" : ""}`}>
                <img src={icon} alt="contact icon"  />
            </div>
            <div className="text-wrapper">{text}</div>
        </div>
    )
}
import "../../utils/styles/About/SimpleCard.css"

export function SimpleCard({title, content}) {
    return(
        <div className="simple-card-wrapper">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
import "../utils/styles/Header.css"

export function Header({title}) {
    return(
        <div className="page-header">
            <h1>{title}</h1>
        </div>
    )
}
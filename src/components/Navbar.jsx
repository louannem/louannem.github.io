import { Link } from "react-router-dom";
import "../utils/styles/Navbar.css"

export function Navbar() {
    return(
        <nav>
            <div className="links-wrapper">
                <Link to="/home">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/">Projets</Link>
                <Link to="/home" onClick={() => window.location.replace("/#Contact-section")} className="contact-button">Contact</Link>
            </div>
            
        </nav>
    )
}
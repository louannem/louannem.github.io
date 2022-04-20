import { Link } from "react-router-dom";
import "../utils/styles/Navbar.css"

export function Navbar() {
    return(
        <nav>
            <div className="links-wrapper">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/projects">Projets</Link>
                <Link to="/" onClick={() => window.location.replace("/#Contact-section")} className="contact-button">Contact</Link>
            </div>
            
        </nav>
    )
}
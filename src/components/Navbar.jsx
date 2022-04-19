import { Link } from "react-router-dom";
import "../utils/styles/Navbar.css"

export function Navbar() {
    return(
        <nav>
            <div className="links-wrapper">
                <Link to="/home">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/">Projets</Link>
                <a href="#Contact-section" className="contact-button">Contact</a>
            </div>
            
        </nav>
    )
}
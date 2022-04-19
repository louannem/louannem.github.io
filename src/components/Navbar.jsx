import { Link } from "react-router-dom";
import "../utils/styles/Navbar.css"

export function Navbar() {
    return(
        <nav>
            <div className="links-wrapper">
                <Link to="/">Accueil</Link>
                <Link to="/">A propos</Link>
                <Link to="/">Projets</Link>
                <Link to="/" className="contact-button">Contact</Link>
            </div>
            
        </nav>
    )
}
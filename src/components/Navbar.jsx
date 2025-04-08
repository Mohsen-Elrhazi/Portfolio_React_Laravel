import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";

export default function Navbar() {
  return (
    // <header>
        <nav className="navbar">
            <h1>Portfolio</h1>
            <ul> 
                <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                <li><NavLink to="/Apropos" activeClassName="active">À propos</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projets</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        
            <button className="">btn</button>
        </nav>
    // </header>
  );
}
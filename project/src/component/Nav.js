
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css"
import logo from "../asset/Logo .svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";




function Nav() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [sidebar, setSidebar] = useState()


    return(
        <header>

            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/" className="nav-link first"><img src={logo} alt="" /></Link>
                    </div>
                
                    <nav>
                        <ul>
                            <li><Link to="/" className="nav-link scale">HOME</Link></li>
                            <li><a href="#menu" onClick={() => scrollToSection("menu")} className="nav-link scale">MENU</a></li>
                            <li><a href="#about" onClick={() => scrollToSection("about")} className="nav-link scale">ABOUT</a></li>
                            <li><Link to="/booking" className="nav-link scale">RESERVATIONS</Link></li>
                            <li><Link to="/" className="nav-link scale">LOGIN</Link></li>
                            <li onClick={() => setSidebar(!sidebar)}><Link to="#" className="nav-link menu">{sidebar ? (<FontAwesomeIcon icon={faXmark} size="3x" />) : (<FontAwesomeIcon icon={faBars} size="3x" />)}</Link></li>
                        </ul>
                    </nav>
                </div>
                <nav className={sidebar ? "second-nav open" : "second-nav"}>
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><a href="#menu" onClick={() => scrollToSection("menu")} className="link">MENU</a></li>
                        <li><a href="#about" onClick={() => scrollToSection("about")} className="link">ABOUT</a></li>
                        <li><Link to="/reservation" className="link">RESERVATIONS</Link></li>
                        <li><Link to="/" className="link">LOGIN</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Nav



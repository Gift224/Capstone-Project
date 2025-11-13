
import "../component/Footer.css"
import Lettle from "../asset/little.png"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Footer () {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <footer>
            <div className="footer-grid">
                <div className="footer-img">
                    <img src={Lettle} alt="" />
                </div>
                <div>
                    <h3 className="h3">Important Links</h3>
                    <ul className="footer-link">
                        <li><Link to="/" >HOME</Link></li>
                        <li><a href="#about" onClick={() => scrollToSection("about")} >ABOUT</a></li>
                        <li><a href="#menu" onClick={() => scrollToSection("menu")} >MENU</a></li>
                        <li><Link to="/booking" >RESERVATIONS</Link></li>
                        <li><Link to="/" >LOGIN</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="h3">Contact</h3>
                    <ul>
                        <li>Address: <br/> 3255 Eldridge Trace,East Sherman,WA 83772</li>
                        <li>Email: <br/>hello@littlelemon.com</li>
                        <li>Phone: <br/>832-833-912</li>
                    </ul>
                </div>
                <div className="social">
                    <h3 className="h3">Social Medial Links</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} size="1x" style={{ }} /></li>
                        <li><FontAwesomeIcon icon={faSquareXTwitter} size="1x" /></li>
                        <li><FontAwesomeIcon icon={faYoutube} size="1x" style={{ }} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} size="1x" style={{ }} /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
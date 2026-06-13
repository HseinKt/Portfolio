import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../CSS/Footer.css"

const Footer = () => {
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hussein-kteish-287783212/", "_blank", "noopener,noreferrer");
    }
    
    const openGithub = () => {
        window.open("https://github.com/HseinKt", "_blank", "noopener,noreferrer");
    }
    
    return ( 
        <footer>
            <div className="top-footer">
                <p>Hussein Kteish</p>
            </div>

            <div className="middle-footer">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#cybersecurity">Cybersecurity</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-social-icons">
                <FaLinkedin className="icon" onClick={openLinkedIn} aria-label="LinkedIn Profile" />
                <FaGithub className="icon" onClick={openGithub} aria-label="GitHub Profile" />
            </div>

            <div className="bottom-footer">
                <p>Copyright &copy; {new Date().getFullYear()} <a href="#home">Hussein Kteish</a> - All rights reserved</p> 
            </div>
        </footer>
     );
}
  
export default Footer;
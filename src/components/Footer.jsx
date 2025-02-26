import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../CSS/Footer.css"

const Footer = () => {
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hsein-kteish-287783212/");
    }
    
    const openGithub = () => {
        window.open("https://github.com/HseinKt");
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
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-social-icons">
                <FaLinkedin className="icon linkedInIcon" onClick={() => openLinkedIn()}/>
                <FaGithub className="icon GitHubIcon" onClick={() => openGithub()}/>
            </div>

            <div className="bottom-footer">
                <p>Copyright &copy; <a href="#home" >Hussein Kteish</a> - All rights reserved</p> 
                {/*style="text-decoration: none;"*/}
            </div>
        </footer>
     );
}
 
export default Footer;
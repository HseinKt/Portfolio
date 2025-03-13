import { useEffect, useState } from "react";
import '../CSS/Header.css'
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion"
import DownloadCV from "./DownloadCV";

const Header = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

    const sections = ["Home", "About", "Projects", "Experience", "Contact"];

    const handleClick = (section) => {
        setActive(section);
    }

    const handleMenu = (section) => {
        setActive(section);
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50)
            {
                setShadow(true);
            } else {
                setShadow(false);
            }

            let currentSection = "Home";
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.toLowerCase());
                if(sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if(rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });
            setActive(currentSection);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return ( 
        <div className={`nav ${shadow ? "nav-shadow" : ""}`}>
            <div className="nav-logo">
                <p className="nav-name">Hussein Kteish</p>
            </div>

            <div className="nav-menu">
                <ul>
                    {sections.map((section) => (
                        <li key={section}>
                            <a 
                                href={`#${section.toLowerCase()}`} 
                                className={`nav-link ${active === section? "active-link" : ""}`} 
                                onClick={() => handleClick(section)}>
                                    {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="nav-btn">
                <DownloadCV />
            </div>

            <div className="nav-menu-dropdown">
                <a 
                    className="menu-a"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FiMenu className="fimenu" />
                </a>
                
                { isOpen && <div className="dropdown-menu">
                    <motion.ul 
                        className="menu-list"
                        initial={{ x: "100%" }} // Start off-screen to the right
                        animate={{ x: isOpen ? "0%" : "100%" }} // Slide in/out
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {["Home", "About", "Projects", "Experience", "Contact"].map((section) => (
                            <li key={section}>
                                <a 
                                    href={`#${section.toLowerCase()}`} 
                                    className={`nav-link ${active === section? "active-link" : ""}`} 
                                    onClick={() => handleMenu(section)}>
                                        {section}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                </div>
                }
            </div>
        </div>
     );
}
 
export default Header;
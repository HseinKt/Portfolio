import { useState } from "react";
import '../CSS/Header.css'
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion"
import DownloadCV from "./DownloadCV";

const Header = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (section) => {
        setActive(section);
    }

    const handleMenu = (section) => {
        setActive(section);
        setIsOpen(!isOpen);
    }

    return ( 
        <div className="nav">
            <div className="nav-logo">
                <p className="nav-name">Hussein Kteish</p>
            </div>

            <div className="nav-menu">
                <ul>
                    {["Home", "About", "Projects", "Experience", "Contact"].map((section) => (
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
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("Home");

    const handleClick = (section) => {
        console.log("Clicked:", section); 
        setActive(section);
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
                <button className="btn">Download CV</button>
            </div>
            <div className="nav-menu-btn">
                Menu nav
            </div>
        </div>
     );
}
 
export default Header;
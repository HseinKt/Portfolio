import { AiOutlineFilePdf } from "react-icons/ai";
import '../CSS/About.css';

const About = () => {
    const cvURL = "../public/Hussein_Kteish_Resume.pdf"

    return ( 
        <>
            <div className="top-header">
                <h1>About Me</h1>
            </div>
            <div className="row">
                <div className="col">
                    <div className="about-info">
                        <h3>My introduction</h3>
                        <p>Junior Front-End Developer passionate about crafting interactive and user-friendly web applications. Proficient in React.js, JavaScript, and UI/UX design, with hands-on experience developing scalable and responsive web solutions. Enthusiastic about learning new technologies, collaborating with teams, and enhancing user experiences through innovative design and functionality.</p>
                        <div className="about-btn">
                            <a href={cvURL} download>
                                <button className="btn blue-btn">Download CV <AiOutlineFilePdf /> </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    Skills
                </div>
            </div>
        </>
     );
}
 
export default About;
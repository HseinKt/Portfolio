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
                <div className="col skill-col">
                    <div className="skills-box">
                        <div className="skills-header">
                            <h3>Frontend</h3>
                        </div>
                        <div className="skills-list">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>                    
                            <span>React</span>
                            <span>UI/UX Design</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <div className="skills-header">
                            <h3>Backend</h3>
                        </div>
                        <div className="skills-list">
                            <span>Laravel (PHP)</span>
                            <span>RESTFUL APIs</span>
                            <span>MySQL</span>                    
                        </div>
                    </div>

                    <div className="skills-box">
                        <div className="skills-header">
                            <h3>Tools</h3>                        
                        </div>
                        <div className="skills-list">
                            <span>Git</span>
                            <span>GitHub</span>                    
                            <span>Postman</span>
                            <span>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;


{/* <h3>Skills & Experiences</h3>
<ul>
    <li>React.js</li>
    <li>JavaScript</li>
    <li>UI/UX Design</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>SASS</li>
    <li>Bootstrap</li>
    <li>Responsive Design</li>
    <li>Git</li>
    <li>Version Control</li>
    <li>Agile Methodologies</li>
    <li>Software Development</li>
    <li>Project Management</li>
</ul>
 <h3>Education</h3>
<ul>
    <li>BSc Computer Science, University of Jordan</li>
    <li>Certified Scrum Master, Scrum Alliance</li>
</ul>  */}
import { AiOutlineFilePdf } from "react-icons/ai";
import '../CSS/About.css';
import { motion } from "framer-motion"

const About = () => {
    const cvURL = "../public/Hussein_Kteish_Resume.pdf"

    return ( 
        <>
            <motion.div 
                initial={{ opacity: 0 , y: -70}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                className="top-header"
            >
                <h1>About Me</h1>
            </motion.div>
            <div className="row">
                <motion.div 
                    initial={{ x: -100 , opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                    className="col"
                >
                    <div className="about-info">
                        <h3>My introduction</h3>
                        <p>Junior Front-End Developer passionate about crafting interactive and user-friendly web applications. Proficient in React.js, JavaScript, and UI/UX design, with hands-on experience developing scalable and responsive web solutions. Enthusiastic about learning new technologies, collaborating with teams, and enhancing user experiences through innovative design and functionality.</p>
                        <div className="about-btn">
                            <a href={cvURL} download>
                                <button className="btn blue-btn">Download CV <AiOutlineFilePdf /> </button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ x: 100 , opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                    className="col skill-col"
                >
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
                </motion.div>
            </div>
        </>
     );
}
 
export default About;

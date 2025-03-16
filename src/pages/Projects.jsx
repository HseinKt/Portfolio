import '../CSS/Projects.css'
import { motion } from "framer-motion"

const Projects = () => {
    return ( 
        <>
            <motion.div 
                initial={{ opacity: 0 , y: -70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                className="top-header"
            >
                <h1>Projects</h1>
            </motion.div>
            <div className="project-container">
                <motion.div 
                    initial={{ opacity: 0 , y: -50 }}
                    whileInView={{ opacity: 1 , y:0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5}}
                    className="project-box"
                >
                    <div className="project-image">
                        <img src="/Portfolio/images/Fruit_Recognetion.webp" alt="Project 1" />
                        <div className="project-overlay">
                            <a href="https://github.com/HseinKt/Fruit-Recognition.git" className="link" target="_blank" rel="noopener noreferre">
                                🔗
                            </a> 
                        </div>
                    </div>
                    <div className="project-details">
                        <h3>Fruit Recognition App</h3>
                        <p>Built a mobile app using deep learning to identify fruits from images. Developed with Java and AI-powered models.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 , y: -50 }}
                    whileInView={{ opacity: 1 , y:0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7}}
                    className="project-box"
                >
                    <div className="project-image">
                        <img src="/Portfolio/images/dating-app.jpg" alt="Project 2" />
                        <div className="project-overlay">
                            <a href="https://github.com/HseinKt/datingapp.git" className="link" target="_blank" rel="noopener noreferre">
                                🔗
                            </a> 
                        </div>
                    </div>
                    <div className="project-details">
                        <h3>Dating App</h3>
                        <p>Developed a full-stack dating platform using Laravel and React.js. Implemented authentication, chat, and profile matching.</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 , y: -50 }}
                    whileInView={{ opacity: 1 , y:0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9}}
                    className="project-box"
                >
                    <div className="project-image">
                        <img src="/Portfolio/images/TODO.jpg" alt="Project 3" />
                        <div className="project-overlay">
                            <a href="https://github.com/HseinKt/Todo-list.git" className="link" target="_blank" rel="noopener noreferre">
                                🔗
                            </a> 
                        </div>
                    </div>
                    <div className="project-details">
                        <h3>ListToDo App</h3>
                        <p>A modern task manager built with React.js, featuring a theme switcher, state management, and a user-friendly UI.</p>
                    </div>
                </motion.div>
            </div>
        </>
     );
}
 
export default Projects;
import '../CSS/Projects.css'

const Projects = () => {
    return ( 
        <>
            <div className="top-header">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-image">
                        <img src="/images/ReactJS image 1.jpg" alt="Project 1" />
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
                </div>

                <div className="project-box">
                    <div className="project-image">
                        <img src="/images/ReactJS image 1.jpg" alt="Project 2" />
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
                </div>

                 <div className="project-box">
                    <div className="project-image">
                        <img src="/images/ReactJS image 1.jpg" alt="Project 3" />
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
                </div>
            </div>
        </>
     );
}
 
export default Projects;
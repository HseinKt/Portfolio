import '../CSS/Experience.css'
const Experience = () => {
    return ( 
        <>
            <div className="top-header">
                <h1>Experience</h1>
            </div>
            <div className="experience-container">
                <div className="experience-box">
                    <h3>📚 Coding Instructor</h3>
                    <p className="experience-role">BrightChamps, India (Remote)</p>
                    <p>Taught coding to students (ages 6-17) using Scratch, HTML, CSS, and Python. Focused on UI/UX concepts and conducted hands-on projects to enhance learning.</p>
                </div>

                <div className="experience-box">
                    <h3>💻 Web Developer Intern</h3>
                    <p className="experience-role">CodSoft, Beirut</p>
                    <p>Developed React.js front-end applications with Laravel and MySQL, built responsive UI, optimized performance, and integrated RESTful APIs.</p>
                </div>

                <div className="experience-box">
                    <h3>🛠️ Full-Stack Web Developer</h3>
                    <p className="experience-role">Freelance</p>
                    <p>Designed and built web applications using React.js, Laravel, and MySQL. Worked closely with clients to develop custom solutions under tight deadlines.</p>
                </div>
            </div>
        </>
     );
}
 
export default Experience;
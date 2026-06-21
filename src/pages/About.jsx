import { useRef, useState, useEffect } from "react";
import '../CSS/About.css';
import { motion } from "framer-motion";
import {
    Layout, Server, Database, Shield,
    Terminal, GitMerge, Sparkles,
    ChevronLeft, ChevronRight
} from "lucide-react";

const About = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Add a 10px threshold to avoid rounding issues
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("resize", handleScroll);
        return () => window.removeEventListener("resize", handleScroll);
    }, []);

    const scrollByAmount = (amount) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const skillsData = [
        {
            category: "Frontend",
            icon: <Layout size={18} />,
            color: "cyan",
            skills: [
                "React.js", "Next.js", "React Native", "JavaScript",
                "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit"
            ]
        },
        {
            category: "Backend",
            icon: <Server size={18} />,
            color: "purple",
            skills: [
                "Node.js", "NestJS", "Laravel", "PHP",
                "ASP.NET Core", "Python", "REST APIs", "JWT Authentication", "SignalR"
            ]
        },
        {
            category: "Databases",
            icon: <Database size={18} />,
            color: "teal",
            skills: [
                "MongoDB", "PostgreSQL", "MySQL",
                "Prisma ORM", "Entity Framework Core", "Redis", "Firebase"
            ]
        },
        {
            category: "Cybersecurity",
            icon: <Shield size={18} />,
            color: "red",
            skills: [
                "Web Application Security", "API Security", "OWASP Top 10",
                "Vulnerability Assessment", "Penetration Testing",
                "OSINT", "Secure SDLC", "Detection Engineering"
            ]
        },
        {
            category: "Security Tools",
            icon: <Terminal size={18} />,
            color: "orange",
            skills: [
                "Burp Suite", "Nmap", "Metasploit",
                "Wireshark", "Gobuster", "Hydra", "Kali Linux"
            ]
        },
        {
            category: "DevOps & Collaboration",
            icon: <GitMerge size={18} />,
            color: "blue",
            skills: [
                "Docker", "Git", "GitHub", "Jira",
                "Swagger UI", "Postman", "Agile Methodologies"
            ]
        },
        {
            category: "Additional Skills",
            icon: <Sparkles size={18} />,
            color: "cyan",
            skills: [
                "Responsive Design", "Role-Based Authorization",
                "Software Testing", "AI-Assisted Development"
            ]
        }
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>About Me</h1>
                <p>Bridging the gap between software development and security architecture.</p>
            </motion.div>

            <div className="about-section-grid">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="about-text-card glass-card"
                >
                    <h3>My Story</h3>
                    <p>
                        I&apos;m Hussein Kteish, a Full-Stack Developer and Cybersecurity Researcher passionate about building secure, scalable, and modern web applications.
                    </p>
                    <p>
                        With experience across frontend and backend development, I develop complete solutions using technologies such as React, Node.js, NestJS, Laravel, and ASP.NET Core. Alongside software development, I actively study cybersecurity, focusing on web application security, vulnerability assessment, and secure development practices.
                    </p>
                    <p>
                        I believe security should be integrated into the development lifecycle from the beginning, not added as an afterthought. By combining software engineering and cybersecurity knowledge, I strive to build applications that deliver excellent user experiences while maintaining strong security standards.
                    </p>
                    <p>
                        I also leverage modern AI-powered development tools and agents to improve productivity, accelerate development workflows, and enhance code quality, allowing me to deliver reliable solutions more efficiently.
                    </p>
                </motion.div>

                <div className="skills-container">
                    <div className="skills-header-row">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Technical Skill Set
                        </motion.h3>
                        <div className="skills-meta">
                            <span className="skills-counter">{skillsData.length} Categories</span>
                            <span className="skills-swipe-hint">Swipe to explore &rarr;</span>
                        </div>
                    </div>

                    <div className="skills-carousel-wrapper">
                        <button 
                            className={`skills-arrow left ${!canScrollLeft ? 'disabled' : ''}`}
                            onClick={() => scrollByAmount(-320)}
                            aria-label="Previous skills"
                            aria-hidden={!canScrollLeft}
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <div 
                            className="skills-grid" 
                            ref={scrollContainerRef} 
                            onScroll={handleScroll}
                        >
                            {skillsData.map((group, idx) => (
                                <motion.div
                                    key={group.category}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                                    className={`skill-category-card skill-color-${group.color}`}
                                >
                                    <h4>
                                        <span className="skill-icon">{group.icon}</span>
                                        {group.category}
                                    </h4>
                                    <div className="skill-badges-list">
                                        {group.skills.map((skill) => (
                                            <span key={skill} className="skill-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button 
                            className={`skills-arrow right ${!canScrollRight ? 'disabled' : ''}`}
                            onClick={() => scrollByAmount(320)}
                            aria-label="Next skills"
                            aria-hidden={!canScrollRight}
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

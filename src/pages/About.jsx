import React from "react";
import '../CSS/About.css';
import { motion } from "framer-motion";
import {
    Layout, Server, Database, Shield,
    Terminal, GitMerge, Sparkles
} from "lucide-react";

const About = () => {
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
                        I am a Full-Stack Developer and Cybersecurity Researcher. I love building highly functional web applications while incorporating rigorous security baselines right from the start.
                    </p>
                    <p>
                        With deep expertise in modern React frameworks, backend systems (NestJS, Laravel, ASP.NET Core), and web application security auditing, I focus on building products that are not only user-friendly but also resilient against modern vulnerability vectors.
                    </p>
                    <p>
                        Additionally, I actively explore artificial intelligence integrations, leveraging Large Language Models (LLMs) and advanced prompt engineering to build smart workflows and modern automation layers.
                    </p>
                </motion.div>

                <div className="skills-container">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Technical Skill Set
                    </motion.h3>

                    <div className="skills-grid">
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
                </div>
            </div>
        </div>
    );
}

export default About;

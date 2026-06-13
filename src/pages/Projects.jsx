import React, { useState } from "react";
import '../CSS/Projects.css';
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, Shield } from "lucide-react";

const projectsData = [
    {
        title: "Enterprise Bug Bounty Recon & Attack Surface Analysis",
        subtitle: "AT&T Bug Bounty Program",
        description: [
            "Designed reconnaissance workflows to enumerate public-facing assets, APIs, and endpoints using automated tooling and Burp Suite analysis.",
            "Prioritized high-risk attack surfaces including IDOR, authentication, API, and file-access vulnerability vectors.",
            "Built custom processing pipelines to optimize attack surface analysis and vulnerability research workflows."
        ],
        image: null,
        placeholderIcon: <Shield size={40} />,
        placeholderColor: "red",
        techStack: ["OSINT", "Recon", "Burp Suite", "Attack Surface Analysis", "Bug Bounty"],
        reportLink: "https://drive.google.com/file/d/15WbGyU2TM5i3F3KCsFL9te27eI0cuxV5/view",
        github: null,
        categories: ["cybersecurity"]
    },
    {
        title: "Rooted — Secure MERN E-Commerce Platform",
        subtitle: "Full-Stack + Security Engineering",
        description: [
            "Developed a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB.",
            "Implemented JWT authentication, RBAC authorization, and OWASP-aligned secure API and session management practices.",
            "Designed responsive admin dashboards and product management workflows with secure REST APIs."
        ],
        image: null,
        placeholderIcon: <Shield size={40} />,
        placeholderColor: "purple",
        techStack: ["React", "Node.js", "MongoDB", "JWT", "RBAC", "Security", "Express.js"],
        github: "https://github.com/HseinKt/E-Commerce.git",
        reportLink: null,
        categories: ["fullstack", "cybersecurity"]
    },
    {
        title: "Python Code Editor Web App",
        subtitle: "Browser-based IDE with Security Controls",
        description: [
            "Engineered a browser-based Python code editor with authentication, persistence, and controlled compilation workflows.",
            "Implemented role-based access controls and backend protections for user isolation.",
            "Built robust backend services with Laravel and an interactive React frontend."
        ],
        image: null,
        placeholderIcon: <FileText size={40} />,
        placeholderColor: "blue",
        techStack: ["Laravel", "React", "PHP", "RBAC", "Backend Security", "Authentication"],
        github: "https://github.com/HseinKt/Code-Editor.git",
        reportLink: null,
        categories: ["fullstack", "cybersecurity"]
    },
    {
        title: "Fruit Recognition App",
        subtitle: "Mobile AI / Deep Learning",
        description: [
            "A mobile application utilizing deep learning computer vision models to identify and categorize fruit varieties from real-time camera feeds.",
            "Implemented TensorFlow Lite for on-device inference with optimized model performance.",
            "Built a clean Android UI with real-time detection overlays."
        ],
        image: "/Portfolio/images/Fruit_Recognetion.webp",
        placeholderIcon: null,
        placeholderColor: "teal",
        techStack: ["Java", "TensorFlow Lite", "Deep Learning", "Android SDK"],
        github: "https://github.com/HseinKt/Fruit-Recognition.git",
        reportLink: null,
        categories: ["fullstack"]
    },
    {
        title: "Dating Platform",
        subtitle: "Real-time Social Application",
        description: [
            "A full-featured social platform with authentication, geolocation matching, profile discovery feeds, and real-time chat capabilities.",
            "Built WebSocket-based real-time messaging using Pusher and Pusher Channels.",
            "Designed with responsive UI and secure authentication via Laravel Sanctum."
        ],
        image: "/Portfolio/images/dating-app.jpg",
        placeholderIcon: null,
        placeholderColor: "orange",
        techStack: ["React.js", "Laravel", "MySQL", "Pusher WebSockets", "Bootstrap"],
        github: "https://github.com/HseinKt/datingapp.git",
        reportLink: null,
        categories: ["fullstack"]
    },
    {
        title: "ListToDo Task Manager",
        subtitle: "Offline-First Dashboard",
        description: [
            "A clean modern task management dashboard with offline storage support, interactive categories, and light/dark theme preference syncing.",
            "Implemented persistent local storage sync and smooth category filtering.",
            "Optimized for performance with a minimal, accessible interface."
        ],
        image: "/Portfolio/images/TODO.jpg",
        placeholderIcon: null,
        placeholderColor: "cyan",
        techStack: ["React.js", "HTML5", "CSS Modules", "Local Storage"],
        github: "https://github.com/HseinKt/Todo-list.git",
        reportLink: null,
        categories: ["fullstack"]
    }
];

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "Cybersecurity", value: "cybersecurity" }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = projectsData.filter(p =>
        activeFilter === "all" || p.categories.includes(activeFilter)
    );

    return (
        <div id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Featured Work</h1>
                <p>A curated selection of full-stack engineering and cybersecurity projects.</p>
            </motion.div>

            {/* Filter bar */}
            <div className="filter-bar">
                {FILTERS.map(f => (
                    <button
                        key={f.value}
                        id={`project-filter-${f.value}`}
                        className={`filter-pill${activeFilter === f.value ? " active" : ""}`}
                        onClick={() => setActiveFilter(f.value)}
                        aria-pressed={activeFilter === f.value}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="project-container">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="project-box glass-card"
                        >
                            {/* Image or styled placeholder */}
                            <div className="project-image-wrapper">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                ) : (
                                    <div className={`project-placeholder placeholder-${project.placeholderColor}`}>
                                        <span className="project-placeholder-icon">{project.placeholderIcon}</span>
                                        <span className="project-placeholder-label">{project.title}</span>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    {project.github && (
                                        <a href={project.github} className="project-overlay-link" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.reportLink && (
                                        <a href={project.reportLink} className="project-overlay-link" target="_blank" rel="noopener noreferrer" aria-label="View report">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} className="project-overlay-link" target="_blank" rel="noopener noreferrer" aria-label="View live">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-details">
                                <div className="project-title-row">
                                    <h3>{project.title}</h3>
                                    {project.categories.includes("cybersecurity") && (
                                        <span className="project-cyber-badge">
                                            <Shield size={12} /> Security
                                        </span>
                                    )}
                                </div>
                                <p className="project-subtitle">{project.subtitle}</p>
                                <ul className="project-desc-list">
                                    {project.description.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                                <div className="project-tech-list">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="project-tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-action-row">
                                    {project.github && (
                                        <a href={project.github} className="btn btn-sm" target="_blank" rel="noopener noreferrer">
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                    {project.reportLink && (
                                        <a href={project.reportLink} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={14} /> View Report
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Projects;
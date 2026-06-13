import React, { useState } from "react";
import '../CSS/Experience.css';
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Shield, Code2 } from "lucide-react";

const experiencesData = [
    {
        role: "Cybersecurity Researcher",
        company: "Freelance",
        location: "Beirut, Lebanon",
        period: "2025 – Present",
        category: "cybersecurity",
        responsibilities: [
            "Conduct web security labs and vulnerability analysis on real-world targets.",
            "Practice exploitation and reconnaissance workflows for attack surface mapping.",
            "Focus on web application security, API security, and OSINT-driven recon.",
        ]
    },
    {
        role: "Cybersecurity Ambassador",
        company: "Semicolon Academy",
        location: "Lebanon",
        period: "2025 – Present",
        category: "cybersecurity",
        responsibilities: [
            "Deliver cybersecurity workshops covering web security, OSINT, and penetration testing fundamentals.",
            "Support students in understanding secure development concepts and OWASP principles.",
            "Bridge the gap between development and security for aspiring engineers.",
        ]
    },
    {
        role: "Full-Stack Developer Intern",
        company: "Areeba",
        location: "Beirut, Lebanon",
        period: "Feb 2026 – May 2026",
        category: "development",
        responsibilities: [
            "Developed production APIs using NestJS, TypeScript, PostgreSQL, and Prisma ORM.",
            "Collaborated within Agile workflows managed via Jira for sprint planning and delivery.",
            "Improved API test coverage and documentation using Swagger UI and Postman.",
        ]
    },
    {
        role: "Full-Stack Developer Intern",
        company: "TechTalks — Project: GYIMIND",
        location: "Lebanon",
        period: "Feb 2026 – Mar 2026",
        category: "development",
        responsibilities: [
            "Built platform features using React.js, React Native, ASP.NET Core, and PostgreSQL.",
            "Implemented JWT authentication and SignalR real-time communication integrations.",
            "Integrated Firebase, Google Maps, and OpenStreetMap services into the platform.",
        ]
    },
    {
        role: "Freelance Full-Stack Developer",
        company: "SuperTech Solution",
        location: "Remote",
        period: "2023 – Present",
        category: "development",
        responsibilities: [
            "Built responsive, performant full-stack web applications for diverse clients.",
            "Designed secure REST APIs with proper authentication and authorization layers.",
            "Optimized application performance, accessibility, and cross-device UX.",
        ]
    }
];

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Development", value: "development" },
    { label: "Cybersecurity", value: "cybersecurity" }
];

const CategoryIcon = ({ category }) =>
    category === "cybersecurity"
        ? <Shield size={13} />
        : <Code2 size={13} />;

const Experience = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = experiencesData.filter(e =>
        activeFilter === "all" || e.category === activeFilter
    );

    return (
        <div id="experience" className="section">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Professional Experience</h1>
                <p>A chronological record of my technical career and mentorship history.</p>
            </motion.div>

            {/* Filter bar */}
            <div className="filter-bar">
                {FILTERS.map(f => (
                    <button
                        key={f.value}
                        id={`exp-filter-${f.value}`}
                        className={`filter-pill${activeFilter === f.value ? " active" : ""}`}
                        onClick={() => setActiveFilter(f.value)}
                        aria-pressed={activeFilter === f.value}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="experience-timeline">
                <AnimatePresence mode="popLayout">
                    {filtered.map((item, idx) => (
                        <motion.div
                            key={item.role + item.company}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="experience-card-item"
                        >
                            <div className="experience-timeline-node" />
                            <div className="experience-details-box glass-card">
                                <div className="experience-header-row">
                                    <h3>
                                        <Briefcase size={17} />
                                        {item.role}
                                    </h3>
                                    <span className={`exp-category-badge exp-badge-${item.category}`}>
                                        <CategoryIcon category={item.category} />
                                        {item.category === "cybersecurity" ? "Cybersecurity" : "Development"}
                                    </span>
                                </div>

                                <div className="experience-company-meta">
                                    <span className="exp-company">
                                        <Briefcase size={13} style={{ opacity: 0.6 }} />
                                        {item.company}
                                    </span>
                                    <span className="exp-meta-right">
                                        <span className="exp-location">
                                            <MapPin size={13} /> {item.location}
                                        </span>
                                        <span className="experience-location">
                                            <Calendar size={13} /> {item.period}
                                        </span>
                                    </span>
                                </div>

                                <ul className="exp-responsibilities">
                                    {item.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Experience;
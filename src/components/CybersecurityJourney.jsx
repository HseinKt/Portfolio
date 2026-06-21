import '../CSS/CybersecurityJourney.css';
import { motion } from "framer-motion";
import {
    Shield, Award, Terminal, BookOpen,
    CheckCircle2, Calendar, Clock, Building2,
    Eye, Download
} from "lucide-react";

/* ─── Real training timeline ─── */
const trainingData = [
    {
        title: "Ethical Hacking Foundation",
        organization: "Semicolon Academy",
        date: "16 May 2024",
        duration: "2 Months",
        status: "Completed",
        certFile: "Ethical Hacking Foundation.pdf",
        description: "Core ethical hacking concepts, reconnaissance techniques, network scanning, and exploitation fundamentals."
    },
    {
        title: "Information Security Associate (ISA)",
        organization: "Semicolon Academy",
        date: "25 November 2025",
        duration: "3 Months",
        status: "Completed",
        certFile: "ISA - Information Security Associate.pdf",
        description: "Information security frameworks, threat intelligence, cryptography, network defense, and secure system design."
    },
    {
        title: "Phish Busters Initiative",
        organization: "Lebanese University / Semicolon Academy",
        date: "2025 - Present",
        duration: "Ongoing",
        status: "Active",
        description: "Cybersecurity Ambassador → Joined Phish Busters Initiative → University Awareness Campaigns → Cybersecurity Community Outreach → Student Security Education"
    },
    {
        title: "Cybersecurity Specialist",
        organization: "Semicolon Academy",
        date: "5 February 2026",
        duration: "6 Months",
        status: "Completed",
        certFile: "Cybersecurity Specialist.pdf",
        description: "Advanced penetration testing, web application security, detection engineering, OSINT, and vulnerability research."
    }
];

/* ─── Additional learning topics ─── */
const additionalTopics = [
    "Web Application Security",
    "OWASP Top 10",
    "API Security",
    "Cryptography",
    "Wireless Security",
    "Vulnerability Assessment",
    "OSINT",
    "Reconnaissance",
    "Secure Authentication",
    "Penetration Testing Labs",
    "TryHackMe Labs",
    "PortSwigger Labs"
];

/* ─── Actual certificates in public/images/Certificates ─── */
const certificatesData = [
    {
        name: "Ethical Hacking Foundation",
        organization: "Semicolon Academy",
        date: "May 2024",
        file: "Ethical Hacking Foundation.pdf"
    },
    {
        name: "Information Security Associate (ISA)",
        organization: "Semicolon Academy",
        date: "November 2025",
        file: "ISA - Information Security Associate.pdf"
    },
    {
        name: "Cybersecurity Specialist",
        organization: "Semicolon Academy",
        date: "February 2026",
        file: "Cybersecurity Specialist.pdf"
    }
];

const CERT_BASE = "/Portfolio/images/Certificates/";

const CybersecurityJourney = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Cybersecurity Journey</h1>
                <p>Evidence-based training history, skill development, and formal certifications.</p>
            </motion.div>

            {/* ── Section 1: Formal Training Timeline ── */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="cyber-section-header"
            >
                <Terminal size={20} />
                <h2>Formal Training</h2>
            </motion.div>

            <div className="cyber-timeline">
                {trainingData.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.12 }}
                        className="cyber-timeline-item"
                    >
                        <div className="cyber-timeline-node">
                            <CheckCircle2 size={16} />
                        </div>
                        <div className="cyber-timeline-card glass-card">
                            <div className="cyber-card-top">
                                <h3>{item.title}</h3>
                                <span className="cyber-status-badge">
                                    <CheckCircle2 size={12} /> {item.status}
                                </span>
                            </div>
                            <div className="cyber-card-meta">
                                <span>
                                    <Building2 size={13} /> {item.organization}
                                </span>
                                <span>
                                    <Calendar size={13} /> {item.date}
                                </span>
                                <span>
                                    <Clock size={13} /> {item.duration}
                                </span>
                            </div>
                            <p className="cyber-card-desc">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Section 2: Additional Learning ── */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="cyber-section-header"
                style={{ marginTop: '3.5rem' }}
            >
                <BookOpen size={20} />
                <h2>Additional Learning</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="cyber-topics-grid"
            >
                {additionalTopics.map((topic, idx) => (
                    <motion.span
                        key={topic}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        className="cyber-topic-badge"
                    >
                        {topic}
                    </motion.span>
                ))}
            </motion.div>

            {/* ── Section 3: Certificates ── */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="cyber-section-header"
                style={{ marginTop: '3.5rem' }}
            >
                <Award size={20} />
                <h2>Certificates</h2>
            </motion.div>

            <div className="cert-cards-grid">
                {certificatesData.map((cert, idx) => {
                    const certPath = `${CERT_BASE}${encodeURIComponent(cert.file)}`;
                    return (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="cert-card glass-card"
                        >
                            {/* Visual header */}
                            <div className="cert-card-visual">
                                <div className="cert-card-shield">
                                    <Shield size={36} />
                                </div>
                                <div className="cert-card-ribbon" />
                            </div>

                            <div className="cert-card-body">
                                <h4>{cert.name}</h4>
                                <p className="cert-org">{cert.organization}</p>
                                <p className="cert-date">
                                    <Calendar size={13} /> {cert.date}
                                </p>
                            </div>

                            <div className="cert-card-actions">
                                <a
                                    href={certPath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm"
                                    id={`cert-view-${idx}`}
                                    aria-label={`View ${cert.name} certificate`}
                                >
                                    <Eye size={14} /> View
                                </a>
                                <a
                                    href={certPath}
                                    download={cert.file}
                                    className="btn btn-sm btn-primary"
                                    id={`cert-download-${idx}`}
                                    aria-label={`Download ${cert.name} certificate`}
                                >
                                    <Download size={14} /> Download
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default CybersecurityJourney;

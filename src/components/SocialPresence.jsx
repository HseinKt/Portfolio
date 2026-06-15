import React from 'react';
import '../CSS/SocialPresence.css';
import { motion } from "framer-motion";
import { ShieldAlert, Users, Target } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialPresence = () => {
    return (
        <div id="social-presence" className="section">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Social Presence & Outreach</h1>
                <p>Community engagement, leadership, and security advocacy.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="phish-busters-card glass-card"
            >
                <div className="pb-header">
                    <div className="pb-logo-placeholder">
                        <ShieldAlert size={40} color="#ff4d4d" />
                    </div>
                    <div>
                        <h2>Phish Busters Initiative</h2>
                        <span className="pb-subtitle">Cybersecurity Awareness Team - Lebanese University</span>
                    </div>
                </div>

                <div className="pb-mission">
                    <h3><Target size={18} /> Our Mission</h3>
                    <p>
                        Created as part of the Cybersecurity Ambassador program with Semicolon Academy, Phish Busters is dedicated to anti-phishing education, raising student awareness, and promoting robust security best practices to protect the university community.
                    </p>
                </div>

                <div className="pb-achievements">
                    <h3><Users size={18} /> Achievements & Activities</h3>
                    <ul>
                        <li>Led university-wide cybersecurity awareness campaigns.</li>
                        <li>Developed and distributed anti-phishing educational content.</li>
                        <li>Fostered student engagement through interactive security workshops.</li>
                        <li>Advocated for safe online behaviors on social media platforms.</li>
                    </ul>
                </div>

                <div className="pb-social-links">
                    <a 
                        href="https://www.linkedin.com/company/109237489/admin/dashboard/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm"
                    >
                        <FaLinkedin size={16} /> LinkedIn
                    </a>
                    <a 
                        href="https://www.instagram.com/phishbusters_lu/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-primary"
                    >
                        <FaInstagram size={16} /> Instagram
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default SocialPresence;

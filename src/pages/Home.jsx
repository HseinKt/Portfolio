import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../CSS/Home.css';
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

const Home = () => {
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hussein-kteish-287783212/", "_blank", "noopener,noreferrer");
    }

    const openGithub = () => {
        window.open("https://github.com/HseinKt", "_blank", "noopener,noreferrer");
    }

    return (
        <div className="featured-box" id="home">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="featured-text"
            >
                <div className="featured-text-card">
                    <span className="hello-tag">👋 Welcome to my Portfolio</span>
                </div>

                <div className="featured-name">
                    <p>I'm Hussein Kteish</p>
                    <div className="typewriter-wrapper">
                        <span className="typedText">
                            <Typewriter
                                words={["Full-Stack Developer", "Cybersecurity Researcher", "AI Enthusiast", "Problem Solver"]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typingSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>
                </div>

                <div className="featured-text-info">
                    <p>
                        A Full-Stack Developer &amp; Cybersecurity Researcher dedicated to building secure, performant, and premium digital solutions. Combining robust backend architectures with modern frontend user experiences.
                    </p>
                </div>

                <div className="featured-text-btn">
                    <a href="#contact" className="btn btn-primary" id="hero-contact-btn">
                        Contact Me <Mail size={18} />
                    </a>
                    <a href="#resume" className="btn" id="hero-resume-btn">
                        View Resumes <FileText size={18} />
                    </a>
                </div>

                <div className="social_icons">
                    <div className="icon-wrapper" onClick={openLinkedIn} aria-label="LinkedIn Profile" role="button" tabIndex={0}>
                        <FaLinkedin />
                    </div>
                    <div className="icon-wrapper" onClick={openGithub} aria-label="GitHub Profile" role="button" tabIndex={0}>
                        <FaGithub />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="featured-image"
            >
                <div className="image-container">
                    <img
                        src="/Portfolio/images/avatar.jpeg"
                        alt="Hussein Kteish - Full-Stack Developer and Cybersecurity Researcher"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default Home;
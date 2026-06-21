import { motion } from "framer-motion";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import GymindShowcase from "../components/GymindShowcase";
import CybersecurityJourney from "../components/CybersecurityJourney";
import ResumeSection from "../components/ResumeSection";
import SocialPresence from "../components/SocialPresence";

const Main = () => {
    return (
        <div className="container">
            <DarkMode />
            
            {/* Floating Gymind Showcase Anchor Badge */}
            <motion.a 
                href="#gymind" 
                className="gymind-floating-badge"
                title="Flagship Project: Gymind"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
                <img src="/Portfolio/images/GYMIN-LOGO.png" alt="Gymind Logo" />
                <span className="badge-tooltip">Explore Gymind</span>
            </motion.a>

            <Header />
            <div className="main-wrapper">
                {/* Home renders its own featured-box layout — no extra section wrapper needed */}
                <Home />
                <section id="about" className="section"><About /></section>
                <section id="projects" className="section"><Projects /></section>
                <section id="gymind" className="section"><GymindShowcase /></section>
                <section id="cybersecurity" className="section"><CybersecurityJourney /></section>
                <section id="social" className="section"><SocialPresence /></section>
                <section id="experience" className="section"><Experience /></section>
                <section id="resume" className="section"><ResumeSection /></section>
                <section id="contact" className="section"><Contact /></section>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
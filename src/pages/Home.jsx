import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../CSS/Home.css';
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import DownloadCV from "../components/DownloadCV";
import { motion } from "framer-motion"

const Home = () => {
    
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hsein-kteish-287783212/");
    }
    
    const openGithub = () => {
        window.open("https://github.com/HseinKt");
    }

    return ( 
        <>
            <div className="featured-text">
                <motion.div 
                    initial={{ opacity: 0 , y: -70}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                    className="featured-text-card"
                >
                    <span>Hussein kteish</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 , y: -70}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                    className="featured-name"
                >
                    <p>I'm {" "}
                        <span className="typedText">
                            <Typewriter 
                                words={["Junior Frontend Developer", "React.js Enthusiast", "UI/UX Designer"]}
                                loop={0} //Infinite loop
                                cursor
                                cursorStyle="|"
                                typingSpeed={150}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </span> 
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 , y: -70}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                    className="featured-text-info"
                >
                    <p>
                        Junior Frontend Developer | React.js Enthusiast | UI/UX Focused | Passionate About Building Interactive Web Apps         
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 , y: -70}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                    className="featured-text-btn"
                >
                    <a href="#contact">
                        <button className="btn blue-btn">Hire Me </button>
                    </a>
                    <DownloadCV />               
                </motion.div>

                <div className="social_icons">
                    <motion.div 
                        initial={{ x: -100 , opacity: 0}}
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4}}
                    >
                        <FaLinkedin className="icon linkedInIcon" onClick={() => openLinkedIn()}/>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ x: -200 , opacity: 0}}
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3}}
                    >
                        <FaGithub className="icon GitHubIcon" onClick={() => openGithub()}/>
                    </motion.div>
                </div>
            </div>

            <div className="featured-image">
                <motion.img 
                    src="/images/avatar.jpg" 
                    alt="avatar" 
                    initial={{ scale: 1 }} 
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }} 
                />
            </div>
        </>
     );
}
 
export default Home;
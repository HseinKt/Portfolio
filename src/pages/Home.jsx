import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../CSS/Home.css';
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import DownloadCV from "../components/DownloadCV";

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
                <div className="featured-text-card">
                    <span>Hussein kteish</span>
                </div>
                <div className="featured-name">
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
                </div>
                <div className="featured-text-info">
                    <p>
                        Junior Frontend Developer | React.js Enthusiast | UI/UX Focused | Passionate About Building Interactive Web Apps         
                    </p>
                </div>
                <div className="featured-text-btn">
                    <a href="#contact">
                        <button className="btn blue-btn">Hire Me </button>
                    </a>
                    <DownloadCV />               
                </div>

                <div className="social_icons">
                    <FaLinkedin className="icon linkedInIcon" onClick={() => openLinkedIn()}/>
                    <FaGithub className="icon GitHubIcon" onClick={() => openGithub()}/>
                </div>
            </div>

            <div className="featured-image">
                <img src="/images/avatar.jpg" alt="avatar"/>
            </div>
        </>
     );
}
 
export default Home;
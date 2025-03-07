import { AiOutlineFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../CSS/Home.css';
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {

    const cvURL = "../public/Hussein_Kteish_Resume.pdf"

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
                                words={["a Junior Frontend Developer", "a React.js Enthusiast", "a UI/UX Designer"]}
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
                    <a href={cvURL} download>
                        <button className="btn">Download CV <AiOutlineFilePdf /> </button>
                    </a>                
                </div>

                <div className="social_icons">
                    <FaLinkedin className="icon linkedInIcon" onClick={() => openLinkedIn()}/>
                    <FaGithub className="icon GitHubIcon" onClick={() => openGithub()}/>
                </div>
            </div>

            <div className="featured-image">
                Image
            </div>
        </>
     );
}
 
export default Home;
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";

const Main = () => {
    return ( 
        <div className="container">
            <DarkMode />
            <Header />
            <div className="main-wrapper">
                <section id="home" className="featured-box"><Home /></section>
                <section id="about" className="section"><About /></section>
                <section id="projects" className="section"><Projects /></section>
                <section id="experience" className="section"><Experience /></section>
                <section id="contact" className="section"><Contact /></section>
            </div>
            <Footer />
        </div>
     );
}
 
export default Main;
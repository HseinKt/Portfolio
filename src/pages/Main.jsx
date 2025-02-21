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
            <Header />
            <div className="main-wrapper">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="experience"><Experience /></section>
                <section id="contact"><Contact /></section>
            </div>
            <Footer />
        </div>
     );
}
 
export default Main;
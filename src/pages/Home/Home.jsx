import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
    return ( 
        <div className="container">
            <Header />
            <main className="wrapper">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
     );
}
 
export default Home;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import NotFound from './components/NotFound';
import Hero from './pages/Hero/Hero';
const App = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/hero' element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
     );
}
 
export default App;
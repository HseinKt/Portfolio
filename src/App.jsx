import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import { DarkModeContext } from './hooks/DarkModeCOntext';
import { useContext } from 'react';

const App = () => {
    const {isDarkMode} = useContext(DarkModeContext);
    
    return ( 
        <div className={isDarkMode? "dark-mode": "light-mode"}>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/home' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
        </div>
     );
}
 
export default App;
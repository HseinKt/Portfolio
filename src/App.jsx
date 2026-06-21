import { Route, Routes, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './components/NotFound';
import { DarkModeContext } from './hooks/DarkModeContext';
import { useContext } from 'react';

const App = () => {
    const {isDarkMode} = useContext(DarkModeContext);
    
    return ( 
        <div className={isDarkMode? "dark-mode": "light-mode"}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/home' element={<Navigate to="/" replace />} />
                <Route path="/about" element={<Navigate to="/#about" replace />} />
                <Route path="/experience" element={<Navigate to="/#experience" replace />} />
                <Route path="/projects" element={<Navigate to="/#projects" replace />} />
                <Route path="/gymind" element={<Navigate to="/#gymind" replace />} />
                <Route path="/contact" element={<Navigate to="/#contact" replace />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
     );
}

export default App;
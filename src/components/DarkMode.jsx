import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../hooks/DarkModeCOntext";
// import '../CSS/DarkMode.css';

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return ( 
        <>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode? <FaSun/>: <FaMoon/>}
            </button>
        </>
     );
}
 
export default DarkMode;
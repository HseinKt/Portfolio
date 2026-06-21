import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export function DarkModeProvider({ children }) {
    // Default to true (dark mode) if not set to false
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") !== "false");

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    
    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
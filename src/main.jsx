import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './hooks/DarkModeCOntext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio">
      <DarkModeProvider>
        <App/>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>,
)

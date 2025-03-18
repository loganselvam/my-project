import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SkillsSection from "./components/skills.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillsSection />
  </StrictMode>,
)

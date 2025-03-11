import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Website from './pages/Website.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Website/>
  </StrictMode>,
)

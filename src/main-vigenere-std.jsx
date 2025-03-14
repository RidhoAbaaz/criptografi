import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VigenereStd from './pages/vigenere-standard/VigenereStd'

createRoot(document.getElementById('vigenere-std')).render(
  <StrictMode>
    <VigenereStd/>
  </StrictMode>,
)

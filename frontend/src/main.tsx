import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersonaProvider } from '@conways/drawer'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PersonaProvider>
          <App />
        </PersonaProvider>
    </BrowserRouter>
  </StrictMode>,
)

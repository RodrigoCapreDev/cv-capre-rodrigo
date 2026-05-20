import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { SectionProvider } from './context/SectionContext.jsx';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <SectionProvider>
          <App />
        </SectionProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)

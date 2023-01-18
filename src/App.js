import React from 'react'
import './App.css';
import { ThemeProvider } from './context/Theme';
import { LanguageProvider } from './context/Language';
import PageUser from './pages/PageUser';

function App() {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <PageUser />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

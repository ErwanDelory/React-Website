import React from 'react';
import './App.css';
import Menu from './components/menu';
import FirstPage from './pages/firstPage';
import Me from './pages/me';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <div className="App">
      <Menu />
      <FirstPage />
      <Me />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

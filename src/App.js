import React from 'react';
import './App.css';
import Menu from './components/menu';
import FirstPage from './pages/firstPage';
import Me from './pages/me';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <FirstPage />
      <Me />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

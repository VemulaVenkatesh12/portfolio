import React from 'react';
import Navigation from './components/Home/Navigation';
import Hero from './components/Home/Hero';
import Projects from './components/Home/Projects';
import Skills from './components/Home/Skills';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';
import CustomCursor from './components/Home/CustomCursor';
import FloatingShapes from './components/Home/FloatingShapes';
import BgContainer from './components/Home/BgContainer';
import './styles/main.css';

const App: React.FC = () => (
  <>
    <CustomCursor />
    <BgContainer />
    <FloatingShapes />
    <Navigation />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
);

export default App;

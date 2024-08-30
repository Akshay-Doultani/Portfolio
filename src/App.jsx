import React from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import About_me from './components/About_me';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className=' h-screen bg-slate-400 rounded-md'>
      <Navbar />
      <section id="home">
        <CoverImage />
      </section>
      <section id="about">
        <About_me />
      </section>
      <section id="">
        <Skills/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>

    </div>
  );
}

export default App;

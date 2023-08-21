import './css/App.css';
import Navbar from './sections/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="window">
      <Navbar />
      <div className='all-sections-container'>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  ); 
}

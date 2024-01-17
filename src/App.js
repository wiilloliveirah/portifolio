import './App.css';
import Navbar from './componentes/section/Navbar';
import Presetation from './componentes/section/Presetation';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Presetation/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;

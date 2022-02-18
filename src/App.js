import Contact from './components/contact.js'
import Education from './components/education.js'
import Informations from './components/informations.js'
import Projects from './components/projects.js'
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="introduce">
            <Contact />
            <Education />
        </div>
        <div className="bodyCV">
            <Informations />
            <Projects />
        </div>
    </div>
  );
}

export default App;

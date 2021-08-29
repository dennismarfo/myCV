import './App.css';
import User from './components/User'
import Skills from './components/Skills'
import Profil from './components/Profil'
import FormationsExperiences from './components/FormationsExperiences';

function App() {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <User/>
          <Skills/>
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
      
      {/* react, material ui, react-html2pdf */}


      {/* colonne de droite */}
  
      {/* formation - formations */}
      {/* exp - expériences */}

      {/* light/dark mode */}
      {/* generation pdf */}
    
    </div>
  );
}

export default App;

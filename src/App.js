import './App.css';
import User from './components/User'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <User/>
          <Skills/>
        </div>
        <div className="main">
          main
        </div>
      </div>
      
      {/* react, material ui, react-html2pdf */}
      {/* variables css */}
      {/* colonne de gauche */}
      
      {/* details personnels  - User */}
      {/* compétences - skills */}
      {/* langues - skills */}
      {/* centres d'intérêts - interests */}

      {/* colonne de droite */}
      {/* profil - profil */}
      {/* formation - formations */}
      {/* exp - expériences */}

      {/* light/dark mode */}
      {/* generation pdf */}
    
    </div>
  );
}

export default App;

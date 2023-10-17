import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Accueil from './pages/Accueil';
import Acctualite from './pages/Acctualite';
import Clubs from './pages/Clubs';
import Contracts from './pages/Contacts';
import VieLocal from './pages/VieLocal';
import Village from './pages/Village';

function App() {
  return (
    <div className='App'>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/acctualite' element={<Acctualite />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/contact' element={<Contracts />} />
          <Route path='/vielocale' element={<VieLocal />} />
          <Route path='/village' element={<Village />} />
        </Routes>
     
    </div>
  );
}

export default App;

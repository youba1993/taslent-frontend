import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Accueil from './pages/Accueil';
import Acctualite from './pages/Acctualite';
import Clubs from './pages/Clubs';
import Contracts from './pages/Contacts';
import VieLocal from './pages/VieLocal';
import Village from './pages/Village';
import Footer from './components/Footer/Footer';
import ButtonBackToTop from './components/ButtonBackToTop';
import TermsOfService from './pages/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
          <Route path='/term' element={<TermsOfService />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
        <ButtonBackToTop />
     <Footer />
    </div>
  );
}

export default App;

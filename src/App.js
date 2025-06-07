import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Meni from './pages/Meni'
import Order from './pages/Order'
import Contact from './pages/Contact'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import Kontakte from './pages/KontaktPoruke'
import '../src/assets/styles/stilovi.css'
import {useEffect, useState} from "react";
import Welcome from "./pages/welcome";
import RegisterForma from "./components/RegisterForma";
import PiletinaPage from './components/PiletinaPage';
import TjesteninaPage from './components/TjesteninaPage';
import PizzaPage from './components/PizzaPage';
import PalacinkePage from './components/PalacinkePage';
import PicaPage from './components/PicaPage';



function App() {
  const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);


  useEffect(() => {
    const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
    if (spremljeniKorisnik) {
      setUlogovaniKorisnik(JSON.parse(spremljeniKorisnik));
    }
  }, []);
  const handleLogout= () =>{
    localStorage.removeItem('ulogovaniKorisnik');
    localStorage.removeItem('role');
    setUlogovaniKorisnik(null);
  }
  return (
    <Router>
      <div className="wrapper">
        {}
        {}
        <Header korisnik={ulogovaniKorisnik} onLogout={handleLogout}/>
        <main style={{paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="/meni" element={<Meni />} />
            <Route path="/piletina" element={<PiletinaPage />} />
            <Route path="/tjestenina" element={<TjesteninaPage />} />
            <Route path="/pizza" element={<PizzaPage />} />
            <Route path="/palacinke" element={<PalacinkePage />} />
            <Route path="/pica" element={<PicaPage />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
            <Route path="/register" element={<RegisterForma onRegister={setUlogovaniKorisnik} />} />
            <Route path="/login" element={<Login onLogin={setUlogovaniKorisnik} />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/admin" element={
              <>
                <Sidebar />
                <Admin />
              </>
            } />
            <Route path="/admin/poruke" element={
              <>
                <Sidebar />
                <Kontakte />
              </>
            } />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

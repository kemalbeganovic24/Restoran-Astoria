import logo from './logo.svg';
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
import '../src/assets/styles/stilovi.css'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/meni" element={<Meni />} />
            <Route path="/order" element={<Order />}/>
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

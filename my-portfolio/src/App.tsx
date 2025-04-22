import Home from './pages/home';
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import Sameie from './pages/Projects/Sameie';
import Berglundweb from './pages/Projects/Berglundweb';
import DarkModeToggle from './components/DarkMode';
import CV from './pages/CV/Index';


function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-softBlack dark:text-white transition-colors duration-300">
      <div className="flex items-center gap-2">
        <DarkModeToggle />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sameie" element={<Sameie />} />
        <Route path="/Berglundweb" element={<Berglundweb />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App

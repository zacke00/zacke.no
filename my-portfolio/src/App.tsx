import Home from './pages/home';
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import Tandanlaget from './pages/Projects/Tandanlaget';
import Sameie from './pages/Projects/Sameie';
import Berglundweb from './pages/Projects/Berglundweb';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tandanlaget" element={<Tandanlaget />} />
        <Route path="/Sameie" element={<Sameie />} />
        <Route path="/Berglundweb" element={<Berglundweb />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App

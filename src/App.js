
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './container/Header/Header.js';

function App() {
  return (
    // BEM
    <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/checkout" element={<Header/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

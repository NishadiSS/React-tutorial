import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
      </Router>
      </div>
  );
}

export default App;

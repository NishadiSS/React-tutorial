import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Profile from './Components/Pages/Profile';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() { 
  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;

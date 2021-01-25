import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </Router>


      
   
    </div>
  );
}

export default App;

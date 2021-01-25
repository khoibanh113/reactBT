import './App.css';
import { BrowserRouter as Router, Route,NavLink  } from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <NavLink to="/"  >Home</NavLink>
            <NavLink /*to="/about"*/  >About</NavLink>
            <NavLink to="/contact"  >Contact</NavLink>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>


      
   
    </div>
  );
}

export default App;

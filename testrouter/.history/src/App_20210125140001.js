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
            <NavLink activeClassName="selected" to="/"  >Home</NavLink>
            <NavLink activeClassName="selected" to="/about"  >About</NavLink>
            <NavLink activeClassName="selected" to="/contact"  >Contact</NavLink>
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

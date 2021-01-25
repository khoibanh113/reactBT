import './App.css';
import { BrowserRouter as Router, Route,NavLink,Switch  } from 'react-router-dom'
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
            <NavLink to="/abouts"  >About</NavLink>
            <NavLink to="/contact"  >Contact</NavLink>
          </nav>
          <Switch>
            <Route path='/' exact  ><Home /></Route>
            <Route path='/about' ><About /></Route>
            <Route path='/contact'  ><Contact/></Route>

          </Switch>
        </div>
      </Router>


      
   
    </div>
  );
}

export default App;

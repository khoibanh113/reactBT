import './App.css';
import { BrowserRouter as Router, Route,Link  } from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/" exact >Home</Link>
            <Link to="/about" exact >About</Link>
            <Link to="/contact" exact >Contact</Link>
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

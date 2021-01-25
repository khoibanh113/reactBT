import './App.css';
import { BrowserRouter as Router, Route,NavLink,Switch, Redirect  } from 'react-router-dom'
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import NoMatch from './components/noMatch.js';
import Post from './components/post.js';
import Child from './components/child.js'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <NavLink to="/"  >Home</NavLink>
            <NavLink to="/about"  >About</NavLink>
            <NavLink to="/contact"  >Contact</NavLink>
            <NavLink to="/post" >Post</NavLink>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/post'component={Post} />
            <Route path='/post/:id' component={Child} />
            <Route><NoMatch/></Route>
          </Switch>
        </div>
      </Router>


      
   
    </div>
  );
}

export default App;

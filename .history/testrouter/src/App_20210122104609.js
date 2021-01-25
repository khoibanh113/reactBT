import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* {this.props.children} */}
      </div>

      <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
          <IndexRoute component = {Home} />
          <Route path = "home" component = {Home} />
          <Route path = "about" component = {About} />
          <Route path = "contact" component = {Contact} />
        </Route>

      </Router>
      
   
    </div>
  );
}

export default App;

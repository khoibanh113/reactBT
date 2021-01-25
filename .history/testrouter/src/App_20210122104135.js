import './App.css';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

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
      
   
    </div>
  );
}

export default App;

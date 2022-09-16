import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Navbar/>
    </div>
  );
}

export default App;

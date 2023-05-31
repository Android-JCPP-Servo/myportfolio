import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Schooling from './Schooling';
import Work from './Work';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/schooling"><Schooling/></Route>
            <Route path="/work"><Work/></Route>
            <Route path="/volunteering"></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Schooling from './Schooling';
import Work from './Work';
// import Volunteer from './Volunteer';
import Projects from './Projects';
import Certifications from './Certifications';

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
            {/* <Route path="/volunteering"><Volunteer/></Route> */}
            <Route path="/projects"><Projects/></Route>
            <Route path="/certifications"><Certifications/></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

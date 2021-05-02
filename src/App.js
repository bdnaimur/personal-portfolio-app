import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/HomeRoute/Home';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faHashtag, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faHashtag, faStar)

function App() {
  return (
    <Router>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

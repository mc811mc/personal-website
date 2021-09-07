import React from "react";

// components
import Main from './components/Main';
import Navigation from "./components/Navigation/Navigation";
import Programming from './components/Programming/Programming';
import Travel from './components/Travel/Travel';
import Video from './components/Video/Video';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/programming" component={Programming}></Route>
      <Route exact path="/travel" component={Travel}></Route>
      <Route exact path="/video" component={Video}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch>
    <Footer />
    </div>
  </Router>
);

export default App;
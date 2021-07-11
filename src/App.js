import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Programming, Travel, Video, About } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/programming" exact component={() => <Programming />} />
          <Route path="/travel" exact component={() => <Travel />} />
          <Route path="/video" exact component={() => <Video />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
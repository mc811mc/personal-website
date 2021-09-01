import React from "react";

// Components
import Main from './components/Main';
import Programming from './components/Programming/Programming';
import Travel from './components/Travel/Travel';
import Youtube from './components/Youtube/Youtube';
import About from './components/About/About';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div className="App">
    <Main />
    <Programming />
    <Travel />
    <Youtube />
    <About />
  </div>
);

export default App;
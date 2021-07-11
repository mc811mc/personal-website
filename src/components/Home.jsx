import React from "react";
import background from "../photos/background-1.jpg"
import '../App.css';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <img 
            id="background"
            src={background} alt="background"/>
          <div class="col-lg-5">
            <p>
              Hi, I'm Minho
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import profile from "../photos/profile-picture.JPG"

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <img 
              id="profile"
              src={profile} alt="profile picture"
            />
            <p>
            Minho Cho.

            I program and write articles about my travels.

            Cerence
            Seoul, Korea

            Flitto
            Seoul, Korea

            Republic of Korea Army
            Camp Humphreys, Korea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
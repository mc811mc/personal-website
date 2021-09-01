import React from 'react';

import profile from '../../images/profile-picture.JPG';

function About() {
    return (
        <div>
            <img 
              id="profile"
              src={profile} alt="profile picture"
            />
            <p>
            Hi, I'm Minho Cho and welcome to my website.
            <br />
            As you can tell, I program, travel, and write articles about my travels.
            <br />
            You can check out my Github to know what I program
            <br />
            my Youtube to get a glimpse of where I travel,
            <br />
            and my Instagram to read my articles.
            <br />
            </p>
        </div>
    )
}

export default About;
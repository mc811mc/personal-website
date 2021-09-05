import React from 'react';

// Images
import profile from '../../images/profile-picture.JPG';

// Styling
import { Wrapper, Content} from './About.styles';

// Translation
import { useTranslation } from 'react-i18next';

const About = () => (
    <Wrapper>
        <Content>
            <img 
                id="profile"
                src={profile} alt="profile picture"
            />
            <p>
            Hi, I'm Minho Cho.
            <br />
            As you can tell, I program, travel, and write articles about my travels.
            <br />
            You can check out my Github to know what I program
            <br />
            my Youtube to get a glimpse of where I travel,
            <br />
            and my Instagram to read my articles.
            <br />
            Feel free to reach out to me. I am always open for collaborations of any sort.
            </p>
            <a href = "https://www.linkedin.com/in/minhocho4/">LinkedIn</a>
        </Content>
    </Wrapper>
)

export default About;
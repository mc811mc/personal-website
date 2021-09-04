import React from 'react';

// Images
import background from "../../images/background-1.jpg"

// Styling
import { Wrapper } from './Main.styles';

const Home = () => (
    <Wrapper>
        <img 
            id="background"
            src={background} alt="background"
        />
        <a href="">About Me</a>
    </Wrapper>
)

export default Home;
import React from 'react';

// Images
import background from "../../images/background-1.jpg"

// Styling
import { Wrapper } from './Main.styles';

// Translation
import { useTranslation } from 'react-i18next';

const Home = () => (
    <Wrapper>
        <img 
            id="background"
            src={background} alt="background"
        />
    </Wrapper>
)

export default Home;
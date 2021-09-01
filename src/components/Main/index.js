import React from 'react';

import background from "../../images/background-1.jpg"

import { Wrapper } from './Main.styles';

// const Home = () => {
//     <Wrapper>
//         <h1>Minho Cho</h1>
//         <img 
//             id="background"
//             src={background} alt="background"
//         />
//     </Wrapper>
// }

function Home() {
    return (
        <div>
            <img 
                id="background"
                src={background} alt="background"
            />
        </div>
    )
}

export default Home;
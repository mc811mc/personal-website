import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './Navigation.styles';

const Navigation () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <p>Minho Cho</p>
            </Link>
        </Content>
    </Wrapper>
)

export default Navigation;
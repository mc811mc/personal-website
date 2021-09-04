import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import WebsiteLogo from '../../images/website-logo.svg';

import { Wrapper, Content } from './Navigation.styles';

const Navigation = () => (
    <Wrapper>
        <Content>
            <BrowserRouter>
                <Link to='/'>
                    <img src={WebsiteLogo} alt='website-logo'/>               
                </Link>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                <Link to='/'>
                    <p>Programming</p>
                </Link>
                <Link to='/'>
                    <p>Travel</p>
                </Link>
                <Link to='/'>
                    <p>Video</p>
                </Link>
                <Link to='/'>
                    <p>About</p>
                </Link>
            </BrowserRouter>
        </Content>
    </Wrapper>
)

export default Navigation;
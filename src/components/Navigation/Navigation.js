import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import WebsiteLogo from '../../images/website-logo.svg';

import { Wrapper, Content } from './Navigation.styles';

// Translation
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();
    return ( 
        <Wrapper>
            <Content>
                <Link to='/'>
                    <img src={WebsiteLogo} alt='website-logo'/>               
                </Link>
                <Link to='/'>
                    {t('home')}
                </Link>
                <Link to='/programming'>
                    {t('programming')}
                </Link>
                <Link to='/travel'>
                    {t('travel')}
                </Link>
                <Link to='/video'>
                    {t('video')}
                </Link>
                <Link to='/about'>
                    {t('about')}
                </Link>
            </Content>
        </Wrapper>
    )
}

export default Navigation;

// https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/
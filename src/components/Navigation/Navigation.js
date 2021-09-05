import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import WebsiteLogo from '../../images/website-logo.svg';

import { Wrapper, Content } from './Navigation.styles';

import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();
    return ( 
        <Wrapper>
            <Content>
                <BrowserRouter>
                    <Link to='/'>
                        <img src={WebsiteLogo} alt='website-logo'/>               
                    </Link>
                    <Link to='/'>
                        {t('home')}
                    </Link>
                    <Link to='/'>
                        {t('programming')}
                    </Link>
                    <Link to='/'>
                        {t('travel')}
                    </Link>
                    <Link to='/'>
                        {t('video')}
                    </Link>
                    <Link to='/'>
                        {t('about')}
                    </Link>
                </BrowserRouter>
            </Content>
        </Wrapper>
    )
}

export default Navigation;

// https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/
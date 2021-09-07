import React from 'react';

import { Link } from 'react-router-dom';

import { Image } from './Footer.styles';

// Styling
import { Wrapper } from './Footer.styles';

// Translation
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    
    function changeLanguage(change) {
        i18n.changeLanguage(change.target.value);
    }
    
    return (
        <Wrapper>
            <button onClick={changeLanguage} value='en'>{t('english')}</button>
            <button onClick={changeLanguage} value='ko'>{t('korean')}</button>
            <button onClick={changeLanguage} value='jp'>{t('japanese')}</button>
            Copyright &copy; Minho Cho 2021
        </Wrapper> 
    )
}

export default Footer;
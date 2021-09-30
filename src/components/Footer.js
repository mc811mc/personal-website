import React from 'react'

// translation
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

export default function Footer() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    
    function changeLanguage(change) {
        i18n.changeLanguage(change.target.value);
    }

    return (
        <div>
            <button onClick={changeLanguage} value='en'>{t('english')}</button>
            <button onClick={changeLanguage} value='ko'>{t('korean')}</button>
            <button onClick={changeLanguage} value='jp'>{t('japanese')}</button>
            <p>Copyright &copy; Minho Cho 2021</p>
        </div>
    )
}

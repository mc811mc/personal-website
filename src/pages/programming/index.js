import React from 'react'

// translation
import { useTranslation } from 'react-i18next';

// component
import Header from '../../components/Header'

export default function programming() {
    // const { t } = useTranslation();
    return (
        <div>
            <Header />
            <h1>Programming</h1>            
            <h2>Programming Links</h2>
            <a href = "/programming/hantastic">Hantastic</a>
            <a href = "/programming/itoccurs">ItOccurs</a>
            <a href = "/programming/starseeing">Stargazing</a>
            <a href = "https://github.com/mc811mc">Github</a><br></br>
        </div>
    )
}

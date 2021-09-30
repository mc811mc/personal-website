import React from 'react'

import profile from "../images/profile.jpg"

import Header from '../components/Header'

// translation
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation(); 
    return (
        <div>
            <Header />
            <img 
              id="profile"
              src={profile} alt="profile picture"
            />
            <a href = "https://www.linkedin.com/in/minhocho4/">LinkedIn</a>
        </div>
    )
}


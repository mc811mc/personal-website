import React from 'react'

// component
import Header from '../../components/Header'

export default function itoccurs() {
    return (
        <div>
            <Header />
            <h2>Itoccurs Wesbite</h2>
            <h3>In Progress</h3>
            <img src=""/>
            <p> #react </p>
            <p>
                When I first saw my friend Jusung Kim's work on Instagram, I knew right away that I wanted to make a website for him. 
                
                It was the perfect opportunity to improve my website building skills and add professionality to Jusung's Instagram account.
                
                Through this collaboration, I was able to gain hands-on experience of how interaction between a developer/designer
                and a content creator would work.

                In his Instagram, Jusung writes and draws about his daily life. This type of comic is often refered as 'Daily Toon' in Korea. 
                
                He also runs another Instragram account where he draws from famous actors to animation characters with his own palette. 

                In the future, we plan to think of ways to monetize the contents on Jusung's Instagram.  
                
                {/* <a href="/">{t('read more')}</a> */}

                <a href="https://www.instagram.com/itoccurs_to/">Itoccurs</a>

                You can check out his work at <a href="https://www.instagram.com/itoccurs_to/">Itoccurs</a> and <a href="https://www.instagram.com/horololofly/">Jusung Kim</a>
            </p>
        </div>
    )
}

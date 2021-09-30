import React from 'react'

// translation
import { useTranslation } from 'react-i18next';

// component
import Header from '../components/Header'

export default function video() {
    return (
        <div>
            <Header />
            <h1>Youtube</h1>
            <p>I remeber filiming the most trivial things in life back when I was child. 
                For a while, I've lost the joy of doing so but after buying a GoPro for the purpose 
                of recording my bike trip of Korea, I remembered the love I had for leaving each of my life
                in a physical form. That's when I decided to make a Youtube channel so that I can share the 
                memories I had with my friends and family with them. 
            </p>
            <p>I also feature in videos that my friends make because even the process of doing something together is memorable and fun</p>
            <iframe 
                width="560" height="315" 
                src="https://www.youtube.com/embed/bmVOjmPQM_o" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
            <p>Before a close friend of mine embarked for London, I met him to catch up and talk about traveling the U.K. together in the future
               He started his Youtube channel a couple months back and I had the opportunity to be featured in one of his videos. 
            </p>
        </div>
    )
}

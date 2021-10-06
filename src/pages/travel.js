import React from 'react'

// translation
import { useTranslation } from 'react-i18next';

// component
import Header from '../components/Header'

export default function travel() {
    return (
        <div>
          <Header />
          <h1>Travel</h1>
          <p>Welcome to my travel page. I love traveling and as a hobby, I am currently writing a travel essay about my travels</p>
          <h2>Korea Bike Trip</h2>
            <p>Back in May 2019, I embarked on my first bicycle trip from the start to the end of Korea. 
               A staggering 660 kilometer feat, it took 4 nights and 5 days to reach Busan from Incheon.
               I could not forget the fulfilling feeling of my trip in 2019 and planned to embark on same trip with a little twist in 2021.
               With new members, visiting more locations, and filming the whole trip. 
            </p>
            <p> Our itinerary was the following 
            0일차

            인천 집함 (8시)

            1일차 (140km)

           아라서해갑문 (인천) → 여의도 → 팔당 → 양수리 → 양평군청 → 여주

            2일차 (113km)

            여주 → 능암 → 수안보 → 문경읍

            3일차 (108km)

            문경읍 → 문경읍 → 안동

            4일차 (130km

            안동 → 상주 → 낙동 → 구미

            5일차 (120km)

            구미 → 왜관 → 다사읍 → 화원 → 현풍 → 합천 창녕보 → 부림면사무소

            6일차 (118km

            부림면사무소 → 남지읍 → 하남읍 → 낙동강 하구둑 자전거길 인증센터
            </p>
            <iframe 
              src="https://www.youtube.com/embed/WGBTuf2YD3o" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
          <h2>Summer in Bali</h2>
          <div>
            <iframe
              src="https://www.youtube.com/embed/-RU4nbs-4NA" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            />
            <p>First time in a villa with a pool, this was one of the best experiences I had during my stay in Bali, Indonesia.</p>
          </div>
          <h2>라오스 사용법</h2>
          <img src=""/>
          <p>
            방비엥의 아침엔 조급함을 찾을 수 없다. <br />
            다들 말 없이 남쏭강을 바라보며 입 속에 망고를 하나 둘 넣는다. <br />
            그러는 사이에 강을 가로지는 배가 하나 둘 씩 지나간다. <br />
            몇 시부터 준비하셨을까, 엄청 부지런하시네 같은 강연들을 하며 그들을 향해 손 인사를 건넨다. <br />
            그리곤 다시 망고 하나를 먹고서는 다시 의자에 축 늘어져서 이 순간을 즐긴다. <br />
            <br />
            "아무도 뭐라 안하니깐 좋네." <br />
            <br />
            2019년 3월 25일, 방비엥<br />
          </p>
          <div>
            <p>I'm no Airbnb ambassador but ever since Airbnb came out, I've been using it heavly 
               due to the fact that most accomodations are located in residential areas
               which really helps me immerse in one's country when I travel.
            </p>
            <a href = "https://www.airbnb.com/c/mcho130?referral_share_id=dbd79969-594f-4f96-92d3-8ce168c19c91">AirbnbLinkedIn</a>
            <a href="https://www.instagram.com/minhocho.travel/">Instagram</a><br></br>
            <a href = "https://www.twitter.com/MinhoCho">Twitter</a>
          </div>
        </div>
    )
}

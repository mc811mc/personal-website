import React from "react";
import tanah from "../photos/tanah-lot.jpg"
import '../App.css';

function Travel() {
  return (
    <div className="travel">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Travel</h1>
            <img
              id="background"
              src="{tanah}" alt="tanah lot"
            />
            <article>
			        <h2> 라오스 사용법 </h2>
				        <p>2019년 떠난 라오스 여행기</p>
				        <p>"그 3월, 내가 느꼈던 뜨거운 태양 아래의 추억들에 대한 나의 솔직한 담화들. 당신에게도 그 열정이 다다를 수 있도록 내 이야기를 전하고자 한다."</p>	
		        </article>
            <article>
              Korea Bike Trip
              <button>
                Keep Reading
              </button>

            </article>

          </div>
          <div>
            <a href="https://www.instagram.com/minhocho.travel/">Instagram</a><br></br>
            <a href = "https://www.twitter.com/MinhoCho">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
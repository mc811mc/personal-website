import React from "react";

function Travel() {
  return (
    <div className="travel">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Travel</h1>
            <article>
			        <h2> 라오스 사용법 </h2>
				        <p>2019년 떠난 라오스 여행기</p>
				        <p>"그 3월, 내가 느꼈던 뜨거운 태양 아래의 추억들에 대한 나의 솔직한 담화들. 당신에게도 그 열정이 다다를 수 있도록 내 이야기를 전하고자 한다."</p>	
		        </article>
            <article>
              <h2> 발리했다 </h2>
                <p>군제대 후 떠난 발리 한 달 살기</p>
                <p>"꿈과 현실이 공존하는 발리에서의 한 달 살기"</p>	
            </article>
            <article>
              Korea Bike Trip
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
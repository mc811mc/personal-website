import React from "react";

function Video() {
  return (
    <div className="video">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Video</h1>
            <p>
              This is my youtube promotion page.<br></br>
            </p>
          </div>
          <iframe 
            width="560" height="315" 
            src="https://www.youtube.com/embed/WGBTuf2YD3o" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          />
          <iframe 
            width="560" height="315" 
            src="https://www.youtube.com/embed/bmVOjmPQM_o" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          />
          <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/-RU4nbs-4NA" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          <div>
            <a href = "https://www.airbnb.com/c/mcho130?referral_share_id=dbd79969-594f-4f96-92d3-8ce168c19c91">AirbnbLinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
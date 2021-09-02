import React from "react";

function Youtube() {
    return (
        <div>
            <h2>Youtube</h2>
            <p>I post memories I make with my friends so that my friends can see them as well   </p>
            <p>I also feature in some videos my friends make</p>
            <iframe 
                width="560" height="315" 
                src="https://www.youtube.com/embed/bmVOjmPQM_o" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
            <a href = "https://www.airbnb.com/c/mcho130?referral_share_id=dbd79969-594f-4f96-92d3-8ce168c19c91">AirbnbLinkedIn</a>
        </div>
    );
}

export default Youtube;
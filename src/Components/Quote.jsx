import React from "react";
import image1 from "../assets/3.png";
import image2 from "../assets/2.png";
import image3 from "../assets/1.png";
import place from "../assets/place.png";
function Quote() {
  return (
    <div className="quote flex">
      <div quote-image3>
        <img className="mt-10" src={image3} alt="" />
      </div>
      <div className="grid justify-items-center items-center">
        <p className="quote-p">TOIT BREWERY</p>{" "}
        <img className="quote-img" src={image1} alt="" />
        <h1 className="quote-h1"> Come by. Try everything twice.</h1>
        <h1 className="quote-h12">Love</h1>
      </div>
      <div>
        <img className="mt-0" src={image2} alt="" />
      </div>
    </div>
  );
}

export default Quote;

import React from "react";
import image1 from "../assets/image1.png";
function Menu() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="menu-image1">
          <div className="m-16 mt-72">
            <h2>BARS</h2>
            <p className="w-80">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>

        <div className="menu-image2">
          <div className="m-16 mt-72">
            <h2>BEERS</h2>
            <p className="w-80">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>

        <div className="menu-image3">
          <div className="m-16 mt-72">
            <h2>BREWERY</h2>
            <p className="w-80">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

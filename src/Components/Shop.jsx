import React from "react";
import image from "../assets/shopimg.png";
import hat from "../assets/hat.png";
import arrow from '../assets/Arrow.png'
function Shop() {
  return (
    <div className="shop" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 pl-24 pt-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="shop-h1">
              Want To purchase
              <br class="hidden lg:inline-block" />
              our merchandise
            </h1>
            <p class="shop-p mt-11">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div class="flex justify-center mt-11">
              <button class="inline-flex gap-6 text-white justify-center items-center bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded-full text-lg">
                Shop Now <img src={arrow} alt="" />
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hat}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;

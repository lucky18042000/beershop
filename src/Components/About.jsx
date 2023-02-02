import React from "react";
import image from "../assets/Toitpune.png";
import explore from "../assets/Group.png";

function About() {
  return (
    <div id="about-section">
      <section class="about-section text-gray-600 body-font">
        <div class=" mx-auto flex px-64 py-24 md:flex-row flex-col items-center">
          <div class="absolute lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-white text-lg">About Us</p>
            <h1 class="about-h1 title-font sm:text-6xl text-6xl mb-4 font-medium text-white  ">
              We are Toit.
              <br class="hidden lg:inline-block" />
              You should be too…
            </h1>
            <p class="about-p mb-8 w-80 leading-relaxed text-white">
              Toit is a brew pub, brewing a revolutionary culture. We started
              out as a sweet little Bengaluru brewing culture with the promise
              of some bodacious brews, fabulous foods and a supreme brew-pub
              experience
            </p>
            <p className="about-explore text-amber-600 uppercase flex items-center justify-center gap-4">
              Explore <img src={explore} alt="" />
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="about-image object-cover object-center rounded"
              alt="hero"
              src={image}
            />
          </div>
        </div>
        <div class="about-bg" />
        <div className="about-blackshade"></div>
      </section>
    </div>
  );
}

export default About;

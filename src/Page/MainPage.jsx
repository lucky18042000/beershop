import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../assets/bg.png";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import About from "../Components/About";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import Shop from "../Components/Shop";
import Image from "../Components/Image";
function MainPage() {
  return (
    <div className="mainpage">
     <Header/>
     <Menu/>
     <About/>
     <Quote/>
     <Shop/>
     <Image/>
     <Footer/>
    </div>
  );
}

export default MainPage;

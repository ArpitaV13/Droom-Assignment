import React from "react";
import modernOffice from "../images/modernOffice.png";
import CEO from "../images/CEO.png";
import Invitation from "../images/Invitation.png";
import Music from '../images/Music.png';
import Badshah from "../images/Badhshah.png"
import BadshahName from '../images/BadshanName.png'
import Brands from '../images/Brands.png'
import Landingpage3 from "./landingpage3";

export default function LandingPage2() {
  return (
    <div className="landingPage2">
      <div className="grid grid-cols-3 gap-4 p-4 w-full h-full relative justify-between">
        <div className="relative flex items-center h-full">
          <img
            src={modernOffice}
            className="w-full object-cover h-full opacity-60"
            alt="Modern Office"
          />
          <img
            src={CEO}
            className="absolute inset-0 w-full h-full opacity-90"
            alt="CEO"
            style={{ transform: "translateY(20%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b to-black opacity-70"></div>
        </div>
        <div className=" text-left col-span-2 p-6 text-white ">
          <span className="text-5xl font-bold text-color" style={{ color: "#FDD778" }}>
            Celebrating 10 years
          </span>
          <p className="mt-2 font-bold">
            A Decade of Revolutionizing the Auto Industry
          </p>
          <p className="mt-4">
            Since its inception, Droom has transformed the automotive industry
            in India, revolutionizing how vehicles are bought and sold. Over the
            past decade, we've redefined the market and empowered millions with
            innovative technology and services.
          </p>
          <img src={Invitation} className="mt-3" />
        </div>
      </div>
      <div className="mt-10 relative">
        <img src={Music} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-xl tracking-wide" style={{ color: "#FDD778" }}>Special Guest for the Night</h1>
            <img src={BadshahName} />
          </div>
          <div>
          <img src={Badshah}
          alt="Badshah"  />
          </div>
        </div>    
      </div>
      <div className="mt-10"> 
      <span className="text-5xl font-bold txt-center" style={{ color: "#FDD778" }}>
            Droom Brand Recognition
      </span>
      <img src={Brands} 
      className="mt-10"/>
      </div>
    </div>
  );
}

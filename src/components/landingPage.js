import React from "react";
import backgroundImage1 from '../images/backgroundImage1.jpg'

export default function LandingPage() {
  return (
    <div className="bg-center relative w-full h-full">   
    <img src={backgroundImage1}
    className="h-full w-full object-cover"
    alt='dummy'
    />
    <div className="navbar bg-transparent text-white">
      <div className="flex-1">
        {/* <img src="" /> */}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-4 text-l">
          <li>
            <a>Celebrating 10 years</a>
          </li>
          <li>
            <a>Achievements</a>
          </li>
          <li>
            <a>Chief guests</a>
          </li>
          <li>
            <a>Supply Chain</a>
          </li>
          <li>
            <a>Partners & Sponsors</a>
          </li>
          <li>
            <a>Brand Recognition</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

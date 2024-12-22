import React from "react";
import Uber from '../images/Uber.png';
import LoveAajKal from '../images/LoveAajKal.png';
import TheTimesGroup from '../images/TheTimesGroup.png';
import Fastrack from '../images/Fastrack.png';
import TheManCompany from '../images/TheManCompany.png';
import StandardChartered from '../images/StandardChartered.png';
import Roadies from '../images/Roadies.png';
import Pioneer from "../images/Pioneer.png";
import Kotak from '../images/Kotak.png';
import DBS from '../images/DBS.png';
import TataCapital from '../images/TataCapital.png';
import FutureGeneral from '../images/FutureGeneral.png';
import Ten from '../images/Ten.png';


export default function landingPage4() {
  return (
    <div className="landingPage2">
      <div className="mt-2">
        <span
          className="text-5xl font-bold txt-center"
          style={{ color: "#FDD778" }}
        >
          Parters and Sponsors
        </span>
        <div className="mt-10 grid grid-cols-6 gap-4">
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={Uber} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={TheTimesGroup} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={Fastrack} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={TheManCompany} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={StandardChartered} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={Roadies} />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-6 gap-4">
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={LoveAajKal} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={Pioneer} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={Kotak} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={DBS} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={TataCapital} />
          </div>
          <div className="border border-gray-500 rounded-lg aspect-square p-3 flex items-center justify-center">
            <img src={FutureGeneral} />
          </div>
        </div>
        <div className="mt-10 relative">
          <img src={Ten} className=" w-full transform scale-75 "/>
          <div className="absolute top-[25%] left-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">250k+</span>
            <br/>
            <span className="text-lg text-white">Listing</span>
          </div>
          <div className="absolute top-[45%] left-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">250k+</span>
            <br/>
            <span className="text-lg text-white">Listing</span>
          </div>
          <div className="absolute top-[65%] left-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">250k+</span>
            <br/>
            <span className="text-lg text-white">Listing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
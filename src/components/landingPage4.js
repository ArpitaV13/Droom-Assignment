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
          <div className="absolute top-[10%] left-[33%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">200Mn+</span>
            <br/>
            <span className="text-lg text-white">Traffic (Per Year)</span>
          </div>
          <div className="absolute top-[3%] left-[51%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">16Mn+</span>
            <br/>
            <span className="text-lg text-white">Traffic (Per Month)</span>
          </div>
          <div className="absolute top-[10%] right-[9%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">16.2Mn+</span>
            <br/>
            <span className="text-lg text-white">App Downloads</span>
          </div>
          <div className="absolute top-[45%] left-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">$7.4Bn+</span>
            <br/>
            <span className="text-lg text-white">Listed GMV</span>
          </div>
          <div className="absolute top-[45%] right-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">1174+</span>
            <br/>
            <span className="text-lg text-white">No. of Cities</span>
          </div>
          <div className="absolute top-[25%] left-[4%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">250k+</span>
            <br/>
            <span className="text-lg text-white">Listing</span>
          </div>
          <div className="absolute top-[45%] left-[2%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">$7.4Bn+</span>
            <br/>
            <span className="text-lg text-white">Listed GMV</span>
          </div>
          <div className="absolute top-[68%] left-[4%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">354k+</span>
            <br/>
            <span className="text-lg text-white">Dealers</span>
          </div>
          <div className="absolute top-[85%] left-[33%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">7Mn+</span>
            <br/>
            <span className="text-lg text-white">Social Media Followers</span>
          </div>
          <div className="absolute top-[89%] left-[55%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">582+</span>
            <br/>
            <span className="text-lg text-white">Vehicle Sold</span>
          </div>
          <div className="absolute top-[85%] right-[12%] ">
            <span className="text-[#FDD778] text-4xl mt-1 ">$7.4Bn+</span>
            <br/>
            <span className="text-lg text-white">GMV</span>
          </div>
        </div>
      </div>
    </div>
  );
}
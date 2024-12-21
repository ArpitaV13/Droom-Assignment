import React from "react";
import AppleStore from "../images/AppleStore.svg";
import PlayStore from "../images/PlayStore.svg";
import youtube from "../images/youtube.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import pinterest from "../images/pinterest.svg";
import mail from '../images/mail.svg';
import calender from '../images/calendar.svg';

export default function Footer() {
  return (
    <div className="footer-layout">
      <div className="grid grid-cols-3 gap-4 p-4 w-full ">
        <div className="text-8xl">LOGO</div>
        <div className="col-span-2 flex text-left justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <p>Download the App</p>
            <div className="flex gap-2">
              <img src={AppleStore} className="p-2"/>
              <img src={PlayStore} className="p-2" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>Watch TVC</p>
            <div className="flex gap-2">
            <img src={youtube} className="p-2"/>
            </div>
            
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>FOLLOW & SHARE ON</p>
            <div className="flex gap-2">
              <img src={instagram} className="p-2" />
              <img src={twitter} className="p-2"/>
              <img src={linkedin} className="p-2" />
              <img src={facebook} className="p-2" />
              <img src={pinterest} className="p-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4">
        <div className="flex felx-col">
            <img src={calender} className="p-3"/>
            <p className="p-2"> 10 October 2024, Gurugram Haryana</p>
        </div>
        <div className="flex felx-col">
            <img src={mail} className="p-3"/>
            <p className="p-2">E-mail: pr@droom.in</p>
        </div>
      </div>
      <div className="text-gray-500">
        All right reserved
      </div>
    </div>
  );
}

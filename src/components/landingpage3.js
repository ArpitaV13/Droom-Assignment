import React from 'react'
import Sky from '../images/Sky.png'
import monitor from '../images/monitor.svg';
import Carousel from './corousel';
import Track from '../images/Track.png';
import Plant from '../images/Plant.svg';

export default function Landingpage3() {
  return (
    <div className="bg-center relative w-full h-full text-white">   
    <img src={Sky} alt='dummy'
    />
    <div className='absolute top-0 w-full p-10 text-center bg-transparent'>
    <span className="text-5xl font-bold " style={{ color: "#FDD778" }}>
            Droom Achievements
      </span>
    <div className='text-white mt-5'>
        <h1>Our Milestones, Your Moments</h1>
        <p className='max-w-[50%] text-center mx-auto mt-5'>Over the past decade, Droom has achieved extraordinary milestones, from revolutionizing the automotive industry to becoming a household name. Here’s a look at some of our standout achievements:</p>
    </div> 
    <div className='grid grid-cols-2 mt-10'>
        <Carousel />
        <div>
            <h2 style={{ color: "#FDD778" }}>Top Highlights</h2>
            <div className='card compact bg-[#084061] max-w-85 text-left text-xs bg-opacity-80 mt-8 text-white p-4'>
              <div className='flex flex-row'>  
                <div className='p-3'>
                  <img src={monitor} alt='dummy' className='h-full w-full' />
                </div>
                <div className='p-3'>
                  <h1 style={{color: "#FDD778" }}>India’s First Automobile Marketplace</h1>
                  <p>Droom was the first to launch an online marketplace dedicated to buying and selling vehicles in India, transforming how people purchase automobiles and setting a new standard for transparency and convenience in the industry.</p>
                </div>
              </div>
              <div className='flex flex-row'>  
                <div className='p-3'>
                  <img src={Plant} alt='dummy' className='h-full w-full' />
                </div>
                <div className='p-3'>
                  <h1 style={{color: "#FDD778" }}>$125 Million+ in Funding Raised</h1>
                  <p>Droom was the first to launch an online marketplace dedicated to buying and selling vehicles in India, transforming how people purchase automobiles and setting a new standard for transparency and convenience in the industry.</p>
                </div>
              </div>
              <div className='flex flex-row'>  
                <div className='p-3'>
                  <img src={Track} alt='dummy' className='h-full w-full' />
                </div>
                <div className='p-3'>
                  <h1 style={{color: "#FDD778" }}>2 Track Days and Automotive Events</h1>
                  <p>Droom was the first to launch an online marketplace dedicated to buying and selling vehicles in India, transforming how people purchase automobiles and setting a new standard for transparency and convenience in the industry.</p>
                </div>
              </div>

            </div>
        </div>
    </div> 
    </div>
    </div>
  )
}

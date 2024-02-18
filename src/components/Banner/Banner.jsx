import React from 'react'
import BannerImg from"../../assets/coffee-white.png"
import BgTexture from "../../assets/website/coffee-texture.jpg"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"
const bgImage={
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}
function Banner() {
  return (
    <>
    <div style={bgImage} id="about">
        <div className="container min-h-[550px] flex items-center py-12 sm:py-0" >
          <div className="grid grid-cols-1 sm:grid-cols-2
           gap-6">
            {/* image Section */}
              <div data-aos="zoom-in">
                <img src={BannerImg} alt="" 
                className='max-w-[430px] w-full mx-auto spin
                drop-shadow-xl'/>
              </div>

            {/* text content Section */}
             <div className='flex flex-col justify-center gap-6 sm:pt-0'>
              <h1 data-aos="fade-up"className='font-cursive text-3xl sm:text-4xl font-bold'>Premium Blend Coffee </h1>
              <p data-aos="fade-up"className='text-sm text-gray-500 tracking-wider leading-5'>
              Is premium coffee good?
Premium coffee could be defined as a clean, acceptable bean with a distinctive flavor in the cup, but one that did not receive a high enough score to be considered specialty. Commercial coffee brands sometimes offer above-average coffee that can be classified as premium.
              </p>

              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-5'>
                  
                  <div data-aos="fade-up"  className='flex items-center  gap-2'>
                    <GrSecure
                    className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200'/>
                    <span>Premium Coffee</span>
                  </div>
            
                  <div data-aos="fade-up" data-aos-delay="300" className='flex items-center gap-2'>
                    <GiFoodTruck
                    className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200'/>
                    <span>Hot Coffee</span>
                  </div>
        
                  <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" className='flex items-center gap-2'>
                    <IoFastFood
                    className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200'/>
                    <span>Cold Coffee</span>
                  </div>
             
               </div>
                    
               <div data-aos="slide-left" className='border-l-2 border-primary pl-3 space-y-3'>
                <h1 className='text-2xl  font-semibold font-cursive'>Tea Lover</h1>
                <p className='text-gray-500 text-sm'>
                  {" "}
                  Much like writing code,  brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                </p>
               </div>     

              </div>
              
             </div>

           </div>
        </div>
    </div>
    </>
  )
}

export default Banner

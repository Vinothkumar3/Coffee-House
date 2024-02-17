import React from 'react'
import AppStoreImg from "../../assets/website/app_Store.png"
import BgPng from  "../../assets/website/coffee-beans-bg.Png"
import PlayStoreImg from "../../assets/website/Play_Store.png"

const backgroundStyle={
    backgroundImage:`url(${BgPng})`,
    backgroundPosition:"centre",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
}

const AppStore = () => {
  return (
    <>
    <div style= {backgroundStyle} className='py-14'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2
        items-center gap-4">
          <div data-aos="fade-up" className='space-y-6 max-w-xl mx-auto'>
            {/* text content */}
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90'>Coffee House is available for Android and Ios</h1>
            {/* logo-section */}
            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
              <a href="#">
                <img src={AppStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
              </a>
              <a href="#">
                <img src={PlayStoreImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
              </a>
            </div>

            </div>
          <div></div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AppStore
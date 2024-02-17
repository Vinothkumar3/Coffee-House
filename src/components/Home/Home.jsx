import React from 'react'
import HeroImg from'../../assets/coffee2.png'

function Home() {
  return (
    <div className='min-h-[580px] sm:min-h-[600px]
    bg-brandDark flex justify-center items-center text-white' id="home">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1  sm:grid-cols-2">
                {/* text content section */}
                <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' data-aos="fade-up" data-aos-once="true">Start Your Day Right{" "}
                    <span  data-aos="zoom-out" data-aos-delay="300" className='text-primary font-cursive '>Coffee</span>  and right place
                     </h1> 
                     <div data-aos="fade-up" data-aos-delay="true" >
                        <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full
                        px-4 py-2  text-white hover:scale-105 duration-200">Coffee And Code</button>
                     </div>
                </div> 
                 {/* image content section */}
                <div  data-aos="zoom-in" className='min-h[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                <img src={HeroImg} alt="coffee rotation" className='w-[300px]  sm:w-[450px] sm:scale-110 mx-auto  spin '/>
                 <div data-aos="fade-left" className='bg-gradient-to-r from-primary to-secondary absolute top-1 l  left-10 p-3 rounded-xl'><h1>Hey Coder</h1></div>
                 <div data-aos="fade-right" className='bg-gradient-to-r from-primary to-secondary absolute bottom-0  right-10 p-3 rounded-xl'><h1>Best Coffee</h1></div>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Home
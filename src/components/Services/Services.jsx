import React from 'react'
import Img2 from"../../assets/coffee2.png"

const ServicesData=[
    {
        id:1,
        img:Img2,
        name:"Espresso",
        description:" Drinking espresso gives you a boost of energy. This energy can make it a lot easier for your brain to focus on your day-to-day responsibilities.",
        aosDelay:100
    },
    {
        id:2,
        img:Img2,
        name:"Americano",
        description:" Boosts energy and mental alertness. The Americano is made with espresso, which is a type of coffee that is known for its high levels of caffeine.",
        aosDelay:100
    },
    {
        id:3,
        img:Img2,
        name:"Cappuccino",
        description:"cappuccino is a coffee drink that today is typically composed of a single, double, or triple espresso shot and hot milk, with the surface topped with foamed milk",
        aosDelay:100
    },
]
function Services() {
  return (
    <>
    <span id="services"></span>
    <div className='py-5'>
        <div className="container">
            {/* Header tittle */}
            <div data-aos="fade-up" className='text-center mb-20'>
                <h1 className='text-5xl font-bold font-cursive text-gray-950'>Best Coffee For You</h1>
            </div>
           {/* Services Card Section */}

           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {
                ServicesData.map((data,index)=>{
                    return(
                        <div data-aos="fade-up"  data-aos-delay={data.aosDelay} key={index} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>
                            {/* img section */}
                            <div className='h-[130px]'>
                                <img src={data.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'/>
                            </div>
                            
                            {/* text content */}
                             
                             <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>
                                    {data.name}
                                </h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                             </div>

                        </div>
                    )
                })
            }
            <div className=""></div>
           </div>

        </div>
    </div>
    </>
  )
}

export default Services
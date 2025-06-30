import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tick from "../assets/tick.png";
import warehouse from "../assets/warehouse.png";
import supplychain from "../assets/supplychain.png";
import inventory from "../assets/inventory.png";
import order from "../assets/order.png";
import  Logisticsec from "./Logisticsec";

function Logistics() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const loglist = [
    { title: "Supply Chain", icon: supplychain },
    { title: "Inventory Management", icon: inventory },
    { title: "Order Fulfillment", icon: order },
    { title: "Warehousing", icon: warehouse },
  ];

  const list = [
    { text: "Fast Delivery", icon: tick },
    { text: "Safety", icon: tick },
    { text: "Good Packaging", icon: tick },
    { text: "Privacy", icon: tick },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="flex flex-col lg:flex-row gap-10 bg-[#032330] rounded-lg p-6 sm:p-10 lg:p-16"
          data-aos="fade-up"
        >
          {/* Logistics List */}
          <ul
            className="relative flex flex-col gap-6 bg-[#eeeff1] p-6 sm:p-10 w-full lg:max-w-sm rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[30px] before:bg-[#eeeff1] before:origin-top-left before:[transform:skewY(-2deg)]"
            data-aos="fade-right"
          >
            {loglist.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 sm:gap-6 px-6 py-4 bg-white text-black rounded-md hover:bg-[#df1118] hover:text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <img src={item.icon} alt={item.title} className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
                <span className="text-sm sm:text-base font-medium">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Right Content */}
          <div className="flex flex-col justify-between gap-12 w-full" data-aos="fade-left">
            {/* Description */}
            <div className="px-6 py-4 border-l-4 border-[#df1118] bg-[#021922] text-white text-sm sm:text-base">
              For each project we establish relationships with partners who we know will help us create added value.
            </div>

            {/* Image with overlay */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0" data-aos="zoom-in">
              <img
                src={warehouse}
                alt="Warehouse"
                className="w-full h-64 sm:h-72 lg:h-60 object-cover rounded-md"
              />

              <div
                className="absolute top-0 left-0 h-full w-[60%] sm:w-[180px] bg-[#df1118] z-10
                [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] flex flex-col justify-center pl-4 gap-3 rounded-l-md"
              >
                {list.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white text-xs sm:text-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <img src={item.icon} alt="" className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-6" data-aos="fade-up">
              <div className="flex items-center gap-2 text-white">
                <img src={tick} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-base font-medium">Dedicated Transport Wise</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <img src={tick} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-base font-medium">Domestic & Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section with Scroll Effects */}
      <div data-aos="fade-up">
        <Logisticsec />
      </div>
    </div>
  );
}

export default Logistics;

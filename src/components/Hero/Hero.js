import React from "react";
import IconMaps from "./../../assets/maps.png";

import IconUsers from "./../../assets/users.png";

import IconServer from "./../../assets/server.png";

import Ilustration1 from "./../../assets/Illustration_1.png";

const Hero = () => {
  const section3 = [
    {
      icon: IconUsers,
      lable: "Users",
      total: "90+",
    },
    {
      icon: IconMaps,
      lable: "Locations",
      total: "30+",
    },
    {
      icon: IconServer,
      lable: "Servers",
      total: "50+",
    },
  ];

  return (
    <div>
      <div className="container max-w-6xl mx-auto  grid grid-cols-2 py-24">
        <div>
          <h1 className="font-bold text-4xl pb-5">
            Want anything to be easy
            <br />
            with LaslesVPN.
          </h1>
          <div className="font-normal text-xs pb-12">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </div>
          <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
            Get Started
          </button>
        </div>
        <div>
          <img src={Ilustration1} alt="ilustration-laslesvpn" />
        </div>
      </div>
      <div className="container max-w-6xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
        {section3.map((val, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row py-4  space-x-6 justify-center ${
                index + 1 !== section3.length && "border-r border-gray-200"
              }`}
            >
              <div className="rounded-full bg-red-100 p-3 ">
                <img alt={val.lable} src={val.icon} className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">{val.total}</div>
                <div>{val.lable}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

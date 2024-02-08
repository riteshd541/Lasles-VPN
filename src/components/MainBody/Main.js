import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Netflix from "./../../assets/socialmedia/Netflix.png";
import reddit from "./../../assets/socialmedia/reddit.png";
import Discord from "./../../assets/socialmedia/Discord.png";
import Spotify from "./../../assets/socialmedia/Spotify.png";

import amazon from "./../../assets/socialmedia/amazon3.png";

import Ilustration2 from "./../../assets/Illustration_2.png";
import Check from "./../../assets/Check.png";
import Global from "./../../assets/Huge_Global.png";

import CardPlan from "../CardPlan";
import TitleDesc from "../TitleDesc";
import Review from "../Review";
import SubscribeNow from "../SubscribeNow";

const Main = () => {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Internet without borders.",
    "No specific time limits.",
  ];

  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Connect Anyware",
      ],
      price: "$12 / mo",
    },
  ];

  const sosmed = [Netflix, reddit, amazon, Discord, Spotify];

  return (
    <div>
      <main>
        <div className="container max-w-6xl mx-auto grid grid-cols-2 py-24  items-center ">
          <img src={Ilustration2} alt={"features-lasles-vpn"} />
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="features-check-laslesvpn"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title={"Choose Your Plan"}
            desc={`Let's choose the package that is best for you and explore it
        happily and
        cheerfully.`}
          />

          <div className=" container max-w-6xl mx-auto grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>

          <div className="container max-w-6xl mx-auto py-24">
            <TitleDesc
              title={" Huge Global Network of Fast VPN"}
              desc={` See LaslesVPN everywhere to make it easier for you when you move locations.`}
            />

            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                <img key={index} src={val} className="w-44 h-14" alt={val} />
              ))}
            </div>
          </div>
          <div className="max-w-7xl">
            <Review />
          </div>
        </div>
        <div className="bg-gray-100">
          <SubscribeNow />
        </div>
      </main>
    </div>
  );
};

export default Main;

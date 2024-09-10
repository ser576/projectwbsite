"use client";
import React from "react";
import Image from "next/image";
import logo from "/public/images/logo192.png";

const tokenomicsData = [
  {
    title: 'Presale',
    unlockInfo: '40% unlock TGE , 60% vesting 3 months with monthly claim',
    percentage: '15%'
  },
  {
    title: 'Ecosystem',
    unlockInfo: '',
    percentage: '10%'
  },
  {
    title: 'Liquidity',
    unlockInfo: '',
    percentage: '30%'
  },
  {
    title: 'Strategic partnership and ecosystem',
    unlockInfo: '20% unlock TGE, Cliff 1 Month, 80% vesting 4 months with monthly claim',
    percentage: '10%'
  },
  {
    title: 'Community and user incentives',
    unlockInfo: '20% unlock after 7 days TGE, 80% vesting 4 months with monthly claim',
    percentage: '15%'
  },
  {
    title: 'Team and advisor',
    unlockInfo: '10% unlock TGE, Cliff 12 months, 90% vesting 9 months with monthly claim',
    percentage: '10%'
  },
  {
    title: 'Marketing and community growth',
    unlockInfo: '',
    percentage: '10%'
  }
];

export default function Tokenomic() {
  return (
    <>
      <div className="tokennoics-ouetr-wpr">
        <div className="bg-image-tockenomics">
          <img
            src="./images/otherimages/rebelprotcol-logo.png"
            alt="Logo"
            width="350"
            height="350"
          />
        </div>
      <div className="tokennoics-wpr">
        <div className="tokenomics-tittl-sec">
          <h2 className="text-3xl md:text-5xl xl:text-6xl text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
            Tokenomics <span>rebel protocol</span>
          </h2>
          <div className="supply-wpr __className_b19098">
            <span>Total Supply</span>
            <span>1,000,000,000 $REB</span>
          </div>
        </div>

        <div className="tokennomics-right">
          {tokenomicsData.map((item, index) => (
            <div className="ocupied-outer" key={index}>
              <div className="ocupied-block">
                <span className="ocupied-title __className_b19098">
                  {item.title}
                  <span className="ocupied-number __className_36bd41">
                    {item.unlockInfo}
                  </span>
                </span>
                <div className="ocupied-percentage">
                  <span>{item.percentage}</span>
                </div>
              </div>
              <div className="stroke"></div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

const Card = ({ text, percentage, subtext }) => {
  return (
    <div className="relative bg-[#0f0f11]/90 rounded-lg shadow-lg p-4 w-full h-full">
      <div className="text-base md:text-base text-white font-medium">
        {text}
      </div>
      <div className="flex items-center mt-2">
        <div className="w-full bg-[#cc3cd9]/15  rounded-full h-2">
          <div
            className="bg-fuchsia-700 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-4 text-sm md:text-base text-white font-medium">
          {percentage}%
        </div>
      </div>
      <div className="text-sm md:text-base font-medium mt-5">{subtext}</div>
    </div>
  );
};

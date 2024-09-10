"use client";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Heropage from "@/components/Heropage";
import HowItsWorks from "@/components/HowItsWorks";
import NavBar from "@/components/NavBar";
import Presale from "@/components/Presale";
import RoadMap from "@/components/RoadMap";
import Tokenomic from "@/components/Tokenomic";
import UpScrolbutton from "@/components/UpScrolbutton";
import Why from "@/components/Why";
// import { FaQ, FaUpRightFromSquare } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      {/* <Provider/> */}
      <div className="relative w-full ">
        <NavBar />

        <div className="fixed  z-50  rainbow-gradient-circle "></div>
        <div className="fixed z-50  theme-pink"></div>

        <div id="/" className="my-10 md:mt-20 lg:mt-8">
          <Heropage />
        </div>

        <div className="relative flex flex-col px-3 sm:px-7 lg:px-16  xl:px-28 overflow-hidden gap-y-16 md:gap-y-20 xl:gap-y-24">
          <div id="section2">
            <Presale />
          </div>
          <div id="section1">
            <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
              About Us
            </h1>
            <AboutUs />
          </div>
          <div id="section4">
            <div className="accordion-content mx-auto flex flex-col md:flex-row md:gap-[70px] justify-between">
              <div className="accordion-section w-full md:w-1/2 px-4">
                <div className="how-itswork-tittle">
                  <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
                  {`How It's Works`} <span></span>
                  </h1>
                </div>
                <HowItsWorks />
              </div>
              <div className="accordion-section w-full md:w-1/2 px-4">
                <div className="why-tittle">
                  <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
                  {`Why`} <span></span>
                  </h1>
                </div>
                <Why />
              </div>
            </div>
          </div>

          <div id="section5">
            <Tokenomic />
          </div>

          <div id="section6">
            <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
              Explore our <span>Roadmap</span>
            </h1>
            <RoadMap />
          </div>
          
        </div>

        <Footer />
        <UpScrolbutton />
      </div>
    </>
  );
}

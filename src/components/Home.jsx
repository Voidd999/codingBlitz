import React from "react";
import Typed from "react-typed";
import "./Home.css";
import Laptop from "../assets/Images/Analytics.png";

const Home = () => {
  return (
    <div className="w-full h-[800px] py-20 px-4 sm:mb-28 mb-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="/"
          id="ills"
        />
        <div className="flex flex-col justify-center mx-10">
          <h1
            className="md:text-7xl sm:text-6xl text-6xl font-bold md:py-2"
            id="title2"
          >
            Inter<span id = 'n'>N</span>
            exus
          </h1>
          <p classname="md:text-2xl sm:text-xl text-xl font bold" id="tagline">
            From zero experience to your Dream job
          </p>

          <div>
            <p className="font-bold py-0.1">Helping</p>
            <Typed
              className="text-2xl font-bold"
              strings={["students", "recent graduates"]}
              typeSpeed={20}
              backDelay={2000}
              backSpeed={50}
              loop
              id="typed"
            />
          </div>
          <button
            className="bg-black text-[#5299fc]
            w-[150px] font-medium 
            m-3 mx-auto md:mx-0  py-3"
            id="startbtn"
          >
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

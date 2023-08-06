import React from "react";
import Laptop from "../assets/Images/Login.png";
import Programming from "../assets/Images/Programming.png";
import Analysis from "../assets/Images/Analysis.png";
import Collaborate from "../assets/Images/Collaborate.png";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4" id="step1">
        <h1 className="text-5xl font-bold text-center py-5 mt-0">
          How It Works
        </h1>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center mx-10">
            <p className="font-bold text-xl">Step 1</p>
            <h1 className="py-2">Sign Up On Internexus</h1>
            <p>
              Enroll in InternNexus and have your activity analyzed by AI to
              receive relevant content recommendations.
            </p>
            <button
              className="bg-black text-[#00bbff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              id="startbtn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4" id="step2">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-10">
            <p className="font-bold text-xl">Step 2</p>
            <h1 className="py-2">Discover various activities</h1>
            <p>
              InternNexus provides users with the opportunity to enroll in live
              webinars, read blogs and articles, watch videos, and receive
              assessment points to improve their ranking on the platform and
              redeem offers. The platform also offers technical support.
            </p>
            <button
              className="bg-black text-[#00bbff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              id="startbtn"
            >
              Get Started
            </button>
          </div>
          <img className="w-[500px] mx-auto my-4" src={Programming} alt="/" />
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4" id="step3">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Analysis} alt="/" />
          <div className="flex flex-col justify-center mx-10">
            <p className="font-bold text-xl">Step 3</p>
            <h1 className="py-2">Use Profile Analytics Driven By AI</h1>
            <p>
              Our AI-based system evaluates daily user activity and offers
              customized internship opportunities for immediate application.
            </p>
            <button
              className="bg-black text-[#00bbff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              id="startbtn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4" id="step4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-10">
            <p className="font-bold text-xl ">Finally</p>
            <h1 className="py-2">Internship Availabilities</h1>
            <p>
              InternNexus tracks your activity and AI-powered analysis provides
              insights to potential hiring companies after applying for an
              internship. .
            </p>
            <button
              className="bg-black text-[#00bbff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              id="startbtn"
            >
              Get Started
            </button>
          </div>
          <img className="w-[500px] mx-auto my-4" src={Collaborate} alt="/" />
        </div>
      </div>
    </>
  );
};
export default Content;

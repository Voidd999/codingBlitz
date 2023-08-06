import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-16 text-black px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to stay in touch with us?
          </h1>
          <p>Leave us your email address and we will be with you ASAP.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              style={{ border: "2px solid #000" }}
            />
            <button className="bg-[#5299fc] text-black rounded-md font-medium w-[250px] ml-4 my-6 px-6 py-3">
              Send Adress
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#5299fc]"style={{cursor:"pointer"}}>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

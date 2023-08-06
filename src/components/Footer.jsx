import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="max-w-auto mx-auto py-16 px-20 grid lg:grid-cols-3 gap-8 text-gray-300"
      style={{ background: "#141414" }}
    >
      <div>
        <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold md:py-2">
          Inter<span id="n">N</span>
          exus
        </h1>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-xl mb-3">Quick Links</h6>
          <ul>
            <li className="py-2 text-smpy-2 text-sm text-white">Blogs</li>
            <li className="py-2 text-smpy-2 text-sm text-white">Webinars</li>
            <li className="py-2 text-smpy-2 text-sm text-white">Resources</li>
            <li className="py-2 text-smpy-2 text-sm text-white">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-xl mb-3">Support</h6>
          <ul>
            <li className="py-2 text-sm text-white">Pricing</li>
            <li className="py-2 text-sm text-white">Documentation</li>
            <li className="py-2 text-sm text-white">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-xl mb-3">Company</h6>
          <ul>
            <li className="py-2 text-sm text-white">About</li>
            <li className="py-2 text-sm text-white">Blog</li>
            <li className="py-2 text-sm text-white">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-xl mb-3">Legal</h6>
          <ul>
            <li className="py-2 text-sm text-white">Claim</li>
            <li className="py-2 text-sm text-white">Policy</li>
            <li className="py-2 text-sm text-white">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

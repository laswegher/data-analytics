import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <div className="bg-[#121212] text-white py-14">
      <div className="Container grid grid-cols-12 gap-4">
        {/* sec-1 */}
        <div className="col-span-12 md:col-span-4">
          <h1 className="text-3xl font-bold text-green-500">
            REACT.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iusto voluptates earum dolor praesentium illum,
          </p>
          {/* Social icons */}
          <div className="max-w-[250px] mt-4">
            <SocialIcons />
          </div>
        </div>
        {/* sec-2 */}
        <div className="col-span-3 md:col-span-2 flex flex-col ">
          <h3 className="mb-2 text-gray-400 font-bold">Solution</h3>
          <ul className="text-sm font-semibold">
            <li className="p-1 cursor-pointer">Analytics</li>
            <li className="p-1 cursor-pointer">Marketing</li>
            <li className="p-1 cursor-pointer">Commerce</li>
            <li className="p-1 cursor-pointer">Insights</li>
          </ul>
        </div>
        {/* sec-3 */}
        <div className="col-span-3 md:col-span-2 flex flex-col ">
          <h3 className="mb-2 text-gray-400 font-bold">Support</h3>
          <ul className="text-sm font-semibold">
            <li className="p-1 cursor-pointer">Pricing</li>
            <li className="p-1 cursor-pointer">Docs</li>
            <li className="p-1 cursor-pointer">Guides</li>
            <li className="p-1 cursor-pointer">API Status</li>
          </ul>
        </div>
        {/* sec-4 */}
        <div className="col-span-3 md:col-span-2 flex flex-col ">
          <h3 className="mb-2 text-gray-400 font-bold">Company</h3>
          <ul className="text-sm font-semibold">
            <li className="p-1 cursor-pointer">About</li>
            <li className="p-1 cursor-pointer">Blog</li>
            <li className="p-1 cursor-pointer">Jobs</li>
            <li className="p-1 cursor-pointer">Press</li>
            <li className="p-1 cursor-pointer">Partners</li>
          </ul>
        </div>
        {/* sec-5 */}
        <div className="col-span-3 md:col-span-2 flex flex-col ">
          <h3 className="mb-2 text-gray-400 font-bold">Legal</h3>
          <ul className="text-sm font-semibold">
            <li className="p-1 cursor-pointer">Claim</li>
            <li className="p-1 cursor-pointer">Privacy</li>
            <li className="p-1 cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from 'next/image';
import React from 'react';
import image from '../public/laptop.jpg';
import Button from './Button';

const Section = () => {
  return (
    <div className="my-20">
      <div className="Container FCenter gap-4 flex-col sm:flex-row">
        {/* Image */}
        <div className="flex-1 FCenter mx-auto">
          <Image
            src={image}
            alt="/"
            className="w-full h-[300px] sm:max-w-[350px] sm:h-full object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex-1 ">
          <p className="text-green-400 text-sm font-bold tracking-widest uppercase">
            Data analytics dashboard
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Manage Data Analiytics Centrally
          </h1>
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Suscipit necessitatibus, adipisci, accusantium nisi, modi
            illo laborum excepturi atque maxime exercitationem sint
            quae doloremque asperiores esse recusandae quia repellat
          </p>
          <Button className="mt-2 bg-[#121212] text-green-400">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section;

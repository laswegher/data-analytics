import React from 'react';
import Button from './Button';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className=" CenterComponent text-white bg-[#121212] pt-16">
      <div className="Container FCenter text-center flex-col">
        <p className="text-green-400 text-sm font-bold tracking-widest uppercase">
          Growing with data analytics
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Grow with data.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          Fast,flexible financing for{' '}
          <span className="text-gray-500 font-extrabold">
            <Typewriter
              words={['BTB', 'BTC', 'SASS', 'D2C']}
              cursor
              loop={0}
            />
          </span>
        </h2>
        <p className="sm:text-lg font-bold tracking-wide sm:tracking-wider md:tracking-widest text-center max-w-[500px] text-gray-500 mt-2">
          Monitoryour data analytics to increase revenue for BTB,BTC,&
          SASS platforms.
        </p>
        <Button className="mt-5 bg-green-400 text-black ">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;

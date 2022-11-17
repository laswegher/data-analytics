import React from 'react';
import Button from './Button';

const Newslater = () => {
  return (
    <div className="bg-[#121212] w-full text-white py-10 md:py-20 my-10">
      <div className="Container grid grid-cols-5 gap-10 md:gap-3">
        {/* Text */}
        <div className="col-span-5 md:col-span-3">
          <h2 className="text-2xl lg:text-3xl mb-2">
            Want tops & tricks to optimize your flow?
          </h2>
          <p>Sign up to our newslater and stay up to date.</p>
        </div>

        <div className="col-span-5 md:col-span-2">
          {/* Form */}
          <form className="grid  grid-cols-3 gap-4 mb-2 max-w-[500px]">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className=" text-[#121212] px-4 py-1 rounded-lg focus:outline-none col-span-2 h-[35px]"
            />
            <Button className="col-span- h-[35px] bg-green-500 text-[#121212] ">
              Notify me
            </Button>
          </form>
          {/* Policy */}
          <p className="text-sm tracking-wide ">
            We care about the protection of your data. Read our{' '}
            <span className="text-green-500 font-bold cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newslater;

/*

*/

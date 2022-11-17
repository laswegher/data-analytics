import React, { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

const barAnimate = {
  open: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
      stiffness: 200,
    },
  },
  close: {
    x: '-100%',
  },
};

const items = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  close: { x: -100 },
};

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => {
    setToggleNav((prevState) => !prevState);
  };
  console.log(toggleNav);
  return (
    <div className="absolute inset-0 h-16 FCenter text-white">
      <div className="Container FBetween gap-4">
        {/* Logo */}
        <div className="mr-auto">
          <h1 className="text-green-400 uppercase font-bold text-3xl">
            React.
          </h1>
        </div>
        {/* Navigation */}
        <ul className="hidden sm:flex gap-3">
          <motion.li
            intial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            intial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            Account
          </motion.li>
          <motion.li
            intial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            Sign in
          </motion.li>
        </ul>

        {/* Action Button */}
        <Button className="hidden sm:block bg-white text-black">
          Get Started
        </Button>

        {/* Mobile Nav Icon */}
        <motion.div
          intial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleToggle}
          className="cursor-pointer block sm:hidden"
        >
          <AiOutlineBars size={25} />
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          variants={barAnimate}
          initial="close"
          animate={`${toggleNav ? 'open' : 'close'}`}
          className="absolute inset-0 p-4 w-full h-screen bg-[#121212]"
        >
          {/* Top Nav */}
          <div className="relative FBetween z-50">
            {/* Logo */}
            <div className="mr-auto">
              <h1 className="text-green-400 uppercase font-bold text-3xl">
                React.
              </h1>
            </div>
            {/* Mobile Nav Icon */}
            <motion.div
              intial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleToggle}
              className="cursor-pointer block md:hidden"
            >
              <AiOutlineClose size={25} />
            </motion.div>
          </div>

          <div className="absolute inset-0  FCenter flex-col gap-3">
            {/* Navigation */}
            <ul className="mb-10">
              <motion.li
                variants={items}
                className="text-4xl cursor-pointer p-2 border-b-2 border-green-400"
              >
                Home
              </motion.li>
              <motion.li
                variants={items}
                className="text-4xl cursor-pointer p-2 border-b-2 border-green-400"
              >
                Account
              </motion.li>
              <motion.li
                variants={items}
                className="text-4xl cursor-pointer p-2 border-b-2 border-green-400"
              >
                Sign in
              </motion.li>
            </ul>

            {/* Action Button */}
            <Button className="bg-white text-black w-[150px]">
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

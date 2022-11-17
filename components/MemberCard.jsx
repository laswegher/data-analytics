import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';

const MemberCard = (props) => {
  const { image, title, price, special } = props;
  return (
    <motion.div
      style={{}}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className="FCenter flex-col shadow-xl rounded-xl px-4 py-8  w-full"
    >
      <div className="w-[70px] h-[70px]">
        <Image
          className="w-full h-full object-contain"
          src={image}
          alt="/"
        />
      </div>
      {/* Title */}
      <h1 className="text-xl font-bold mb-6">{title}</h1>
      {/* Price */}
      <p className="text-5xl font-extrabold">{price}</p>

      {/* Details */}
      <ul className="text-center font-medium my-3">
        {props.detail.map((el, index) => {
          return (
            <li
              className="border-b-2 m-2 p-2"
              key={index}
            >
              {el}
            </li>
          );
        })}
      </ul>

      <Button
        className={`${
          special ? 'bg-black text-white' : 'bg-green-500 text-black'
        }  `}
      >
        Start Trial
      </Button>
    </motion.div>
  );
};

export default MemberCard;

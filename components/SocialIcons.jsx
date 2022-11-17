import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="FBetween w-full">
      <div>
        <FaFacebook size={25} />
      </div>

      <div>
        <FaTwitter size={25} />
      </div>

      <div>
        <FaGithub size={25} />
      </div>

      <div>
        <FaWhatsapp size={25} />
      </div>
    </div>
  );
};

export default SocialIcons;

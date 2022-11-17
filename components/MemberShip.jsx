import React from 'react';
import member_data from '../data/member_data';
import MemberCard from './MemberCard';

const MemberShip = () => {
  return (
    <div className="py-20">
      <div className="Container">
        <div className="flex flex-col md:flex-row mx-5 gap-6 ">
          {member_data.map((member) => {
            return (
              <MemberCard
                key={member.id}
                {...member}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberShip;

import React, { ReactNode } from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

interface SideBarIconProps {
  icon: ReactNode;
  text: ReactNode;
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, text }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
);

const LeftSidebar: React.FC = () => {
  return (
    <div className='flex top-0 left-0 w-16 m-0 flex-col bg-white text-white shadow-sm'>
      <SideBarIcon icon={<FaFire />} text={'Home'}/>
      <SideBarIcon icon={<BsPlus />} text={'Home'}/>
      <SideBarIcon icon={<BsFillLightningFill />} text={'Home'}/>
      <SideBarIcon icon={<BsGearFill />} text={'Home'}/>
      <SideBarIcon icon={<FaPoo />} text={'Home'}/>
    </div>
  );
};

export default LeftSidebar;

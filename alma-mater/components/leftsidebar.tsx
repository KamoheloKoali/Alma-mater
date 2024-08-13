import React, { ReactNode } from 'react';
import { BsFillLightningFill, BsGearFill, BsSearch } from 'react-icons/bs';
import { FaFire, FaPoo, FaUserCircle } from 'react-icons/fa';

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
    <aside className='mr-3 flex top-0 left-0 w-16 m-0 flex-col bg-white text-white shadow-sm justify-between'>
      <div className='flex flex-col'>
        <SideBarIcon icon={<FaFire />} text={'Home'} />
        <hr className='my-4 border-t border-gray-300' />
        <SideBarIcon icon={<BsSearch />} text={'Search'} />
        <SideBarIcon icon={<BsFillLightningFill />} text={'Favorites'} />
        <SideBarIcon icon={<BsGearFill />} text={'Settings'} />
        <SideBarIcon icon={<FaPoo />} text={'Manage Subscriptions'} />
        <hr className='my-4 border-t border-gray-300' />
      </div>

      <div className='flex flex-col'>
        <SideBarIcon icon={<FaUserCircle />} text={'Profile'} />
      </div>


    </aside>
  );
};

export default LeftSidebar;

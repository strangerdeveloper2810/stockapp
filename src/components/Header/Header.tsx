import React from 'react';
import Image from 'next/image';
import { Navigation, SearchBar, UserActions } from './Children';
import { logo, symbol } from '@/assets/icons';
import {} from '@/assets/icons';
const Header: React.FC = () => {
  return (
    <header className="flex relative justify-between items-center px-5 py-3 w-full bg-gray-900 rounded min-h-[68px] max-md:max-w-full">
      <div className="flex overflow-hidden z-0 gap-2 items-center self-stretch my-auto">
        <Image
          src={symbol}
          alt="Company logo"
          className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square"
        />
        <Image
          src={logo}
          alt="Company name"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.61] w-[94px]"
        />
      </div>
      <Navigation />
      <SearchBar />
      <UserActions />
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc86a531717770dcb6738ed56901fe0b821166935bc19c7a2bc89fb09549175?placeholderIfAbsent=true&apiKey=22d8154f16e04b8ab0bd7b0df307bf61"
        alt=""
        className="object-contain absolute bottom-0 left-2/4 z-0 shrink-0 self-start w-6 h-6 -translate-x-2/4 aspect-square translate-y-[0%]"
      /> */}
    </header>
  );
};

export default Header;
